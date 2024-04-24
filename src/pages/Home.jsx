import { useEffect, useRef, useState } from "react";
import style from "./Home.module.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const checkboxRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    data ? setTasks(JSON.parse(data)) : setTasks([]);
  }, []);

  useEffect(() => {
    filterTasks();
  }, [tasks, checkboxRef, searchRef]);

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleChange = (event, id) => {
    const status = event.target.value;

    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: status,
        };
      }
      return task;
    });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  function filterTasks() {
    const checked = checkboxRef.current.checked;
    const newFilteredTasks = tasks.filter(task => task.status === "completed" || !checked);
    const filteredArray = newFilteredTasks.filter(task =>
      task.task.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setFilteredTasks(filteredArray);
  }

  return (
    <div className={style.home}>
      <div className={style.seachCheck}>
        <div className={style.label}>
          <p>search</p>
          <input type="search" onChange={() => filterTasks()} ref={searchRef} />
        </div>
        <div>
          <label className={style.label}>
            <p>filter finished</p>
            <input type="checkbox" onChange={() => filterTasks()} ref={checkboxRef} />
          </label>
        </div>
      </div>

      <h1>table</h1>
      <table className={style.table}>
        <thead>
          <tr>
            <th>task</th>
            <th>done</th>
            <th>not completed</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <tr key={task.id}>
              <td className={style.task}>{task.task}</td>
              <td>
                <input
                  type="radio"
                  onChange={e => handleChange(e, task.id)}
                  name={task.id}
                  value="completed"
                  checked={task.status === "completed"}
                />
              </td>
              <td>
                <input
                  type="radio"
                  onChange={e => handleChange(e, task.id)}
                  name={task.id}
                  value="incomplete"
                  checked={task.status === "incomplete"}
                />
              </td>
              <td>
                <button onClick={() => deleteTask(task.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
