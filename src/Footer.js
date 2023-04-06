function Footer(props) {
  const ALL = () => {
    props.setAll(!props.All);
    props.setCompleted(false);
    props.setActive(false);
  };
  const Active = () => {
    props.setActive(!props.active);
    props.setCompleted(false);
    props.setAll(false);
  };
  const Completed = () => {
    props.setCompleted(!props.completed);
    props.setActive(false);
    props.setAll(false);
  };
  if (window.innerWidth < 1440) {
    if (props.tasks.length != 0) {
      return (
        <>
          <footer className={props.dark ? "dark_footer" : "footer"}>
            <button className={props.dark ? "dark_btn" : "btn"} onClick={ALL}>
              All
            </button>
            <button
              className={props.dark ? "dark_btn" : "btn"}
              onClick={Active}
            >
              Active
            </button>
            <button
              className={props.dark ? "dark_btn" : "btn"}
              onClick={Completed}
            >
              Completed
            </button>
          </footer>
          <p className={props.dark ? "dark_drop_drak" : "drop_drag"}>
            Drag and drop to reorder list
          </p>
        </>
      );
    }
  }
}
export default Footer;
