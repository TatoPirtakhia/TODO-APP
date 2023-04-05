function Footer(props) {
    const ALL = () =>{

    }
  if (props.tasks.length != 0) {
    return (
      <>
        <footer className={props.dark?"dark_footer":"footer"}>
          <button className={props.dark?"dark_btn":"btn"} onClick={ALL}>All</button>
          <button className={props.dark?"dark_btn":"btn"}>Active</button>
          <button className={props.dark?"dark_btn":"btn"}>Completed</button>
        </footer>
        <p className={props.dark?"dark_drop_drak":"drop_drag"}>Drag and drop to reorder list</p>
      </>
    );
  }
}
export default Footer;
