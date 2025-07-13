import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "px-4 py-3 w-full bg-transparent  text-slate-700 placeholder:text-slate-700/60 border-0 outline-0",
                className
            )}
            {...props}
        />
    );
}

export { Input };
