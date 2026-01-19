import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks(props) {
  const Navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    Navigate("/task?${query.toString()}");

    Navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className={
              "bg-slate-400 p-2 rounded-md text-white ${task.isCompleted && 'line-through'}"
            }
          >
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className={
              "bg-slate-400 p-2 rounded-md text-white ${task.isCompleted && 'line-through'}"
            }
          >
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
