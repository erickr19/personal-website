// imports
import * as React from 'react';
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { Link } from "gatsby";

// define layout

const Layout = ({ pageTitle, children }) => {
    // TODO: Add dynamic page titles

    return (
        <div className="px-2 md:p-0 flex grow flex-col align-middle justify-center h-screen bg-gradient-to-t from-slate-900 to-cyan-900">
            <title>{pageTitle}</title>
            {/* mobile navigation */}
            <div className="flex grow items-center justify-evenly h-1 mt-10 mb-10 md:mb-0">
                <Link to="/"><HomeIcon className="h-10 w-10 text-white hover:text-indigo-300 focus:text-indigo-300 self-center" /></Link>
                <Link to="/more-info"><InformationCircleIcon className="h-10 w-10 text-white hover:text-indigo-300" /></Link>
            </div>
            {/* card container */}
            <div className="flex grow flex-col self-center md:rounded-lg h-5/6 w-screen sm:w-4/5 overflow-auto mb-20">
                <main>
                    {children}
                </main>
            </div>

        </div>
    )
}

// export layout for use
export default Layout;