import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";

const LiquidGlass = ({ children, className = "", onClick }) => {
    return (
        <div
            className={clsx(
                "inline-flex md:rounded-4xl rounded-3xl bg-white/10 border border-white/30 shadow-xl backdrop-blur-md backdrop-saturate-150 transition-all duration-200 hover:backdrop-blur-xl hover:border-white/40 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

function AlertDialog({ ...props }) {
    return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({ ...props }) {
    return (
        <AlertDialogPrimitive.Trigger
            data-slot="alert-dialog-trigger"
            {...props}
        />
    );
}

function AlertDialogPortal({ ...props }) {
    return (
        <AlertDialogPrimitive.Portal
            data-slot="alert-dialog-portal"
            {...props}
        />
    );
}

function AlertDialogOverlay({ className, ...props }) {
    return (
        <AlertDialogPrimitive.Overlay
            data-slot="alert-dialog-overlay"
            className={cn(
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-md backdrop-saturate-150",
                className
            )}
            {...props}
        />
    );
}

function AlertDialogContent({ className, children, ...props }) {
    return (
        <AlertDialogPortal>
            <AlertDialogOverlay />
            <AlertDialogPrimitive.Content
                data-slot="alert-dialog-content"
                className={cn(
                    "fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] sm:max-w-lg",
                    className
                )}
                {...props}
            >
                <LiquidGlass className="w-full flex flex-col gap-4 p-6">
                    {children}
                </LiquidGlass>
            </AlertDialogPrimitive.Content>
        </AlertDialogPortal>
    );
}

function AlertDialogHeader({ className, ...props }) {
    return (
        <div
            data-slot="alert-dialog-header"
            className={cn(
                "flex flex-col gap-2 text-center sm:text-left",
                className
            )}
            {...props}
        />
    );
}

function AlertDialogFooter({ className, ...props }) {
    return (
        <div
            data-slot="alert-dialog-footer"
            className={cn(
                "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
                className
            )}
            {...props}
        />
    );
}

function AlertDialogTitle({ className, ...props }) {
    return (
        <AlertDialogPrimitive.Title
            data-slot="alert-dialog-title"
            className={cn("text-lg font-semibold text-slate-200/90", className)}
            {...props}
        />
    );
}

function AlertDialogDescription({ className, ...props }) {
    return (
        <AlertDialogPrimitive.Description
            data-slot="alert-dialog-description"
            className={cn("text-sm text-slate-300", className)}
            {...props}
        />
    );
}

function AlertDialogAction({ className, ...props }) {
    return (
        <AlertDialogPrimitive.Action
            className={cn(buttonVariants(), className)}
            {...props}
        />
    );
}

function AlertDialogCancel({ className, ...props }) {
    return (
        <AlertDialogPrimitive.Cancel
            className={cn(buttonVariants({ variant: "outline" }), className)}
            {...props}
        />
    );
}

export {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};
