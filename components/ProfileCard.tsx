import Image from "next/image";

export default function ProfileCard() {
  return (
    <div
      className="
        flex
        justify-center
      "
    >

      <div
        className="
          relative
          w-full
          max-w-sm
          rounded-2xl
          overflow-hidden
          border
          border-gray-800
          bg-[#111]
          shadow-xl
          group
        "
      >

        {/* Image */}

        <Image
          src="/profile.jpg"
          alt="Shin Amir"
          width={500}
          height={500}
          loading="eager"  
          className="
            w-full
            h-[420px]
            object-cover
            group-hover:scale-105
            transition
            duration-500
          "
        />
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />
        <div
          className="
            absolute
            bottom-6
            left-6
          "
        >

          <p className="text-white text-xl font-bold">
            Shin Amir
          </p>

          <p className="text-gray-300">
            Full Stack Developer
          </p>

        </div>


      </div>


    </div>
  );
}