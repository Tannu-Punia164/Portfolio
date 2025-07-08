import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
const projects = [
  {
    id: 1,
    title: "Doctor Appointment Website",
    description: "A web-based appointment scheduling system with dedicated portals for admins, doctors, and patients to efficiently manage medical bookings and interactions.",
    image: project1,
    tags: ["MERN", "TailwindCSS", "Postman"],
    demoUrl: "https://prescripto-hm-system.vercel.app/",
    githubUrl: "https://github.com/Tannu-Punia164/CarePulse_HM_system",
  },
  {
    id: 2,
    title: "Expense Tracker WebApp",
    description:
      "A responsive web application for tracking and managing personal expenses with real-time summaries and categorized insights.",
    image: project3,
    tags: ["JavaScript", "TailwindCSS", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and experiences with a modern, responsive design.",
    image: project2,
    tags: ["TailwindCSS", "Node.js", "JavaScript"],
    demoUrl: "https://myportfolio-one-psi-68.vercel.app/",
    githubUrl: "https://github.com/Tannu-Punia164/Portfolio",
  },
  {
    id: 4,
    title: "Q&A WebApp",
    description:
      "AI-powered news Q&A assistant that analyzes multiple articles simultaneously and provides instant answers using advanced NLP and semantic search technology. ",
    image: project4,
    tags: ["Streamlit", "Python", "FAISS","Transformers"],
    demoUrl: "https://genai--q-agit-hsw9f3aqycvw9giuybp6wg.streamlit.app/",
    githubUrl: "https://github.com/Tannu-Punia164/GENAI--Q-A",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg   transition-shadow duration-300 hover:shadow-[0_0_25px_10px_rgba(255,255,255,0.4)] "
              
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Tannu-Punia164"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};