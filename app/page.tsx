import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/jo.jpg"

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center font-mono">
      <div className=" flex flex-col justify-center items-center w-[80%] mb-20 mt-15">
        {/* Profile Picture */}
        <div className="w-35 h-35">
          <Image src={profilePic} loading="eager" className="rounded-full" alt="Jose Ramos"></Image>
        </div>
        {/* Name */}
        <h1 className="p-10 pb-5 font-bold font-sans text-4xl text-center">Jose Ramos</h1>
        {/* Details */}
        <div className="text-gray-400 text-2xl text-center">
          <p className="pb-2">
            cs @ <span className="text-orange-600">utrgv</span>
          </p>
          <p className="italic">Software Developer</p>
        </div>

        {/* Separator */}
        <hr className="w-[70%] text-gray-200 m-20 border-t-2" />

        {/* Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-3xl gap-x-45 gap-y-15">
          <div className="flex flex-col gap-5">
            <Link className="hover:underline underline-offset-8 hover:text-orange-600" href="/about">&gt; about me</Link>
            <Link className="hover:underline underline-offset-8 hover:text-orange-600" href="/blog">&gt; my blog</Link>
          </div>
          <div className="flex flex-col gap-5">
            <Link  className="hover:underline underline-offset-8 hover:text-orange-600" href="/projects">&gt; projects</Link>
            <Link className="hover:underline underline-offset-8 hover:text-orange-600" href="/contact">&gt; contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
