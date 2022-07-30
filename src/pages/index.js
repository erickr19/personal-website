import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { AiOutlineDownload } from "@react-icons/all-files/ai/AiOutlineDownload";
import resumeFile from "../../public/downloads/resume.pdf";
// markup
const IndexPage = () => {
  return (
      <Layout pageTitle="My name is Erick">
          {/* container div */}
          <div className="flex flex-col">
            {/* profile pic and heading */}
            <div className="flex flex-col justify-center self-center rounded-full">
              <div className="flex ring ring-white self-center mt-3 rounded-full bg-white">
                <StaticImage src="../images/upset.jpg" alt="homer looking upset in a blanket" imgClassName="rounded-full" width={200} height={200} />
              </div>
              <h1 className="self-center mt-4 text-2xl text-white">Hello, my name is Erick!</h1>
            </div>
            {/* body */}
            <div className="self-center mt-2 mx-6">
              <h2 className="text-center text-white">Web software development student @ Madison College</h2>
              <h2 className="text-center text-indigo-300 mt-2 mb-2">ereyes3@madisoncollege.edu</h2>
              <h3 className="text-white mx-4 mt-2 text-2xl">Skills:</h3>
              <ul className="text-white mx-8 mt-2 list-disc">
                <li className="text-lg">HTML</li>
                <li className="text-lg">CSS (+ frameworks)</li>
                <li className="text-lg">JavaScript (+ react)</li>
                <li className="text-lg">SQL (mysql + postgresql)</li>
                <li className="text-lg">PHP</li>
                <li className="text-lg">Java</li>
                <li className="text-lg">light UI / UX</li>
              </ul>
            </div>
            {/* bottom text */}
              <div className="self-center md:mx-1 mt-2">
                <div className="mt-3 flex">
                  <AiOutlineLinkedin className="text-white text-2xl mr-1"/>
                  <p className="text-white text-md">Linkedin: <a href="https://www.linkedin.com/in/erickreyesdev" className="text-indigo-300 hover:text-white">erickreyesdev</a></p>
                </div>
                <div className="mt-3 flex">
                  <ImGithub className="text-white text-2xl mr-1" />
                  <p className="text-white text-md">Github: <a href="https://github.com/erickr19" className="text-indigo-300 hover:text-white">erickr19</a></p>
                </div>
                <div className="mt-3 mb-7 flex">
                  <AiOutlineDownload className="text-white text-2xl mr-1" />
                  <p className="text-white text-md">Download my resume: <a href={resumeFile} download className="text-indigo-300 hover:text-white">here</a></p>
                </div>
              </div>
          </div>
      </Layout>
  )
}

export default IndexPage;
