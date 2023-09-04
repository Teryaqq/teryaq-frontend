import { client } from "@/lib/sanityClient"
import Link from "next/link";

interface DiseaseItem {
    _id: string;
    name: string;
    overview: string;
}

export const revalidate = 0;

export default async function Diseases() {

    const diseases: DiseaseItem[] = await client.fetch(`*[_type == "disease"]{
        _id,
        name,
        overview
    }`);

    return <div className="container mx-auto p-6">
        {[...diseases].reverse().map(disease => (
            <div key={disease._id} className="even:bg-base odd:bg-secondary text-white px-4 py-2 my-2 rounded-lg">
                <h3 className="font-bold text-2xl">
                    <Link href={`/diseases/${disease._id}`}>{disease.name}</Link>
                </h3>
                <p>{disease.overview.slice(0, 250) + "..."}</p>
            </div>
        ))}
    </div>
}
