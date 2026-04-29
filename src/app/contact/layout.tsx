import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <ToastContainer position="top-right" theme="dark" closeOnClick rtl={false} />
        </>
    );
}
