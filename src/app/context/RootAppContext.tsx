'use client';
import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";



declare interface RootContext {
}
const RootAppContext = createContext<RootContext | undefined>({
});



export function useRootContext(): RootContext {
    return useContext(RootAppContext) as RootContext;
}

export default function RooAppContextProvider({ children }: { children: ReactNode }) {

    const [state, setState] = useState<RootContext>();
    const path = usePathname();

    useEffect(() => {
        path
    })

    return (
        <RootAppContext.Provider value={state}>
            {children}
        </RootAppContext.Provider>
    )
}