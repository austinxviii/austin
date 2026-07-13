import missionData from "../../data/missionData";
import GoalCard from "./GoalCard";

export default function MissionControl() {
  return (
    <section className="mission">

      <h2>Mission Control</h2>

      <p>
        Here's what I'm currently building, learning and working towards.
      </p>

      {missionData.map((section) => (

        <div key={section.category}>

          <h3>{section.category}</h3>

          <div className="goal-grid">

            {section.goals.map((goal) => (

              <GoalCard key={goal.title} goal={goal}/>

            ))}

          </div>

        </div>

      ))}

    </section>
  );
}