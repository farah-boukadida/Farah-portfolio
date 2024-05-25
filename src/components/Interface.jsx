import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;

  // Function to open PDF file in a new tab
  const openPdf = () => {
    // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file
    window.open('projects/CV.pdf', '_blank');
  };

  return (
    <Section>
      <div className="max-w-4xl mx-auto ml-[-20px]">
      <img
  src="projects/Capture2.jpg" // Replace with the actual path to your image
  alt="Farah Boukadida"
  className="mx-auto mb-9 rounded-full w-50 h-48 object-cover" // Increased width and height
/>

     
        <h1 className="text-4xl font-bold leading-snug text-gray-900 mb-8">
          <span className="font-semibold text-gray-900">Hello, I'm</span>{" "}
          <span className="text-indigo-700 arial underline">Farah Boukadida</span>
        </h1>
        <motion.p
  className="text-lg text-gray-700 mb-8"
  style={{ fontFamily: 'Arial, sans-serif' }} // Change font to Arial
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.5, type: 'spring', stiffness: 150 }} // Change animation type to spring
>
  As a web development enthusiast with a passion <br/>for digital media, I blend
  creative thinking with technical <br/>skills to craft innovative web
  solutions.
</motion.p>
<motion.button
  onClick={openPdf} // Call the openPdf function when button is clicked
  className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold text-lg mt-8 transition-colors"
  style={{ fontFamily: 'Georgia, serif' }} // Change font to Georgia
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 2, type: 'tween', ease: 'anticipate' }} // Change animation type to tween with an anticipate ease
>
  Explore My Resume
</motion.button>

      </div>
    </Section>
  );
};


const skills = [
  {
    title: "html,css,js",
    level: 90,
  },
  {
    title: "Angular",
    level: 80,
  },
  {
    title: "PHP",
    level: 50,
  },
  {
    title: "Java",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];

const languages = [
  {
    title: "Arabic",
    level: 100,
  },
  {
    title: "English",
    level: 90,
  },
  {
    title: "French",
    level: 90,
  },
];

const SkillsSection = () => {
  const getEmojiForLevel = (level) => {
    if (level >= 90) return "🔥";
    if (level >= 70) return "👍";
    if (level >= 50) return "😊";
    if (level >= 30) return "😐";
    return "🤔";
  };

  return (
    <Section>
      <motion.div whileInView={"visible"} className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-4xl arial text-gray-900 mb-4">Skills</h2>
          <div className="space-y-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-16 flex-shrink-0">
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ scaleX: 0, originX: 0 }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
                <motion.h3
                  className="text-lg font-semibold text-gray-900 ml-4"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title} - {skill.level}% {getEmojiForLevel(skill.level)}
                </motion.h3>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-4xl arial text-gray-900 mb-4">Languages</h2>
          <div className="space-y-2">
            {languages.map((lng, index) => (
              <div key={index} className="flex items-center">
                <div className="w-16 flex-shrink-0">
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${lng.level}%` }}
                      initial={{ scaleX: 0, originX: 0 }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
                <motion.h3
                  className="text-lg font-semibold text-gray-900 ml-4"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title} - {lng.level}% {getEmojiForLevel(lng.level)}
                </motion.h3>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
  <div className="flex flex-col w-full h-full gap-60 items-center">
  <h2 className="text-3xl font-semibold text-center" style={{ fontFamily: 'Georgia' }}>
          "Step into my world of projects,
          where creativity meets innovation at every turn."
        </h2>
       
  </div>
</Section>

  );
};



const ContactSection = () => {
  return (
    <Section className="bg-gradient-to-r from-blue-400 to-purple-600 py-20 px-8 flex justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-4xl font-bold text-blue mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>Contact Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 px-4 py-3"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 px-4 py-3"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 px-4 py-3 h-32"
                placeholder="Type your message here"
              />
            </div>
            <div className="text-center">
              <button className="bg-purple-700 text-white py-3 px-8 rounded-md font-semibold text-lg hover:bg-purple-800 transition duration-300" style={{ fontFamily: 'Arial, sans-serif' }}>
                Send Message
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            <a href="projects/font.pdf" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Arial, sans-serif', color: '#8a63ff' }}>Learn more about me</a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;

