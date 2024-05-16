'use client';

import { ReactNode } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Left } from "@icon-park/react";
import { useRouter } from "next/navigation";

export default function AppBar({ title }: { title?: ReactNode | string }) {

    const router = useRouter();

    return (
        <div className="font-bold text-[1.5rem] w-full h-min bg-blue-500 text-white shadow-xl p-3 flex items-center gap-2">
            <Left onClick={() => router.back()} theme="outline" size={25} />
            <AnimatePresence>
                <motion.div
                    layoutId="app-bar"
                    initial={{ translateX: '-1rem', opacity: 0 }}
                    animate={{ translateX: '0rem', opacity: 1 }}
                    exit={{ translateX: '-1rem', opacity: 0 }}
                    className="w-full overflow-hidden whitespace-nowrap text-ellipsis"
                >{title}</motion.div>
            </AnimatePresence>
        </div>
    )
}