import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="blessingHover.jpeg" alt="Blessing Joshua" />;
}

function Intro() {
  return (
    <div>
        <h1>Blessing Joshua</h1>
      <p>
        I am Student at Kalvium, Learning Full Stack Development 
        and Data structure and Algorithms. I often play chess in
        my free time and love to learn and upgrade my skills.
      </p>
    </div>
  );
}


function SkillList(){
  return (
  <div className="skill-list">
    <Skill skill="React" emoji="👍" color="pink"/>
    <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
    <Skill skill="Figma" emoji="👍" color="yellow"/>
    <Skill skill="Javascript" emoji="👍" color="lime"/>
  </div>
  );
}

function Skill(props){
  return(
    <div className="skill" style={{backgroundColor:props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
  </div>
  )
}