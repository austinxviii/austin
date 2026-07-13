import ProgressBar from "./ProgressBar";

export default function GoalCard({ goal }) {

  return (

    <div className="goal-card">

      <h4>{goal.title}</h4>

      {goal.description && <p>{goal.description}</p>}

      {goal.type === "counter" ? (

        <h3>

          {goal.current} / {goal.target}

        </h3>

      ) : (

        <>

          <ProgressBar value={goal.progress}/>

          <span>{goal.progress}%</span>

        </>

      )}

    </div>

  );

}