"use client"

import * as React from "react"
import { motion, type Variants } from "motion/react"
import { cn } from "@/lib/utils"

interface AnimatedGroupProps {
    children: React.ReactNode
    className?: string
    variants?: {
        container?: Variants
        item?: Variants
    }
}

const defaultVariants: { container: Variants; item: Variants } = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    },
}

export function AnimatedGroup({
    children,
    className,
    variants = {},
}: AnimatedGroupProps) {
    const containerVariants = variants.container || defaultVariants.container
    const itemVariants = variants.item || defaultVariants.item

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={itemVariants}>{child}</motion.div>
            ))}
        </motion.div>
    )
}
