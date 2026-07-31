import CodeCard from "./CodeCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        px-6
        flex
        items-center
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        <div>
          <p
            className="
              text-blue-500
              text-lg
              mb-4
            "
          >
            Hello, I'm
          </p>
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            Jerwin Bejerano
          </h1>
          <h2
            className="
              text-3xl
              md:text-5xl
              text-gray-400
              mt-4
              leading-tight
            "
          >
            Full Stack Developer
          </h2>
          <p
            className="
              text-gray-400
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
            "
          >
            I build modern and scalable web applications
            using Next.js, React, TypeScript, and backend
            technologies. I enjoy turning ideas into
            functional digital experiences.
          </p>
          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-8
            "
          >
            <a
              href="#projects"
              className="
                bg-blue-600
                px-6
                py-3
                rounded-lg
                hover:bg-blue-700
                transition
                duration-300
              "
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="
                border
                border-gray-700
                px-6
                py-3
                rounded-lg
                hover:bg-gray-900
                transition
                duration-300
              "
            >
              Contact Me
            </a>
          </div>
        </div>
        <div
          className="
            w-full
          "
        >
          <CodeCard />
        </div>
      </div>
    </section>
  );
}