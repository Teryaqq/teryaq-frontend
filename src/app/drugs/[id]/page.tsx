import ListContainer from "@/components/ListContainer";
import TextContainer from "@/components/TextContainer";
import { client } from "@/lib/sanityClient";

interface DrugDetails {
    genericName: string;
    brandNames: string[];
    drugClass: string;
    dosageForm: string[];
    description: string;
    ingredients: string;
    howToTake: string;
    infoBeforeTaking: string;
    storage: string;
    interactions: string;
    whyNotTake: string;
    importnantInfo: string;
    usedFor: string[];
    sideEffects: string[];
}

export default async function DrugPage({ params }: {
    params: { id: string; };
}) {
    const { id } = params;

    const [drug] = await client.fetch(`*[_type == "drug" && _id == "${id}"]{
            genericName,
            brandNames,
            drugClass,
            dosageForm,
            description,
            ingredients,
            howToTake,
            infoBeforeTaking,
            storage,
            sideEffects,
            interactions,
            whyNotTake,
            importnantInfo,
            usedFor
        }`) satisfies DrugDetails[];

    return <div className="container mx-auto p-4">
        <h1 className="text-2xl"><span className="font-bold">Generic name: </span>{drug.genericName}</h1>
        <h1 className="text-lg"><span className="font-bold">Brand names: </span>{drug.brandNames.toString()}</h1>
        <h1 className="text-lg"><span className="font-bold">Drug class: </span>{drug.drugClass}</h1>
        <TextContainer title={`What is ${drug.genericName}`} text={drug.description} />
        <ListContainer title={`What is ${drug.genericName} used for?`} list={drug.usedFor} />
        <ListContainer title={`Dosage form`} list={drug.dosageForm} />
        <TextContainer title={`Important information`} text={drug.importnantInfo} />
        <TextContainer title={`Who should not take ${drug.genericName}`} text={drug.whyNotTake} />
        <TextContainer title={`What should I tell my doctor before taking ${drug.genericName}`} text={drug.infoBeforeTaking} />
        <TextContainer title={`How should I take ${drug.genericName}?`} text={drug.howToTake} />
        <ListContainer title={`What are the side effects of ${drug.genericName}?`} list={drug.sideEffects} />
        <TextContainer title={`Interactions`} text={drug.interactions} />
        <TextContainer title={`Storage`} text={drug.storage} />
        <TextContainer title={`What are the ingredients of ${drug.genericName}`} text={drug.ingredients} />
    </div>;
}
