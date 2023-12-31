import Image from "next/image"
import Link from "next/link"
import ListItem from "./ListItem"

export default function Navbar() {
    return <header className="shadow-sm shadow-gray-200 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm dark:bg-gray-800">
        <nav className="container max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="LOGO" width={227} height={331} />
                </Link>
                <div className="sm:hidden">
                    <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="navbar-with-collapse" className="hidden basis-full grow h-full sm:flex sm:items-stretch sm:justify-end">
                <div className="flex flex-col justify-stretch gap-5 mt-5 sm:flex-row sm:items-stretch sm:justify-end sm:mt-0 sm:pl-5">
                    <ListItem loc="/">Home</ListItem>
                    <ListItem loc="/research">Research</ListItem>
                    <ListItem loc="/drugs">Drugs</ListItem>
                    <ListItem loc="/diseases">Diseases</ListItem>
                </div>
            </div>
        </nav>
    </header>
}
