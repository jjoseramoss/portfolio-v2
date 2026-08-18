import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-screen min-h-screen flex justify-center md:items-center text-sm"> 
      <div className="w-[95%] md:w-[35%] p-5 my-10 flex flex-col"> 
        <Link href="/" className="text-[#a1a1aa] pt-5 hover:text-black font-mono text-sm font-light">
          ← Back to home
        </Link> 
        <br />
        
        <h1 className="font-bold text-5xl pt-5 md:text-2xl">contact 💬</h1> 
        <div className="pt-6 font-light text-gray-800 tracking-wider mt-5 flex flex-col gap-y-5"> 
          <p>feel free to reach out to me through email at <a className="text-orange-600 hover:text-orange-700 transition hover:underline underline-offset-6" href="mailto:josemramos.tech@gmail.com">josemramos.tech@gmail.com</a></p>
          <ul className="list-disc px-4 flex flex-col gap-y-5">
            <li><a href="https://www.instagram.com/jjose._.ramoss/" target="_blank" className="text-orange-600 hover:text-orange-700 transition hover:underline underline-offset-6">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/jose-ramos-tech" target="_blank" className="text-orange-600 hover:text-orange-700 transition hover:underline underline-offset-6">LinkedIn</a></li>
          </ul>
        </div>


      </div>
    </div>
  );
}