import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  const [inputvalue, setinputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [check, setCheck] = useState(false);
  const [dark, setDark] = useState(false);
  const keyPress = (event) => {
    setinputValue(event.target.value);
  };
  const onkeyPress = (event) => {
    if (event.key === "Enter" && inputvalue != "") {
      setTasks([
        ...tasks,
        {
          text: inputvalue,
          active: check,
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ]);
      setinputValue("");
      setCheck(false);
    }
  };

  const makeChecked = () => {
    setCheck(!check);
  };

  return (
    <div className="App">
      <Header
        onkeyPress={onkeyPress}
        keypress={keyPress}
        value={inputvalue}
        makeChecked={makeChecked}
        check={check}
        dark={dark}
        setDark={setDark}
      />
      <Main
        dark={dark}
        setDark={setDark}
        check={check}
        setCheck={setCheck}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Footer tasks={tasks} setTasks={setTasks} dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
