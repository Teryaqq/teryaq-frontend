import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
    return <footer className="bg-secondary py-2 text-white flex justify-evenly">
        <div className="flex justify-around text-2xl">
            <Link className="hover:text-blue-900" href="#"><BsInstagram className="mx-2" /></Link>
            <Link className="hover:text-blue-900" href="#"><BsFacebook className="mx-2" /></Link>
        </div>
        <p>All Rights Reserved &copy;</p>
    </footer>
}
