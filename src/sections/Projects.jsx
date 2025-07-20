const Projects = () => {
    return (
        <section
            className="flex flex-col items-center justify-center px-4 py-30" id="projects">
            <div className="max-w-6xl w-full text-center">
                <h2 className="text-4xl font-bold mb-10 text-gray-800" data-aos="fade-up">My Recent<span className="text-green-600"> Work</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Project Card */}
                    <div className="bg-white rounded-2xl shadow-md p-6 text-left flex flex-col justify-between" data-aos="fade-up">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 mb-2">FocusFlow</h3>
                            <p className="text-gray-700 mb-3">
                                FocusFlow is a personal productivity dashboard that includes a real-time clock, greeting, weather, quote, to-do list, and Pomodoro timer, all built to support daily focus and task management.
                            </p>
                            <p className="text-sm text-gray-500">Tech: React, TypeScript, Tailwind CSS, Font Awesome, OpenWeatherMap API, LocalStorage</p>
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <div className="mt-6 flex space-x-4">
                                <a
                                    href="https://focusflow-chrome-extension.vercel.app/"
                                    target="_blank"
                                    className="border border-green-600 text-green-600 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition-colors duration-200"
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/TylerIsaac/focusflow-chrome-extension"
                                    target="_blank"
                                    className="border border-black text-black bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-left flex flex-col justify-between" data-aos="fade-up">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 mb-2">Cochran Careers</h3>
                            <p className="text-gray-700 mb-3">
                                Developed a careers website for #1 Cochran to enhance recruitment.
                            </p>
                            <p className="text-sm text-gray-500">Tech: HTML, CSS, JavaScript</p>
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <div className="mt-6 flex space-x-4">
                                <a
                                    href="https://cochrancareers.com/"
                                    target="_blank"
                                    className="border border-green-600 text-green-600 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition-colors duration-200"
                                >
                                    Site
                                </a>
                                <a
                                    href="https://github.com/tyler-isaac/dev_cochran_careers"
                                    target="_blank"
                                    className="border border-black text-black bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-left flex flex-col justify-between" data-aos="fade-up">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 mb-2">Parts By Cochran</h3>
                            <p className="text-gray-700 mb-3">
                                Designed and built a parts website to highlight service offerings and delivery updates.
                            </p>
                            <p className="text-sm text-gray-500">Tech: HTML, CSS, JavaScript, Bootstrap, Font Awesome</p>
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <div className="mt-6 flex space-x-4">
                                <a
                                    href="https://partsbycochran.com/"
                                    target="_blank"
                                    className="border border-green-600 text-green-600 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition-colors duration-200"
                                >
                                    Site
                                </a>
                                <a
                                    href="https://github.com/tyler-isaac/parts-by-cochran"
                                    target="_blank"
                                    className="border border-black text-black bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-left flex flex-col justify-between" data-aos="fade-up">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 mb-2">HooBank</h3>
                            <p className="text-gray-700 mb-3">
                                Modern banking UI with reusable components and clean UX principles.
                            </p>
                            <p className="text-sm text-gray-500">Tech: React, Vite, Tailwind CSS</p>
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <a
                                href="https://hoo-bank-five-self.vercel.app/"
                                target="_blank"
                                className="border border-green-600 text-green-600 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition-colors duration-200"
                            >
                                Demo
                            </a>
                            <a
                                href="https://github.com/TylerIsaac/HooBank"
                                target="_blank"
                                className="border border-black text-black bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
                            >
                                GitHub
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
