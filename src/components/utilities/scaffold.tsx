import { ReactNode } from "react";
import AppBar from "./appbar";

export default function Scaffold({ appBar, children }: { appBar?: { title: ReactNode | string }, children?: ReactNode }) {

    return (
        <main className="w-full h-full flex flex-col gap-3 overflow-hidden">
            <AppBar {...appBar} />
            {children}
        </main>
    )
}