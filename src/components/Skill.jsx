import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiGraphql,
  SiVitest,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTestinglibrary,
  SiShadcnui,
} from "react-icons/si";

// Individual components for each tech stack
const ReactComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <FaReact className="text-3xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className=" md:text-2xl text-center font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      React
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const NextJSComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700 to-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiNextdotjs className="text-3xl text-black group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl  font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Next.js
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-gray-700 to-black rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700 to-black opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const TailwindComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiTailwindcss className="text-3xl text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Tailwind CSS
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const TypeScriptComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiTypescript className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      TypeScript
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const ShadcnComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiShadcnui className="text-3xl text-gray-700 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Shadcn/ui
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const FramerMotionComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-pink-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiFramer className="text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Framer Motion
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const GraphQLComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-pink-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiGraphql className="text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      GraphQL
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const VitestComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiVitest className="text-3xl text-green-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Vitest
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const ReactTestingLibraryComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiTestinglibrary className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      React Testing Library
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const ReduxComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-purple-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiRedux className="text-3xl text-purple-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Redux
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const ReduxToolkitComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiRedux className="text-3xl text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Redux Toolkit
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const ExpressComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiExpress className="text-3xl text-gray-700 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      Express.js
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

const MongoDBComponent = ({ index }) => (
  <div
    className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="relative w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
      <SiMongodb className="text-3xl text-green-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-center md:text-2xl font-semibold text-gray-800 font-oswald group-hover:text-gray-900 transition-colors duration-300">
      MongoDB
    </h3>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full w-0 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
  </div>
);

// Main Skills component
const Skill = () => {
  return (
    <section id="skills" className="py-24 px-4 relative   ">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-oswald">
            Tech <span className="text-primary ">Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated collection of modern technologies I use to build
            exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ReactComponent index={0} />
          <NextJSComponent index={1} />
          <TailwindComponent index={2} />
          <TypeScriptComponent index={3} />
          <ShadcnComponent index={4} />
          <FramerMotionComponent index={5} />
          <GraphQLComponent index={6} />
          <VitestComponent index={7} />
          <ReactTestingLibraryComponent index={8} />
          <ReduxComponent index={9} />
          <ReduxToolkitComponent index={10} />
          <ExpressComponent index={11} />
          <MongoDBComponent index={12} />
        </div>

        {/* Stats section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">13+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">∞</div>
              <div className="text-sm text-gray-600">Always Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
