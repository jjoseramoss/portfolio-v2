import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import tarinImg from "../../public/target.png";
import soccerImg from "../../public/soccer-ball.png";

export default function Projects() {
  return (
    <div className="w-screen min-h-screen overflow-y-auto flex justify-center md:items-center text-sm">
      <div className="w-[95%] md:w-[35%] p-5 my-10 flex flex-col">
        <Link
          href="/"
          className="text-[#a1a1aa] pt-5 hover:text-black font-mono text-sm font-light"
        >
          ← Back to home
        </Link>
        <br />

        <h1 className="font-bold text-5xl pt-5 md:text-2xl">projects 💥</h1>
        <div className="pt-6 font-light text-gray-800 tracking-wider mt-5 flex flex-col gap-y-5">
          <ProjectCard 
          name="tarin"
          description="A daily social target tracking web application"
          link="https://tarin-alpha.vercel.app/"
          tools={["react", "typescript"]}
          icon={tarinImg}
          alt=""/>
          <ProjectCard 
          name="2026 World Cup Pick'em"
          description="A daily social target tracking web application"
          link="https://wc26-pick-em.vercel.app/"
          tools={["react", "typescript"]}
          icon={soccerImg}
          alt=""/>
          <ProjectCard 
          name="vibegen"
          description="A daily social target tracking web application"
          link="https://tarin-alpha.vercel.app/"
          tools={["react", "typescript"]}
          icon={tarinImg}
          alt=""/>
          <ProjectCard 
          name="who knows me"
          description="A daily social target tracking web application"
          link="https://tarin-alpha.vercel.app/"
          tools={["react", "typescript"]}
          icon={tarinImg}
          alt=""/>
          <ProjectCard 
          name="moneta"
          description="A daily social target tracking web application"
          link="https://tarin-alpha.vercel.app/"
          tools={["react", "typescript"]}
          icon={tarinImg}
          alt=""/>
          <ProjectCard 
          name="arp dashboard"
          description="A daily social target tracking web application"
          link="https://tarin-alpha.vercel.app/"
          tools={["react", "typescript"]}
          icon={tarinImg}
          alt=""/>
         
          

        </div>
      </div>
    </div>
  );
}
