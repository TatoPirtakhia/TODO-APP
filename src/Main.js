import { useState } from "react";
function Main(props) {
  // const clear = () =>{
  //     props.tasks([])
  // }

  const changeToactive = (event) => {
    if (event.target.classList.contains("check")) {
      const id = parseInt(event.target.id);
      const indx = props.tasks.findIndex((element) => element.id === id);

      let array = [...props.tasks];
      array[indx].active = !array[indx].active;
      props.setTasks(array);
    }

    // const  filtertask = props.tasks.filter((task) => task.id === ID)
  };
  const changeToNoActive = (event) => {
    if (event.target.classList.contains("active")) {
      const id = parseInt(event.target.id);
      const indx = props.tasks.findIndex((element) => element.id === id);

      let array = [...props.tasks];
      array[indx].active = !array[indx].active;
      props.setTasks(array);
    }
  };
  const remove = (event) => {
    if (event.target.classList.contains("remove")) {
      const id = parseInt(event.target.id);
      const indx = props.tasks.findIndex((element) => element.id === id);
      let array = [...props.tasks];
      array.splice(indx, 1);
      props.setTasks(array);
    }
  };
  const clearCompleted = () => {
    let array = [];
    array = [...props.tasks];
    let indx = array.findIndex((element) => element.active === true);
    while (indx != -1) {
      array.splice(indx, 1);
      indx = array.findIndex((element) => element.active === true);
    }
    props.setTasks(array);
  };
  if (props.tasks.length != 0) {
    return (
      <div className="container">
        <main>
          {props.tasks.map((element) => {
            return (
              <>
                <div className="box">
                  <div
                    className="check"
                    onClick={changeToactive}
                    id={element.id}
                  >
                    <div
                      className={element.active ? "active" : "noActive"}
                      onClick={changeToNoActive}
                      id={element.id}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                        id={element.id}
                        onClick={changeToNoActive}
                      >
                        <path
                          fill="none"
                          stroke="#FFF"
                          strokeWidth="2"
                          d="M1 4.304L3.696 7l6-6"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className={element.active ? "ckecked_text" : "text"}>
                    {element.text}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="remove"
                    id={element.id}
                    onClick={remove}
                  >
                    <path
                      fill="#494C6B"
                      fillRule="evenodd"
                      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                  </svg>
                </div>
              </>
            );
          })}
          <div className="components">
            <p className="items_left">{`${props.tasks.length} items left`}</p>
            <button className="button_clear" onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
