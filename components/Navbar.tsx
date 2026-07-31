export default function Navbar() {
    return(
        <nav
        className="max-w-6xl mx-auto flex items-center justify-between py-8 px-6"
        >
            <div
            className="text-xl font-bold"
            >
                Shin<span className="text-blue-500">.</span>
            </div>

            <div
            className="hidden md:flex gap-8 text-gray-300"
            >
                <a href="#home" className="hover:text-white">
                    Home
                </a>

                <a href="#about" className="hover:text-white">
                    About
                </a>

                <a href="#projects" className="hover:text-white">
                    Projects
                </a>

                <a href="#contact" className="hover:text-white">
                    Contact
                </a>
            </div>

            <button
            className="md:hidden text-2x1 text-gray-300">☰</button>
        </nav>
    )
}