import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: Request) {
    try {
        const rawData = await req.json()
        
        // Extract year for number_field if possible
        const yearMatch = rawData.vehicle?.match(/\d{4}/)
        const year = yearMatch ? parseInt(yearMatch[0]) : new Date().getFullYear()

        // Match the exact JSON structure provided by the user
        const structuredData = {
            "phone_number": rawData.phone,
            "full_name": rawData.name,
            "description": rawData.message || "",
            "privacy_accepted": true,
            "array_field": [
                ["service_selected", "estimate_request"]
            ],
            "number_field": year,
            "dateTime_field": new Date().toISOString(),
            "email_field": rawData.email,
            "service_needed": rawData.service,
            "vehicle_info": {
                "year_make_model": rawData.vehicle,
                "string_field": rawData.vehicle?.split(' ')[1] || ""
            },
            "uuid_field": crypto.randomUUID()
        }

        console.log('Sending JSON to Wix (Target Structure):', JSON.stringify(structuredData, null, 2))
        
        const response = await fetch('https://manage.wix.com/_api/webhook-trigger/report/41521ade-d7fb-43f7-a601-a87a1bbf96fd/3cbf3361-334f-4a2d-b7a7-cb1af50e7ea9', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(structuredData),
        })

        const responseText = await response.text()
        console.log(`Wix Response (${response.status}):`, responseText)

        if (!response.ok) {
            throw new Error(`Wix API responded with status: ${response.status} - ${responseText}`)
        }

        return NextResponse.json({ success: true })
    } catch (error: any) {
        console.error('Error in contact API route:', error.message)
        return NextResponse.json(
            { error: error.message || 'Failed to send data to Wix' },
            { status: 500 }
        )
    }
}
