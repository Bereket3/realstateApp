import { title } from "@/components/primitives";
import { cn } from "@/lib/utils";

export default function Hero() {
  return <section
    className="flex flex-col items-center justify-center gap-4 bg-cover py-36 bg-[url('/assets/background-image-1.jpg')]"
  >
    <div
    >
      <div className="inline-block max-w-xl text-center justify-center pb-5">
        <span className={title({
          color: 'yellow'
        })}>Real estate search&nbsp;</span>
        <span className={title({ color: "violet" })}>simplified&nbsp;</span>

        <span className={
          cn("w-full my-2 text-3xl lg:text-xl text-gray-900 block max-w-full")
        }>
          Let's help you find your real estate in Ethiopia <br />
        </span>
      </div>

      <div className="flex items-center rounded-full overflow-hidden shadow-black shadow-2xl">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-[#EAEAF4] placeholder-gray-500 dark:bg-gray-200 dark:text-black px-4 py-2 focus:outline-none"
        />
        <button className="bg-accent-500 text-white px-4 py-2 hover:bg-accent-200 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-8      "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m-3.15 0A7 7 0 1117 10a7 7 0 01-3.15 6.65z"
            />
          </svg>
        </button>
      </div>
    </div >
  </ section >

}
