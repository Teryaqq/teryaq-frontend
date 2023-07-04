import { client } from "@/lib/sanityClient"
import Link from "next/link";

interface DrugItem {
    _id: string;
    genericName: string;
    brandNames: string[];
}

export default async function Drugs() {

    const drugs: DrugItem[] = await client.fetch(`*[_type == "drug"]{
            _id,
            genericName,
            brandNames,
        }`);

    return <div className="container mx-auto p-6">
        {[...drugs].reverse().map(drug => (
            <div key={drug._id} className="even:bg-base odd:bg-secondary text-white px-4 py-2 my-2 rounded-lg">
                <h3 className="font-bold text-2xl">
                    <Link href={`/drugs/${drug._id}`}>{drug.genericName}</Link>
                </h3>
                <p>{drug.brandNames.toString()}</p>
            </div>
        ))}
    </div>
}
