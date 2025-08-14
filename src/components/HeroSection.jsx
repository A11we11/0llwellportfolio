import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center  px-4 md:grid grid-cols-2"
    >
      <div className="font-oswald text-9xl w-2xl justify-end hidden md:block font-extrabold   ">
        FRONTEND DEVELOPER
      </div>
      <div className="container max-w-4xl mx-auto text-center z-10     ">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight  font-oswald ">
            <span className="opacity-0 animate-fade-in">Hi,I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Allwell
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              ogbonna
            </span>
          </h1>
          <p className="    text-lg md:text-xl  text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3  ">
            I’m a frontend-focused full-stack developer with a strong foundation
            in HTML, CSS, and JavaScript, experienced in building responsive and
            accessible user interfaces using modern frameworks like React and
            Next.js. I build interfaces that are both beautiful , accessible and
            functional.
          </p>
          <div>
            <a href="#project" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8  left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce  ">
        <span className="text-sm text-muted-foreground mb-2">scroll </span>
        <ArrowDown size={50} className=" text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
