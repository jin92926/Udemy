import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    // ...
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      // 두 개의 인자를 받음,
      // 1 제출하려는 데이터, 2 form에 설정할 수 있는 값들 method, action 등
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
