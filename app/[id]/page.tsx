import {
  MapIcon,
  MapPinIcon,
  NewspaperIcon,
  PercentBadgeIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <aside className="-ml-[8px] mb-16 tracking-tight">
          <div className="lg:sticky lg:top-20">
            <nav
              className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
              id="nav"
            >
              <div className="flex flex-row space-x-0 pr-10">
                <a
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  href="/"
                >
                  home
                </a>
                <a
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  href="/blog"
                >
                  startups
                </a>
                <a
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  href="https://vercel.com/templates/next.js/portfolio-starter-kit"
                >
                  deploy
                </a>
              </div>
            </nav>
          </div>
        </aside>
        <section>
          <h1 className="mb-3 text-2xl font-semibold tracking-tighter">
            Luije
          </h1>
          <div className="flex mb-8 items-center align-middle">
            <MapPinIcon width={16} />
            <p className="ml-2">United States</p>
          </div>

          <p className="mb-4">
            Hi, I am Luije! I am a software engineer and I love building things
            for the web.
          </p>

          <div className="my-8">
            <h1 className="mb-3 text-xl font-semibold tracking-tighter">
              startups
            </h1>
            <div>
              <a className="flex flex-col space-y-1 mb-4" href="/blog/vim">
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    April 9, 2024
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Embracing Vim: The Unsung Hero of Code Editors
                  </p>
                </div>
              </a>
              <a
                className="flex flex-col space-y-1 mb-4"
                href="/blog/spaces-vs-tabs"
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    April 8, 2024
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Spaces vs. Tabs: The Indentation Debate Continues
                  </p>
                </div>
              </a>
              <a
                className="flex flex-col space-y-1 mb-4"
                href="/blog/static-typing"
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    April 7, 2024
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    The Power of Static Typing in Programming
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <footer className="mb-16">
          <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="/rss"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="ml-2 h-7">twitter</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://vercel.com/templates/next.js/portfolio-starter-kit"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="ml-2 h-7">github</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://vercel.com/templates/next.js/portfolio-starter-kit"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="ml-2 h-7">view source</p>
              </a>
            </li>
          </ul>
        </footer>
        <Link
          href={"/"}
          className="mt-8 text-neutral-600 dark:text-neutral-300 flex"
        >
          <NewspaperIcon width={16} className="mr-3" />
          claim your page
        </Link>
      </main>
    </div>
  );
}
