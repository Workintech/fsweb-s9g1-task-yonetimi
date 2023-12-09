import { useState } from "react";
import "./app.css";
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskHookForm from "./TaskHookForm";
import PeopleForm from "./PeopleForm";
import { initialTasks, initialTeam } from "./data";


function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [team, setTeam] = useState(initialTeam);

  function handleTaskSubmit(yeniTask) {
    setTasks([yeniTask, ...tasks])
  }

  function handlePeopleSubmit(yeniKisi) {
    setTeam([...team, yeniKisi])
  }

  //data.js'teki array'in içindeki obleri (initialTasks) ilk değer olarak tutan tasks state'imi güncelleyeceğim. setTasks ile.
  function handleComplete(id) {
    console.log("tamamlama fonksiyonunu buraya yazın")
    const newTask = [...tasks]; //tasks state'imi kopyalayıp değiştireceğim. Bu kopya oluşturulduktan sonra değişiklik yapılacak. bu kopyayı, içerde kullanmak için bir değişkene atıyorum.
    newTask.forEach(task => { //içindeki her bir task'i kontrol ediyorum, iterate.
      if (task.id === id) {
        task.status = "yapıldı";
      } // task.id ile id'leri karşılaştırıyorum. task.id ile id'leri eşleştiğimizde task.status'ını yapıldı olarak değiştiriyorum.
    });
    setTasks(newTask);
  }

  return (
    <div className="app">
      <div className="formColumn">
        <div className="form-container">
          <h2>Yeni Task</h2>
          {/* <TaskForm kisiler={team} submitFn={handleTaskSubmit} /> */}
          <TaskHookForm kisiler={team} submitFn={handleTaskSubmit} />
        </div>

        <div className="form-container">
          <h2>Yeni Kişi</h2>
          <PeopleForm kisiler={team} submitFn={handlePeopleSubmit} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="column-title">Yapılacaklar</h2>
          <div className="column-list">
            {tasks
              .filter((t) => t.status === "yapılacak")
              .map((t) => (
                <Task key={t.id} taskObj={t} onComplete={handleComplete} />
              ))}
          </div>
        </div>
        <div className="column">
          <h2 className="column-title">Tamamlananlar</h2>
          <div className="column-list">
            {tasks
              .filter((t) => t.status === "yapıldı")
              .map((t) => (
                <Task key={t.id} taskObj={t} />
              ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
