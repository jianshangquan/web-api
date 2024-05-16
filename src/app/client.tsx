'use client';

import { DEFAULT_ICON_CONFIGS, IconProvider } from "@icon-park/react";
import { ReactNode } from "react";
import RooAppContextProvider from "./context/RootAppContext";

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon', size: 10 }

export default function ClientProvider({ children }: { children: ReactNode }) {
    return (
        <IconProvider value={IconConfig}>
            <RooAppContextProvider>
                {children}
            </RooAppContextProvider>
        </IconProvider>
    )
}