import Link from "next/link"; 
import Image from "next/image";
import boysPic from "../../public/the-boys.jpg"

export default function About() { 
  return ( 
    <div className="w-screen min-h-screen flex justify-center md:items-center text-sm"> 
      <div className="w-[95%] xl:w-[35%] p-5 my-10 flex flex-col"> 
        <span>
          <Link
            href="/"
            className=" text-[#a1a1aa] pt-5 hover:text-black font-mono text-sm font-light"
          >
            ← Back to home
          </Link>
        </span>
        <br /> 
        
        {/* Main Content */} 
        <div className="w-full"> 
          <h1 className="font-bold text-4xl pt-15 md:text-2xl">Hey, I&apos;m Jose 👋</h1> 
          <div className="pt-6 font-light text-gray-800 tracking-wider mt-5 flex flex-col gap-y-5"> 
            <p>I&apos;m 21, from Texas.</p> 
             
            <p>I&apos;m studying Computer Science at UTRGV, graduating Dec 2026</p> 
            <p>I&apos;m really into building software, especially stuff that uses AI in a useful way.</p> 
            <p>Right now I work as a Web Dev Student Assistant for UTRGV UMC, where I help update older university sites and improve accessibility.</p>
            <p>I&apos;m also the president of Data Structures and Algorithms Architects (DSAA), wherewe do tech interview prep and help each other get better at DSA</p>
            <h2 className="font-bold text-xl pt-15 tracking-normal">History</h2>
            <p>I got into CS because I grew up on videogames. Games always felt like this crazy new way to interact with the world.</p>
            <p>Once I realized you can build stuff on the internet that people actually use, I was hooked. I want to build software that helps people and makes life smoother.</p>
            <p>Right now I&apos;m focused on landing a new grad role and building my career taking care of my family, and staying in shape.</p>
            <p>When I&apos;m not at my computer, I&apos;m probably at the gym, watching a movie, or out fishing.</p>
            <h2 className="font-bold text-xl pt-15 tracking-normal">More about me</h2>
            <ul className="list-disc flex flex-col gap-y-5 px-4">
              <li>I like to go fishing with friends</li>
              <li>My favorite movies are Rocky IV, Project Hail Mary, and Spider-Man (the og)</li>
              <li>I&apos;m on the grind for a lean mean machine physique. I love the gym.</li>
            </ul>
            

            <p className="pt-15">If you&apos;re a recruiter, or just a cool person, <a className="text-orange-600 hover:text-orange-700 hover:font-bold transition" href="mailto:josemramos.tech@gmail.com">let&apos;s talk</a></p>
            <p className="pt-15">Have a blessed day, <br /> <span className="text-black">Jose Ramos</span></p>
          </div> 
          <Image className="pt-15 w-full" src={boysPic} alt="Pic of me and the boys"></Image>
        </div> 
      </div> 
    </div> 
  ); 
}
