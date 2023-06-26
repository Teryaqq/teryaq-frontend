import { ReactNode } from "react";

export default function InfoBox({ children, title, description }: {
    children: ReactNode;
    title: string;
    description: string;
}) {
    return <div className="p-4 w-full sm:w-96 text-center text-white flex flex-col items-center even:bg-base odd:bg-secondary">
        <div className="text-5xl pt-3">{children}</div>
        <div className="py-3 text-3xl font-bold">{title}</div>
        <div>{description}</div>
    </div>
}
