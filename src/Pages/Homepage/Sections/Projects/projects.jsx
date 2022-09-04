import React from "react";
import "./projects.scss";
import Data from "Assets/Data/projects";

const Projects = () => {
    const [currentCategory, setCurrentCategory] = React.useState(
        Data.categories[0]
    );

    const categoryElements = Data.categories.map((cate) => {
        return (
            <div
                key={cate}
                onClick={() => setCurrentCategory(cate)}
                className={
                    currentCategory === cate ? "category selected" : "category "
                }
            >
                { cate }
            </div>
        );
    });

    let projects = []

    Data.projects.forEach(project => {
        if (project.type === currentCategory && projects.length < 2) {
            projects.push(project)
        }
    })

    const projectElements = projects.map(project => {
        return <div
            key={project.name}
            className="project"
        >
            <img src={require(`Assets/Images/projects/${project.image}`)} alt={project.name} />
        </div>
    })
 
    return <section id="projects">
        <div className="content">
            <h1>Our Projects</h1>
            <div className="header-divider"></div>
            <h2>Browse our project galleries. You can apply filter.</h2>
            <div className="categories">
                {categoryElements}
            </div>
            <div className="all-projects">
                { projectElements }
            </div>
        </div>
    </section>;
};

export default Projects;
