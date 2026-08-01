"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contactCode = `const contact = {

  email: "bejeranojerwin771@gmail.com",

  location: "Zamboanga City, Philippines",

  availability: [
    "Open to Work",
    "Full-time",
    "Freelance"
  ],

  github: "github.com/fushigurolex",

  linkedin: "linkedin.com/in/jerwin-bejerano-6492b222a",

  instagram: "@alexander.synge"

};`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 uppercase tracking-[0.3em] text-sm">
            02. Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Build Something Together
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            I'm always open to discussing new opportunities,
            freelance work, collaborations, or full-time roles.
            If you have an idea you'd like to build, let's connect.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="mailto:bejeranojerwin771@gmail.com"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Email Me
            </Link>

            <Link
              href="https://github.com/fushigurolex"
              target="_blank"
              className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition"
            >
              GitHub
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-xl"
        >

          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>

            <span className="ml-3 text-sm text-gray-400">
              contact.ts
            </span>
          </div>

          <pre className="p-6 text-sm md:text-base text-gray-300 overflow-x-auto leading-8">
            {contactCode}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}