import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import WrapWithAOS from "./Pages/WrapWithAOS.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <WrapWithAOS />
        </AuthProvider>
        <Toaster position="top-right" richColors />
    </StrictMode>
);
