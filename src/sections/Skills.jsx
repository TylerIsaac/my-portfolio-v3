import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faToolbox } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div id="skills" lassName="h-[250px] -mt-[250px]">
            <section className=" scroll-mt-32 relative z-20 overflow-hidden bg-white py-24 sm:pt-4 sm:pb-32 px-4">
                {/* Background image starts lower in the section */}
                <div
                    className="absolute inset-x-0 top-[250px] h-[calc(100%-200px)] bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/Hf5CSJTD/green-background-image.png')",
                    }}
                />

                {/* Foreground content */}
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
                            My <span className="text-green-600">Skills</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Frontend */}
                        <div
                            className="bg-white/80 backdrop-blur-md border border-white/20 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-2xl p-8 text-center"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-600 text-white rounded-full">
                                <FontAwesomeIcon icon={faLaptopCode} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-right">
                                Frontend
                            </h3>
                            <p className="text-sm text-gray-600 mb-6" data-aos="fade-right">
                                I enjoy building clean, responsive user interfaces that are easy to use and visually engaging.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700 text-center">
                                <li data-aos="fade-right">React</li>
                                <li data-aos="fade-right">Next.js</li>
                                <li data-aos="fade-right">Vite</li>
                                <li data-aos="fade-right">JavaScript</li>
                                <li data-aos="fade-right">HTML & CSS</li>
                                <li data-aos="fade-right">Tailwind CSS</li>
                                <li data-aos="fade-right">Material UI</li>
                                <li data-aos="fade-right">Bootstrap</li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div
                            className="bg-white/80 backdrop-blur-md border border-white/20 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-2xl p-8 text-center"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-600 text-white rounded-full">
                                <FontAwesomeIcon icon={faServer} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-right">
                                Backend
                            </h3>
                            <p className="text-sm text-gray-600 mb-6" data-aos="fade-right">
                                I appreciate the logic and structure behind how things work, especially when it comes to APIs and data flow.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700 text-center">
                                <li data-aos="fade-right">Node.js</li>
                                <li data-aos="fade-right">Express</li>
                                <li data-aos="fade-right">PostgreSQL</li>
                                <li data-aos="fade-right">Mocha</li>
                                <li data-aos="fade-right">Chai</li>
                            </ul>
                        </div>

                        {/* Tools */}
                        <div
                            className="bg-white/80 backdrop-blur-md border border-white/20 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.2)]
     rounded-2xl p-8 text-center"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-600 text-white rounded-full">
                                <FontAwesomeIcon icon={faToolbox} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-right">
                                Tools & Platforms
                            </h3>
                            <p className="text-sm text-gray-600 mb-6" data-aos="fade-right">
                                The right tools make development faster, cleaner, and more efficient — I love using ones that help me move quickly.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700 text-center">
                                <li data-aos="fade-right">Git & GitHub</li>
                                <li data-aos="fade-right">REST APIs</li>
                                <li data-aos="fade-right">Vercel & Heroku</li>
                                <li data-aos="fade-right">VS Code</li>
                                <li data-aos="fade-right">Figma</li>
                                <li data-aos="fade-right">Adobe Photoshop</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-24 px-8">
                        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center text-[#dddddd]">
                            {[
                                { name: "React", icon: "react", delay: 0 },
                                { name: "JavaScript", icon: "javascript", delay: 100 },
                                { name: "Next.js", icon: "nextdotjs", delay: 200 },
                                { name: "HTML", icon: "html5", delay: 300 },
                                { name: "Tailwind CSS", icon: "tailwindcss", delay: 400 }
                            ].map(({ name, icon, delay }) => (
                                <div
                                    key={name}
                                    className="group flex flex-col items-center gap-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-110 hover:text-white"
                                    data-aos="fade-up"
                                    data-aos-delay={delay}
                                >
                                    {/* Gray icon (default) */}
                                    <img
                                        src={`https://cdn.simpleicons.org/${icon}/dddddd`}
                                        alt={name}
                                        className="w-12 h-12 transition-all duration-500 ease-in-out group-hover:hidden"
                                    />
                                    {/* White icon on hover */}
                                    <img
                                        src={`https://cdn.simpleicons.org/${icon}/ffffff`}
                                        alt={name}
                                        className="w-12 h-12 hidden group-hover:block transition-all duration-500 ease-in-out"
                                    />
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Skills;
