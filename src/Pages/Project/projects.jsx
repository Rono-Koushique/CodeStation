import React from "react";
import "./projects.scss";
import Data from "Assets/Data/projects";

import Navigation from "Components/Navigation/navigation";
import Header from "Components/Header/header";
import Footer from "Components/Footer/footer";

const Projects = () => {
    const platforms = Data.platforms;
    const categories = Data.categories;

    // platform handling
    const [currentPlatform, setCurrentPlatform] = React.useState(platforms[1]);
    const selectedPlatformStyle = { color: "#359756" };
    const platformElements = platforms.map((platform) => {
        return (
            <div
                className="platform-pill"
                key={platform}
                onClick={() => setCurrentPlatform(platform)}
                style={
                    currentPlatform === platform ? selectedPlatformStyle : {}
                }
            >
                {platform}
            </div>
        );
    });

    // category handling
    const [currentCategory, setCurrentCategory] = React.useState([]);
    function changeCategory(category) {
        const allCategories = [...currentCategory];
        const index = allCategories.indexOf(category);
        if (index > -1) {
            allCategories.splice(index, 1);
        } else {
            allCategories.push(category);
        }
        setCurrentCategory(allCategories);
    }
    const selectedCategoryStyle = {
        backgroundColor: "#359756",
        color: "#FFFFFF",
        border: "none",
    };
    const categoryElements = categories.map((category) => {
        return (
            <div
                className="category-pill"
                key={category}
                onClick={() => changeCategory(category)}
                style={
                    currentCategory.includes(category)
                        ? selectedCategoryStyle
                        : {}
                }
            >
                {category}
            </div>
        );
    });

    let allProjects = []

    if (currentCategory.length === 0) {
        Data.projects.forEach(project => {
            if (currentPlatform === project.platform) {
                allProjects.push(project)
            }
        })
    } else {
        Data.projects.forEach(project => {
            if (project.platform === currentPlatform && currentCategory.includes(project.type)) {
                allProjects.push(project)
            }
        })
    }

    // Data.projects.forEach(project => {
    //     if ((!currentCategory || project.type === currentCategory) && project.platform === currentPlatform) {
    //         allProjects.push(project)
    //     }
    // })

    const projectElements = allProjects.map(project => {
        return <div
            key={project.name}
            className="card"
        >
            <img src={require(`Assets/Images/projects/${project.image}`)} alt={project.name} />
        </div>
    })

    return (
        <div>
            <Navigation bg={true} />
            <Header title="Project Showcase" location="Home->Projects" />

            <section id="projects-page">
                <div className="content">
                    <div className="platforms">{platformElements}</div>
                    <div className="categories">{categoryElements}</div>
                    <div className="projects">{projectElements}</div>
                </div>
            </section>

            <Footer bg="#FFFFFF" />
        </div>
    );
};

export default Projects;
