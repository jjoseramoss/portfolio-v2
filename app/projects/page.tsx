import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import tarinImg from "../../public/target.png";
import soccerImg from "../../public/soccer-ball.png";
import wifiImg from "../../public/wifi.png";
import petImg from "../../public/pet-map.png";
import questionImg from "../../public/question.png";
import headphonesImg from "../../public/headphones.png";

export default function Projects() {
  return (
    <div className="w-screen min-h-screen overflow-y-auto flex justify-center md:items-center text-sm">
      <div className="w-[95%] md:w-[35%] p-5 my-10 flex flex-col">
        <span>
          <Link
            href="/"
            className=" text-[#a1a1aa] pt-5 hover:text-black font-mono text-sm font-light"
          >
            ← Back to home
          </Link>
        </span>
        <br />

        <h1 className="font-bold text-5xl pt-5 md:text-2xl">projects 💥</h1>
        <div className="pt-6 font-light text-gray-800 tracking-wider mt-5 flex flex-col gap-y-5">
          <ProjectCard 
          name="tarin"
          description="A daily social target tracking web application"
          link="https://tarin-alpha.vercel.app/"
          tools={["react", "typescript", "supabase"]}
          icon={tarinImg}
          alt=""/>
          <ProjectCard 
          name="2026 World Cup Pick'em"
          description="A mobile friendly web based World Cup 2026 pick ems app for friends or family to compete and see how good you are at guessing game outcomes."
          link="https://wc26-pick-em.vercel.app/"
          tools={["react", "typescript", "supabase"]}
          icon={soccerImg}
          alt=""/>
          <ProjectCard 
           name="who knows me"
           description="Real-time multiplayer game built with websockets."
           link="https://github.com/jjoseramoss/who-knows-me"
           tools={["react", "typescript", "firebase", "socket.io"]}
           icon={questionImg}
           alt="Project icon for who knows me"/>
          <ProjectCard 
          name="arp dashboard"
          description="A networks project that discovers devices on a local LAN using ARP scans and shows them in a live web dashboard."
          link="https://github.com/jjoseramoss/arp-network-monitor"
          tools={["python", "scapy", "flask", "html", "css"]}
          icon={wifiImg}
          alt="Project icon for arp dashboard"/>
           <ProjectCard 
           name="pet scout"
           description="Hackathon MVP: Map-first web app for posting and finding missing pets."
           link="https://github.com/jjoseramoss/lost-pet-map"
           tools={["Next.js", "mapbox\u00A0gl", "react", "tailwindcss", "supabase", "openai\u00A0api"]}
           icon={petImg}
           alt="Project icon for pet scout"/>
           <ProjectCard 
           name="vibegen"
           description="Turns a user vibe prompt into a Spotify playlist on their account."
           link="https://github.com/jjoseramoss/VibeGen"
           tools={["python", "openai api", "spotify api"]}
           icon={headphonesImg}
           alt="Project icon for vibegen"/>
           
          
          
         
          

        </div>
      </div>
    </div>
  );
}
