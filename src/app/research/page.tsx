import { client } from "@/lib/sanityClient";
import ListItem from "./ListItem";

type ResearchListItem = {
    title: string;
    _id: string;
    description: string;
    researchFile: string;
};

export default async function Research() {
    const research: ResearchListItem[] = await client.fetch(`*[_type == "research"]{
        title,
        _id,
        description,
        "researchFile": file.asset->url
    }`);

    return <div className="container mx-auto p-6">{research.map(research => <ListItem
        key={research._id}
        id={research._id}
        title={research.title}
        description={research.description}
    />)}</div>

}
