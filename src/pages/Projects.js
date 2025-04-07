import Project from "../components/project/Project";
import {projects} from "./../helpers/ProjectsList";

const Projects = () => {
    return (
        <>
            <section className="works">
                <h1 className="works__title">Мои работы</h1>
                <div className="works__wrapper">
                    {projects.map((project, index) => {
                        return <Project key={index} title={project.title} img={project.img} text1={project.text1} text2={project.text2} text3={project.text3} text4={project.text4} link={project.link} />;
                    })}
                </div>
            </section>
        </>
    );
}
 
export default Projects;