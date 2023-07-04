import ListContainer from "@/components/ListContainer";
import TextContainer from "@/components/TextContainer";
import { client } from "@/lib/sanityClient";

interface Disease {
    name: string;
    overview: string;
    symptoms: string[];
    causes: string[];
    complications: string[];
    riskFactors: string[];
    prevention: string[];
    extraInfo: string;
}

export default async function DiseasePage({ params }: {
    params: { id: string; };
}) {
    const { id } = params;
    const [disease] = await client.fetch(`*[_type == "disease" && _id == "${id}"]{
            name,
            overview,
            symptoms,
            causes,
            complications,
            riskFactors,
            prevention,
            extraInfo
        }`) satisfies Disease[];
    return <div className="container mx-auto p-4">
        <h1 className="text-6xl">{disease.name}</h1>
        <TextContainer title="Overview" text={disease.overview} />
        <ListContainer title="Symptoms" list={disease.symptoms} />
        <ListContainer title="Causes" list={disease.causes} />
        <ListContainer title="Risk factors" list={disease.riskFactors} />
        <ListContainer title="Complications" list={disease.complications} />
        <ListContainer title="Prevention" list={disease.prevention} />
        <TextContainer title="Extra Information" text={disease.extraInfo} />
    </div>
}
