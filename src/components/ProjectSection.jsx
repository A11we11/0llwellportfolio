import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import quikbite from "../assets/quikbite.png";
import clone from "../assets/youtubeclone.png";

const projects = [
  {
    id: 1,
    title: "Food ordering App",
    description:
      "A full-stack MERN food delivery platform where users can browse menus, add items to their cart, and securely place orders. Built with React on the frontend and Express + MongoDB on the backend, it features real-time cart updates, authentication, and a smooth checkout experience. The project also includes unit and integration testing with Vitest, Jest, Supertest, and React Testing Library to ensure reliability.",
    image: quikbite,
    tags: [
      "react",
      "CSS",
      "express",
      "typescript",
      "mongodb",
      "vitest",
      "jest",
      "supertest",
      "react testing library",
    ],
    demoUrl: "https://food-ordering-app-cr6b.vercel.app",
    githubUrl: "https://github.com/A11we11/Food-ordering-app",
  },

  /*   {
    id: 2,
    title: "Youtube clone",
    description:
      "A modern video streaming platform inspired by YouTube, developed with React and TailwindCSS. It allows users to explore videos, search by category, and watch content in a responsive, user-friendly interface. The app emphasizes performance and accessibility, with a clean UI and component testing powered by Vitest and React Testing Library.",
    image: clone,
    tags: [
      "react",
      "tailwindCSS",
      "typescript",
      "react testing Library",
      "vitest",
    ],
    demoUrl: "https://youtube-clone-ivhz.vercel.app",
    githubUrl: "https://github.com/A11we11/youtube-clone",
  }, */
];

const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center  text-muted-foreground mb-12 max-w-2xl mx-auto  ">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover    "
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover  transition-transform duration-500  group-hover:scale-110    "
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-amber-400 text-secondary-foreground   ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
