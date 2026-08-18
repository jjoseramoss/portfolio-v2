"use client"; // This directive must be at the top
import Image, { StaticImageData } from "next/image";
interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  tools: string[];
  icon: StaticImageData;
  alt: string;
}

export default function ProjectCard({
  name,
  description,
  link,
  tools,
  icon, alt
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Image width={25} height={25} src={icon} alt={alt}></Image>
        <h3 className="font-bold text-xl">{name}</h3>
         <a className="text-gray-500 font-light font-sans text-sm hover:text-orange-600 transition" href={link} target="_blank">app →</a>
      </div>

      <p>{description}</p>
      <ul className="flex gap-x-3 overflow-scroll scr scrollbar-thumb-orange-600 md:scrollbar-none pb-3">
        {tools.map((tool, idx) => (
            <div className="border rounded px-2 text-gray-400 border-gray-400 " key={idx}>{tool}</div>
        ))}
      </ul>
      <hr className="border text-gray-300 mt-5"/>
    </div>
  );
}
