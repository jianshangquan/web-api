import { ReactNode } from "react";

export default function ScaffoldBody({ children }: { children?: ReactNode }) {
    return (
        <div className="w-full h-full overflow-auto p-3">
            {children}
        </div>
    )
}