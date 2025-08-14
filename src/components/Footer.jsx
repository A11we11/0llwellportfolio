import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-5 px-4 bg-card relative border-t border-border  pt-8 flex flex-wrap justify-between items-center  ">
      <p>
        &copy; {new Date().getFullYear()} Ogbonna Allwell.co All rights
        reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10
      hover:bg-primary/20 text-primary transition-colors
      "
      >
        <ArrowUp size={30} />
      </a>
    </footer>
  );
};

export default Footer;
