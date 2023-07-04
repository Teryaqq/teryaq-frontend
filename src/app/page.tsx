import Hero from "@/components/Hero";
import InfoBox from "@/components/InfoBox";
import ServiceBox from "@/components/ServiceBox";
import { BsHeartFill, BsSearch, BsCardChecklist, BsChatFill, BsPersonFill, BsCardText, BsClockHistory, BsBellFill } from "react-icons/bs";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="flex flex-col mb-10 items-center sm:flex-row sm:justify-center sm:items-stretch container mx-auto mt-[-60px]">
                <InfoBox title="Heart Rate" description="some little words about hear rate"><BsHeartFill /></InfoBox>
                <InfoBox title="Lab Test" description="This is a description about the lab test service"><BsCardChecklist /></InfoBox>
                <InfoBox title="Research Team" description="This is a description about the research team effort"><BsSearch /></InfoBox>
                <InfoBox title="Online Help" description="some little words about hear rate"><BsChatFill /></InfoBox>
            </div>
            <div className="container mx-auto mt-4 mb-4 grid px-6 sm:px-0 sm:grid-rows-2 sm:grid-cols-2">
                <ServiceBox
                    heading="Transplant Service"
                    content="Edit the Expression Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode."
                >
                    <BsPersonFill />
                </ServiceBox>
                <ServiceBox
                    heading="Qualified Doctors"
                    content="Edit the Expression Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode."
                >
                    <BsCardText />
                </ServiceBox>
                <ServiceBox
                    heading="24 Hourse Service"
                    content="Edit the Expression Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode."
                >
                    <BsClockHistory />
                </ServiceBox>
                <ServiceBox
                    heading="Emergency Departments"
                    content="Edit the Expression Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode."
                >
                    <BsBellFill />
                </ServiceBox>
            </div>
        </>
    )
}
