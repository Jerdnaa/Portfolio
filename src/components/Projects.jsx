import vetapp from "../assets/images/vetapp.png";
import todo from "../assets/images/todo.png";
import game from "../assets/images/batman.png";
import github from "../assets/images/github.png";

const Projects = ({ refProp, language }) => {
  if (language === "en") {
    return (
      <div ref={refProp} className="project-container">
        <h2 className="project-header">Projects</h2>
        <div className="project-card-container">
          <div className="project-card vetapp">
            <a href="https://vetappwecare.netlify.app/" target="_blank" className="project-name">
              <h4>VetApp</h4>
            </a>
            <img src={vetapp} alt="vetapp" />
            <p>A veterinary App for easier communication with your Vet.</p>
            <div className="span-container">
              <span>CSS</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
            <a href="https://github.com/Jerdnaa/veterinary-frontend" target="_blank">
              <img src={github} alt="github" className="project-github vetapp-img" />
            </a>
          </div>
          <div className="project-card task-manager">
            <a href="https://taskmanager.adaptable.app/" target="_blank" className="project-name">
              <h4>Task Manager</h4>
            </a>
            <img src={todo} alt="task manager" />
            <p>A todo app that lets you organize your schedule.</p>
            <div className="span-container">
              <span>EJS</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
            <a href="https://github.com/Jerdnaa/TaskManager" target="_blank">
              <img src={github} alt="github" className="project-github" />
            </a>
          </div>
          <div className="project-card batman">
            <a
              href="https://jerdnaa.github.io/batman-retrieval-mission/"
              target="_blank"
              className="project-name"
            >
              <h4>Batman Retrieval Mission</h4>
            </a>
            <img src={game} alt="batman game" />
            <p>A fun multi-staged game</p>
            <div className="span-container">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <a href="https://github.com/Jerdnaa/batman-retrieval-mission" target="_blank">
              <img src={github} alt="github" className="project-github" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  if (language === "de") {
    return (
      <div ref={refProp} className="project-container">
        <h2 className="project-header">Projekte</h2>
        <div className="project-card-container">
          <div className="project-card vetapp">
            <a href="https://vetappwecare.netlify.app/" target="_blank" className="project-name">
              <h4>VetApp</h4>
            </a>
            <img src={vetapp} alt="vetapp" />
            <p>Eine App zur erleichterten Kommunikation mit deinem Tierarzt.</p>
            <div className="span-container">
              <span>CSS</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
            <a href="https://github.com/Jerdnaa/veterinary-frontend" target="_blank">
              <img src={github} alt="github" className="project-github vetapp-img" />
            </a>
          </div>
          <div className="project-card task-manager">
            <a href="https://taskmanager.adaptable.app/" target="_blank" className="project-name">
              <h4>Task Manager</h4>
            </a>
            <img src={todo} alt="task manager" />
            <p>Eine Todo App, mit der du deinen Zeitplan organisieren kannst.</p>
            <div className="span-container">
              <span>EJS</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
            <a href="https://github.com/Jerdnaa/TaskManager" target="_blank">
              <img src={github} alt="github" className="project-github" />
            </a>
          </div>
          <div className="project-card batman">
            <a
              href="https://jerdnaa.github.io/batman-retrieval-mission/"
              target="_blank"
              className="project-name"
            >
              <h4>Batman Retrieval Mission</h4>
            </a>
            <img src={game} alt="batman game" />
            <p>Ein unterhaltsames Mehrstufen-Spiel</p>
            <div className="span-container">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <a href="https://github.com/Jerdnaa/batman-retrieval-mission" target="_blank">
              <img src={github} alt="github" className="project-github" />
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Projects;
