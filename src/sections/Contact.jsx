import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section
  className="bg-gray-100 flex flex-col items-center justify-center px-4 py-30"
  id="contact"
>
  <div className="text-center max-w-xl w-full">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="mx-auto mb-6 block transition duration-300 ease-in-out hover:brightness-75"
    >
      <img
        src="https://i.ibb.co/wNV4ZPpL/tyler-dev-logo-update.png"
        alt="Tyler Dev Logo"
        className="w-12 h-12 cursor-pointer"
      />
    </button>
    <h2 className="text-4xl font-bold mb-10 text-gray-800">
      Get in <span className="text-green-600">Touch</span>
    </h2>

    <div className="flex flex-wrap justify-center gap-8">
      {[
        { label: "Email", icon: faEnvelope, href: "mailto:tiisaac@comcast.net", delay: 0 },
        { label: "LinkedIn", icon: faLinkedin, href: "https://www.linkedin.com/in/tyler-isaac", delay: 100 },
        { label: "Personal", icon: faGithub, href: "https://github.com/TylerIsaac", delay: 200 },
        { label: "Professional", icon: faGithub, href: "https://github.com/tyler-isaac/", delay: 300 },
      ].map(({ label, icon, href, delay }) => (
        <div
          key={label}
          className="flex flex-col items-center w-24 text-center"
          data-aos="fade-up"
          data-aos-delay={delay}
        >
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center border border-green-600 bg-gray-100 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={icon} size="xl" />
          </a>
          <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
        </div>
      ))}
    </div>

    <p className="mt-10 text-gray-500 text-sm">
      Site handcrafted and built by me © {new Date().getFullYear()} Tyler Isaac
    </p>
  </div>
</section>

  );
};

export default Contact;
