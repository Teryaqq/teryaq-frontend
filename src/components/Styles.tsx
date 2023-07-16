"use client";

import { useEffect } from "react";

export default function Styles() {
    useEffect(() => {
        import("preline" as any);
    }, []);
    return null;
}
