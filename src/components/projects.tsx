const Projects = () => {
    const projects = [
      {
        title: 'Poker Game Engine',
        description: "Developed a Python-based Poker Game Engine for Texas Hold 'em, designed to calculate the odds of achieving various poker hands in a two-player scenario, with the capability to handle multiple hand combinations.",
        link: 'https://github.com/jjxrry/poker_engine'
      },
      {
        title: 'Twitter/X Clone',
        description: 'Employed React, Next.js, and Tailwind to build dynamic, component-based user interfaces that allowed for profileviewing, single post displays, and real-time updates.',
        link: 'https://twit-clone-2023.vercel.app/'
      },
      {
        title: 'Contact Web App',
        description: 'Full Stack Program built with React, Express, JavaScript, and MongoDB to create a responsive contact list with REST API posting/editing and sorting functionality.',
        link: 'https://github.com/jjxrry/fso-contact-app'
      },
      {
        title: 'Country Finder Web App',
        description: 'Full Stack Program that displays query-based information and returns details such as population, cultural facts, and current weather from public API.',
        link: 'https://github.com/jjxrry/country-app'
      },
      {
        title: 'Calculator!',
        description: 'A web app calculator built with logic in JavaScript, GSAP, and HTML/CSS for creative styling and responsive design.',
        link: 'https://jjxrry.github.io/calculator_app/'
      }
    ];
  
    return (
      <div className="container mx-auto my-12 pb-20">
        <h2 className="text-3xl font-bold text-white mb-4 text-center mb-7 underline underline-offset-8" id="projects">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(project => (
            <a key={project.link} href={project.link} className="border rounded-lg p-4 transition-colors text-white hover:bg-gray-50 hover:text-black">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-400 hover:text-black">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;