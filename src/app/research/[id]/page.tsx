import Link from "next/link";
import { client } from "@/lib/sanityClient";
import { BsFilePdfFill } from "react-icons/bs";

export default async function ResearchPage({ params }: {
    params: { id: string; };
}) {
    const { id } = params;
    const res = await client.fetch(`*[_type == "research" && _id == "${id}"]{title,description,"fileUrl": file.asset->url}[0]`);
    return <div className="container mx-auto p-6">
        <h1 className="text-4xl text-center font-semibold">{res.title}</h1>
        <Link target="_blank" href={res.fileUrl} className="text-secondary text-lg underline">
            <span className="flex items-center">
                <BsFilePdfFill />
                Download Research
            </span>
        </Link>
        <p className="text-2xl font-normal pt-4">Abstraction: </p>
        <p>{res.description}</p>
    </div>
}
