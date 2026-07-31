import ProfileCard from "./ProfileCard";
import ExperienceCard from "./ExperienceCard";
import TechStack from "./TechStack";


export default function About() {
  return (
    <section
      id="about"
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

        {/* Section Title */}

        <div className="mb-16">

          <p
            className="
              text-blue-500
              text-sm
              uppercase
              tracking-widest
            "
          >
            01. About
          </p>


          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-3
            "
          >
            About Me
          </h2>

        </div>



        {/* Main About Area */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-12
            items-center
          "
        >


          {/* Photo */}

          <ProfileCard />



          {/* Description */}

          <div>


            <h3
              className="
                text-3xl
                font-bold
                mb-5
              "
            >
              Hi, I'm Shin Amir
            </h3>


            <h4
              className="
                text-xl
                text-blue-500
                mb-6
              "
            >
              Full Stack Developer with Data Entry Experience
            </h4>


            <p
              className="
                text-gray-400
                leading-relaxed
                text-lg
              "
            >
              I'm a detail-oriented developer who enjoys
              building websites that are functional,
              accessible, and useful for the community.


              <br />
              <br />


              My journey started as a programmer in a
              private company, where I developed software
              solutions and improved my technical skills.
              Later, I transitioned into data entry,
              strengthening my attention to detail and
              understanding of information management.
            </p>


          </div>


        </div>



        {/* Experience */}

        <ExperienceCard />



        {/* Tech Stack */}

        <TechStack />


      </div>


    </section>
  );
}