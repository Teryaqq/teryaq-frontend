export default function TextContainer({ title, text }: {
    title: string;
    text: string;
}) {
    return <div className="my-4">
        <h3 className="text-4xl mb-2">{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: text.replaceAll("\n", "<br />") }}></p>
    </div>
}
