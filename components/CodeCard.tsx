"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const code = `const developer = {

  name: "Jerwin Bejerano",

  role: "Full Stack Developer",

  location: "Philippines",

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js"
  ],

  passion:
    "Building modern web experiences"

};`;


export default function CodeCard() {

  const [displayedCode, setDisplayedCode] = useState("");
  const [finished, setFinished] = useState(false);


  useEffect(() => {
    let index = 0;

    const typingSpeed =
      (currentIndex: number) => {
        return currentIndex < 25 ? 80 : 25;
      };

    const typing = setInterval(() => {

      setDisplayedCode(
        code.slice(0, index)
      );

      index++;

      if(index > code.length){
        clearInterval(typing);
        setFinished(true);
      }
    }, typingSpeed(index));
    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      initial={{
        opacity:0,
        x:50
      }}
      animate={{
        opacity:1,
        x:0
      }}
      transition={{
        duration:.8
      }}
      className="
        bg-[#111]
        border
        border-gray-800
        rounded-xl
        overflow-hidden
        shadow-xl
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          px-4
          py-3
          border-b
          border-gray-800
        "
      >
        <span className="w-3 h-3 bg-red-500 rounded-full"/>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"/>
        <span className="w-3 h-3 bg-green-500 rounded-full"/>
        <span className="ml-3 text-sm text-gray-400">
          developer.ts
        </span>
      </div>
      <pre
        className="
          p-6
          text-sm
          md:text-base
          text-gray-300
          overflow-x-auto
          min-h-[350px]
        "
      >
        {displayedCode}
        {finished && (
          <span className="animate-pulse">
            |
          </span>
        )}
      </pre>
    </motion.div>
  );

}