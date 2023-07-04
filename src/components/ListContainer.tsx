export default function ListContainer({ title, list }: {
    title: string;
    list: string[];
}) {
    return <div className="my-4">
        <h1 className="text-4xl mb-2">{title}</h1>
        <ul>
            {list.map(item => <li key={item} className="list-disc ml-5">{item}</li>)}
        </ul>
    </div>
}
