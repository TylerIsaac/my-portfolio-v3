import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section
            className="bg-gray-100 flex flex-col items-center justify-center px-4 py-30"
            id="contact"
        >
            <div className="text-center max-w-xl w-full">
                <img
                    src="https://i.ibb.co/wNV4ZPpL/tyler-dev-logo-update.png"
                    alt="Tyler Dev Logo"
                    className="mx-auto mb-6 w-12 h-12"
                />
                <h2 className="text-4xl font-bold mb-10 text-gray-800">Get in Touch</h2>


                <div className="flex flex-wrap justify-center gap-12">
                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <a
                            href="mailto:tiisaac@comcast.net"
                            className="text-xs w-14 h-14 flex items-center justify-center border border-green-600 bg-gray-100 text-green-600 rounded-full hover:bg-green-600 hover:text-gray-100 transition-all duration-300 ease-in-out"            >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                        <span className="mt-2 text-sm font-medium text-gray-700">Email</span>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center">
                        <a
                            href="https://linkedin.com/in/your-link"
                            target="_blank"
                            className="w-14 h-14 flex items-center justify-center border border-green-600 bg-gray-100 text-green-600 rounded-full hover:bg-green-600 hover:text-gray-100 transition-all duration-300 ease-in-out">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>

                        <span className="mt-2 text-sm font-medium text-gray-700">LinkedIn</span>
                    </div>

                    {/* GitHub Personal */}
                    <div className="flex flex-col items-center">
                        <a
                            href="https://github.com/your-personal"
                            target="_blank"
                            className="text-xs w-14 h-14 flex items-center justify-center border border-green-600 bg-gray-100 text-green-600 rounded-full hover:bg-green-600 hover:text-gray-100 transition-all duration-300 ease-in-out"            >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <span className="mt-2 text-sm font-medium text-gray-700">Personal</span>
                    </div>

                    {/* GitHub Professional */}
                    <div className="flex flex-col items-center">
                        <a
                            href="https://github.com/your-professional"
                            target="_blank"
                            className="text-xs w-14 h-14 flex items-center justify-center border border-green-600 bg-gray-100 text-green-600 rounded-full hover:bg-green-600 hover:text-gray-100 transition-all duration-300 ease-in-out"            >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <span className="mt-2 text-sm font-medium text-gray-700">Professional</span>
                    </div>
                </div>

                <p className="mt-10 text-gray-500 text-sm">
                Site handcrafted and built by me © {new Date().getFullYear()} Tyler Isaac
                </p>

            </div>
        </section>
    );
};

export default Contact;
