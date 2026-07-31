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


        {/* LEFT SIDE */}
        <div>


          <p className="text-blue-500 text-lg mb-4">
            Hello, I'm
          </p>


          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
            "
          >
            Shin Amir
          </h1>


          <h2
            className="
              text-3xl
              md:text-5xl
              text-gray-400
              mt-4
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
            I create responsive and scalable web applications
            using modern technologies like Next.js,
            React, TypeScript, and Node.js.
          </p>


          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className="
                bg-blue-600
                px-6
                py-3
                rounded-lg
                hover:bg-blue-700
              "
            >
              Projects
            </a>


            <a
              href="#contact"
              className="
                border
                border-gray-700
                px-6
                py-3
                rounded-lg
              "
            >
              Contact
            </a>

          </div>


        </div>




        {/* RIGHT SIDE CODE CARD */}
        <div
          className="
            bg-[#111]
            border
            border-gray-800
            rounded-xl
            shadow-xl
            overflow-hidden
          "
        >


          {/* Fake editor header */}
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

            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>


            <span className="ml-3 text-sm text-gray-400">
              developer.ts
            </span>

          </div>




          {/* Code */}
          <pre
            className="
              p-6
              text-sm
              md:text-base
              text-gray-300
              overflow-x-auto
            "
          >
{`const developer = {

  name: "Shin Amir",

  role: "Full Stack Developer",

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js"
  ],

  passion:
    "Building great web experiences"

};`}
          </pre>


        </div>



      </div>


    </section>
  );
}