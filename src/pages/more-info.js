// import
import * as React from 'react';
import Layout from '../components/layout';
// define page
const MoreInfoPage = () => {
    return (
        <Layout pageTitle="More information about me">
            <div className="flex flex-col">
                {/* profile pic and heading */}
                <div className="flex flex-col">
                    <h1 className="ml-2 mt-4 text-4xl text-white">More about me</h1>
                </div>
                {/* body */}
                <div className="ml-4 mt-2 mr-8">
                    <p className="text-indigo-300 text-2xl mb-2 underline">Why web development?</p>
                    <p className="text-white">
                        I was born just in time to grow up with the Internet. As a child, I would find the computer to be very entertaining. 
                    </p>
                    <p className="text-white mt-3">
                        When I first started coding as a hobby in high school was when I found out that I genuinely enjoyed it.
                    </p>
                    <p className="text-white mt-3">
                        Now, I find web development a creative outlet that will always provide a challenge. However, I get to make the solution for the challenge not just use it!
                    </p>
                </div>
                
                <div className="ml-4 mt-4 mr-8">
                    <p className="text-indigo-300 text-2xl mb-2 underline">Hobbies</p>
                        <ul className="text-white list-disc mx-3">
                            <li>Listen or make music 🎵</li>
                            <li>Hang out with my dog, Rosie 🐶</li>
                            <li>Play video games 👾</li>
                        </ul>
                </div>

                <div className="ml-4 mt-4 mr-8">
                    <p className="text-indigo-300 text-2xl mb-2 underline">Goals</p>
                    <p className="text-white">In the short term, my goal is to intern and grow my skills as a professional developer.</p>
                    <p className="text-white mt-5">Long term, I'd like to move to Washington state and explore the world.</p>
                </div>


                {/* bottom text */}
                <div className="self-center mx-6 mt-28">
                    <p className="text-white md:hidden">👻</p>
                </div>
            </div>
        </Layout>
    )
}

export default MoreInfoPage;