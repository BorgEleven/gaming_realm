import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const links = [
  {
    href: "https://discord.com",
    icon: <FaDiscord />,
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    href: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    href: "https://twitch.com",
    icon: <FaTwitch />,
  },
  {
    href: "https://github.com",
    icon: <FaGithub />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div
        className="mx-10 flex flex-col items-center justify-between gap-4
     md:flex-row"
      >
        <p className="text-center text-sm md:text-left">
          &copy; Nova 2024. All Rights Reserved.
        </p>
        <div className="flex items-center justify-center gap-4 md:-ml-32 md:justify-start">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out
              hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};
export default Footer;
