const Projects = () => {
    const projects = [
      {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'https://example.com/project-1'
      },
      {
        title: 'Project 2',
        description: 'Vivamus ullamcorper est vel libero pellentesque, sit amet aliquam risus ultrices.',
        link: 'https://example.com/project-2'
      },
      {
        title: 'Project 3',
        description: 'Donec bibendum magna a libero fringilla, sit amet suscipit turpis aliquam.',
        link: 'https://example.com/project-3'
      }
    ];
  
    return (
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(project => (
            <a key={project.link} href={project.link} className="border rounded-lg p-4 transition-colors hover:bg-gray-100">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;