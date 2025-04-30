import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faToolbox } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-4"
      id="skills"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold mt-10 mb-10 text-gray-800">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md py-10 px-6 text-center">
            <div className="w-16 h-16 mx-auto mt-10 mb-10 flex items-center justify-center bg-green-600 text-white rounded-full">
              <FontAwesomeIcon icon={faLaptopCode} className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-10">Frontend</h3>
            <p className="text-gray-600 text-base mt-10 mb-10">
              I enjoy building clean, responsive user interfaces that are easy to use and visually engaging.
            </p>
            <hr className="w-full border-black mt-10 mb-10" />
            <ul className="space-y-3 text-base text-gray-800 mt-10 mb-10">
              <li>React</li>
              <li>Next.js</li>
              <li>Vite</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md py-10 px-6 text-center">
            <div className="w-16 h-16 mx-auto mt-10 mb-10 flex items-center justify-center bg-green-600 text-white rounded-full">
              <FontAwesomeIcon icon={faServer} className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-10">Backend</h3>
            <p className="text-gray-600 text-base mt-10 mb-10">
              I appreciate the logic and structure behind how things work, especially when it comes to APIs and data flow.
            </p>
            <hr className="w-full border-black mt-10 mb-10" />
            <ul className="space-y-3 text-base text-gray-800 mt-10 mb-10">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Mocha</li>
              <li>Chai</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md py-10 px-6 text-center">
            <div className="w-16 h-16 mx-auto mt-10 mb-10 flex items-center justify-center bg-green-600 text-white rounded-full">
              <FontAwesomeIcon icon={faToolbox} className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-10">Tools & Platforms</h3>
            <p className="text-gray-600 text-base mt-10 mb-10">
              The right tools make development faster, cleaner, and more efficient — I love using ones that help me move quickly.
            </p>
            <hr className="w-full border-black mt-10 mb-10" />
            <ul className="space-y-3 text-base text-gray-800 mt-10 mb-10">
              <li>Git & GitHub</li>
              <li>REST APIs</li>
              <li>Vercel & Heroku</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
