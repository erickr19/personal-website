// imports
import * as React from 'react';
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { Link } from "gatsby";

// define layout

const Layout = ({ pageTitle, children }) => {
    // TODO: Add dynamic page titles
    
    return (
        <div className="flex flex-col align-middle justify-center h-screen bg-gradient-to-t from-slate-900 to-cyan-900">
            <title>{pageTitle}</title>
            {/* TODO: add nav for desktop */}
            {/* card container */}
            <div className="self-center md:rounded-lg h-5/6 w-screen sm:w-4/5 overflow-auto">
                <main>
                    {children}
                </main>
            </div>
            {/* mobile navigation */}
            <hr className="w-3/4 self-center"></hr>
            <div className="flex justify-evenly h-2 p-3 mt-4 h-1 mb-8">
                <Link to="/"><HomeIcon className="h-10 w-10 text-white hover:text-indigo-300 focus:text-indigo-300"/></Link>
                <Link to="/more-info"><InformationCircleIcon className="h-10 w-10 text-white hover:text-indigo-300"/></Link>
            </div>
        </div>
    )
}

// export layout for use
export default Layout;