export default function ExperienceCard() {
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
        Developer Journey
      </h3>
      <div
        className="
          grid
          md:grid-cols-3
          gap-6
        "
      >
        <div
          className="
            bg-[#111]
            border
            border-gray-800
            rounded-xl
            p-6
          "
        >
          <h4
            className="
              text-4xl
              font-bold
              text-blue-500
            "
          >
            3+
          </h4>
          <p className="text-gray-400 mt-2">
            Years Coding Experience
          </p>

        </div>
        <div
          className="
            bg-[#111]
            border
            border-gray-800
            rounded-xl
            p-6
          "
        >
          <h4 className="text-xl font-bold">
            Software Development
          </h4>
          <p className="text-gray-400 mt-3">
            Started as a programmer in a private
            company, building applications and
            improving development skills.
          </p>
        </div>
        <div
          className="
            bg-[#111]
            border
            border-gray-800
            rounded-xl
            p-6
          "
        >
          <h4 className="text-xl font-bold">
            Data Entry Experience
          </h4>
          <p className="text-gray-400 mt-3">
            Developed strong attention to detail,
            accuracy, and data management skills.
          </p>
        </div>
      </div>
    </section>
  );
}