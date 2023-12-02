import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="../images.jpg" alt="headshot" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portugese sun at the beach.
      </p>
    </div>
  );
}

const skillsData = [
  {
    name: "HTML+CSS",
    level: "advanced",
    backgroundColor: "blue",
  },
  {
    name: "JavaScript",
    level: "advanced",
    backgroundColor: "yellow",
  },
  {
    name: "Web Design",
    level: "advanced",
    backgroundColor: "green",
  },
  {
    name: "Git and Github",
    level: "intermediate",
    backgroundColor: "magenta",
  },
  {
    name: "React",
    level: "advanced",
    backgroundColor: "cyan",
  },
  {
    name: "Svelte",
    level: "beginner",
    backgroundColor: "red",
  },
];

function Skilllist() {
  return (
    <div className="skill-list">
      {skillsData.map((skillss) => (
        <Skill skillsObj={skillss} key={skillss.name} />
      ))}

      {/* <Skill 
       name="HTML+CSS"
       level=" 👍"
       backgroundColor="blue"
      />

      <Skill 
        name="JavaScript"
        level=" 👍"
        backgroundColor="yellow"
      />

      <Skill 
      name="Web Design"
      level=" 👍"
      backgroundColor="green"
      />

      <Skill 
      name="Git and Github"
      level=" 🤞"
      backgroundColor="brown"
      />
      <Skill 
      name="React"
      level=" 🤞"
      backgroundColor="cyan"
      />
      <Skill 
      name="Svelte"
      level=" 🤞"
      backgroundColor="red"
      /> */}
    </div>
  );
}

function Skill({ skillsObj }) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: skillsObj.backgroundColor }}
    >
      <span className="pad">{skillsObj.name}</span>
      <span className="pad">
        {/* {skillsObj.level === "advanced"
          ? " 💪"
          : skillsObj.level === "intermediate"
          ? " 👍"
          : " 🧑"} */}

          {/* using $$ and benefitting from short-circuiting */}
          {skillsObj.level === "beginner" && "🧑"}
          {skillsObj.level === "intermediate" && "👍"}
          {skillsObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
