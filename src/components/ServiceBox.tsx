import Link from "next/link";
import { ReactNode } from "react";
import { BsArrowRight, BsHeartFill } from "react-icons/bs";

export default function ServiceBox({ heading, content, children }: {
    heading: string;
    content: string;
    children: ReactNode;
}) {
    return <div className="flex justify-around m-1 border-b-gray-200 border-b pb-3">
        <div className="text-4xl text-white flex justify-center items-center " >
            <div className="p-3 custom-grad ">
                {children}
            </div>
        </div>
        <div className="px-2">
            <h1 className="font-semibold text-xl">{heading}</h1>
            <p className="text-gray-600">{content}</p>
        </div>
        <div className="flex justify-start items-end pr-3">
            <Link className="p-1" href="#">
                <BsArrowRight className="bg-base text-white text-lg" />
            </Link>
        </div>
    </div>
}
