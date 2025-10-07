import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.isDone ? "done" : ""}>{task.title}</span>
      </label>

      {!task.isDone && <DueBadge dueDate={task.dueDate} />}

      <button onClick={() => onDelete(task.id)} className="ghost" aria-label="Delete task">
        ✕
      </button>
    </li>
  );
}
