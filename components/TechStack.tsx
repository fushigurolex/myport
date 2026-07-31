const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Vercel",
];

export default function TechStack() {
  return (
    <section
      className="
        mt-24
      "
    >
      <h3
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Tech Stack
      </h3>
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-4
        "
      >
        {technologies.map((tech) => (
          <div
            key={tech}
            className="
              bg-[#111]
              border
              border-gray-800
              rounded-xl
              p-5
              text-center
              text-gray-300
              hover:border-blue-500
              hover:text-white
              transition
            "
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}