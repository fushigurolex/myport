"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        min-h-screen
        px-6
        py-24
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
        "
      >
        <div className="mb-16">
          <p
            className="
              text-blue-500
              text-sm
              uppercase
              tracking-widest
            "
          >
            03. Projects
          </p>
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-3
            "
          >
            Featured Project
          </h2>
        </div>
        <div
          className="
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >
          <motion.div
            initial={{
              opacity:0,
              x:-50
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:.7
            }}
            viewport={{
              once:true
            }}
            className="
              relative
              rounded-xl
              overflow-hidden
              border
              border-gray-800
              bg-[#111]
            "
          >
            <Image
              src="/project-portfolio.png"
              alt="Developer Portfolio"
              width={700}
              height={500}
              className="
                w-full
                h-[400px]
                object-contain
                bg-black
                hover:scale-105
                transition
                duration-500
              "
            />
          </motion.div>
          <motion.div
            initial={{
              opacity:0,
              x:50
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:.7
            }}
            viewport={{
              once:true
            }}
          >
            <h3
              className="
                text-3xl
                font-bold
              "
            >
              Developer Portfolio
            </h3>
            <p
              className="
                text-gray-400
                mt-5
                leading-relaxed
              "
            >
              A modern responsive portfolio website built
              to showcase my skills, experience, and
              developer journey.
              <br />
              <br />
              The project focuses on clean UI,
              smooth animations, responsive layouts,
              and a developer-inspired design using
              Next.js and modern frontend technologies.
            </p>
            <div
              className="
                flex
                flex-wrap
                gap-3
                mt-6
              "
            >
              {technologies.map((tech)=>(
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-gray-900
                    border
                    border-gray-700
                    text-sm
                    text-gray-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div
              className="
                flex
                gap-4
                mt-8
              "
            >
              <Link
                href="https://myport-khaki-tau.vercel.app/"
                target="_blank"
                className="
                  px-6
                  py-3
                  bg-blue-600
                  rounded-lg
                  hover:bg-blue-700
                  transition
                "
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/fushigurolex/myport"
                target="_blank"
                className="
                  px-6
                  py-3
                  border
                  border-gray-700
                  rounded-lg
                  hover:bg-gray-900
                  transition
                "
              >
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}