import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter, YouTube } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import RecosCard from "@/components/home/RecosCard";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0 flex min-h-screen flex-col justify-center"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="flex flex-col md:flex-row">
          <motion.a
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            href="#"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center py-2 mx-auto mb-5 space-x-2 overflow-hidden transition-colors bg-blue-100 rounded-full max-w-fit px-7 hover:bg-blue-200"
          >
            <Twitter className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0]">
              Introducing RECOS
            </p>
          </motion.a>
          <motion.a
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            href="https://www.youtube.com/@ChalchitraTalks"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center py-2 mx-auto mb-5 space-x-2 overflow-hidden transition-colors bg-red-100 rounded-full max-w-fit px-7 hover:bg-red-200"
          >
            <YouTube className="h-5 w-5 text-[#FF0000]" />
            <p className="text-base font-semibold text-[#FF0000]">
              Chalchitra Talks
            </p>
          </motion.a>
        </div>
        <motion.h1
          className="bg-gradient-to-br from-black to-black bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>All your <span className="text-[#62369C]">Recos</span> in one place</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            A place to find all your favourite Chalchitra Talks recommendations!
          </Balancer>
        </motion.p>
        <motion.div
          className="flex items-center justify-center mx-auto mt-6 space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="flex items-center justify-center px-5 py-2 space-x-2 text-sm text-gray-600 transition-colors bg-white border-4 border-gray-300 rounded-full shadow-md max-w-fit hover:border-gray-600"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>Star on GitHub</p>
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {
          list.map(({ title, views, thumbnail, link, recos }) => (
            <RecosCard
              title={title}
              link={link}
              views={views}
              thumbnail={thumbnail}
              recos={recos}
            />
          ))
        }
      </motion.div>
    </Layout >
  );
}

/* {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))} */
// const features = [
//   {
//     title: "Beautiful, reusable components",
//     description:
//       "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
//     large: true,
//   },
//   {
//     title: "Performance first",
//     description:
//       "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
//     demo: <WebVitals />,
//   },
//   {
//     title: "One-click Deploy",
//     description:
//       "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
//     demo: (
//       <a href={DEPLOY_URL}>
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src="https://vercel.com/button"
//           alt="Deploy with Vercel"
//           width={120}
//         />
//       </a>
//     )
//   },
//   {
//     title: "Built-in Auth + Database",
//     description:
//       "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
//     demo: (
//       <div className="flex items-center justify-center space-x-20">
//         <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
//         <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
//       </div>
//     ),
//   },
//   {
//     title: "Hooks, utilities, and more",
//     description:
//       "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
//     demo: (
//       <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
//         <span className="font-mono font-semibold">useIntersectionObserver</span>
//         <span className="font-mono font-semibold">useLocalStorage</span>
//         <span className="font-mono font-semibold">useScroll</span>
//         <span className="font-mono font-semibold">nFormatter</span>
//         <span className="font-mono font-semibold">capitalize</span>
//         <span className="font-mono font-semibold">truncate</span>
//       </div>
//     ),
//   },
// ];

const list = [
  {
    title: "Top 5 Hindi Books I Read In 2021",
    views: "3.6K views",
    thumbnail: "https://i.ytimg.com/vi/KKE6cCtnHIc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBot9r1lLIkVAWHbo_kDC0ZW6n0HA",
    link: "https://www.youtube.com/watch?v=KKE6cCtnHIc",
    recos: ["Books"]
  },
  {
    title: "45 Book Recommendations by @SahilShahcomedy (Part 1)",
    views: "27K views",
    thumbnail: "https://i.ytimg.com/vi/XNbtuhxNj6Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6BEk2OYA7qeMdjY_CsRdMfthXtw",
    link: "https://www.youtube.com/watch?v=XNbtuhxNj6Q",
    recos: ["Books"]
  },
  {
    title: "An Amazing Film to Watch on Netflix Right Now! | The Lost Daughter | Ep 126",
    views: "15K views",
    thumbnail: "https://i.ytimg.com/vi/TVofYtrn-yM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvsIzHp5JJAbCxtGi5QorqS4JtTA",
    link: "https://www.youtube.com/watch?v=TVofYtrn-yM",
    recos: ["Movies"]

  },
  {
    title: "@rohanjoshi8016's Video Game Recommendations",
    views: "3.3K views",
    thumbnail: "https://i.ytimg.com/vi/r3yrRSmHyws/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1uk8TT61qlMWhVINrNu0F0mTY8w",
    link: "https://www.youtube.com/watch?v=r3yrRSmHyws",
    recos: ["Video Game"]
  },
  {
    title: "That One Dialogue of Arrival... | Thoughts & Reccos by Vaibhav | Ep 3",
    views: "2.9K views",
    thumbnail: "https://i.ytimg.com/vi/KuzpoJCGrOY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_TtLq7RvO_Qcd5CRZcXNauAqEUA",
    link: "https://www.youtube.com/watch?v=KuzpoJCGrOY",
    recos: ["Movies"]
  }
]