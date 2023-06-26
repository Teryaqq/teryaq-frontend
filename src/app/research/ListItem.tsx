import Link from "next/link";

export default function ListItem({ id, title, description }: {
    id: string;
    title: string;
    description: string;
}) {
    return <div className="even:bg-base odd:bg-secondary text-white px-4 py-2 my-2 rounded-lg">
        <Link href={`/research/${id}`} className="text-xl font-semibold">{title}</Link>
        <p className="text-gray-200 mt-2">{description.slice(0, 150)}...</p>
    </div>
}
