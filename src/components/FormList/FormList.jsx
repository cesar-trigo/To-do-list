import { useEffect, useRef, useState } from "react";
import style from "./FormList.module.css";

const FormList = () => {
  const taskRef = useRef();

  const getTasks = () => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  };

  const [tasks, setTasks] = useState(getTasks());

  const getNewId = () => {
    return Math.max(...tasks.map(task => task.id), 0) + 1;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: getNewId(),
      task: taskRef.current.value,
      status: "",
    };
    setTasks([...tasks, newTask]);
    taskRef.current.value = "";
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <form id="form" className={style.form} onSubmit={handleSubmit}>
        <div className={style.formBody}>
          <h2 className="title2">Create Task</h2>
          <input
            type="text"
            autoComplete="current-email"
            placeholder="task.."
            className="form__input"
            ref={taskRef}
          />
          <div className="div-submit">
            <button className={style.submit}>Create</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormList;
