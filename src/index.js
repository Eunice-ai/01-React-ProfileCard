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

function Skilllist() {
  return (
    <div className="skill-list">
      <Skill 
      name="HTML+CSS"
      emoji=" 👍"
      backgroundColor="blue"
      />

      <Skill 
      name="JavaScript"
      emoji=" 👍"
      backgroundColor="yellow"
      />

      <Skill 
      name="Web Design"
      emoji=" 👍"
      backgroundColor="green"
      />

      <Skill 
      name="Git and Github"
      emoji=" 🤞"
      backgroundColor="brown"
      />
      <Skill 
      name="React"
      emoji=" 🤞"
      backgroundColor="cyan"
      />
      <Skill 
      name="Svelte"
      emoji=" 🤞"
      backgroundColor="red"
      />
    </div>
  );
}

function Skill(props) {
  return <div className="skill" style={{backgroundColor: props.backgroundColor}}>
    <span className="pad">{props.name}</span>
    <span className="pad">{props.emoji}</span>
  </div>
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
