import Link from "next/link";
export default function Blog() {
  return (
    <div className="w-screen min-h-screen flex justify-center md:items-center text-sm">
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

        <h1 className="font-bold text-5xl pt-5 md:text-2xl">
          blog coming soon! 📮
        </h1>
      </div>
    </div>
  );
}
