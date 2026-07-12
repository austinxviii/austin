import "./CurrentFocus.css";
import goals from "../../data/goals.json";

const CurrentFocus = () => {
  const categories = [...new Set(goals.map(goal => goal.category))];

  return (
    <section className="current-focus">

      <h2>Mission Control</h2>
      <p className="subtitle">
        What I'm currently building and learning.
      </p>

      {categories.map(category => (
        <div key={category} className="category">

          <h3>{category}</h3>

          <div className="goal-grid">

            {goals
              .filter(goal => goal.category === category)
              .map(goal => (
                <GoalCard key={goal.id} goal={goal} />
              ))}

          </div>

        </div>
      ))}

      <p className="updated">
        Last Updated • July 2026
      </p>

    </section>
  );
};

function GoalCard({ goal }) {

  return (

    <div className="goal-card">

      <div className="goal-header">

        <h4>{goal.title}</h4>

        <span className={`status ${goal.status.toLowerCase().replace(" ", "-")}`}>
          {goal.status}
        </span>

      </div>

      {goal.description && (
        <p>{goal.description}</p>
      )}

      {goal.type === "progress" && (

        <>
          <div className="progress">

            <div
              className="progress-fill"
              style={{ width: `${goal.progress}%` }}
            />

          </div>

          <span>{goal.progress}%</span>

        </>

      )}

      {goal.type === "counter" && (
        <h4>{goal.current} / {goal.target}</h4>
      )}

      {goal.type === "completed" && (
        <h4>✅ Completed</h4>
      )}

      {goal.type === "streak" && (
        <h4>🔥 {goal.days} Days</h4>
      )}

    </div>

  );
}

export default CurrentFocus;