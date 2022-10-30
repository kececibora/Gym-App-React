import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter, selectItem } from "../redux/todos/todosSlice";

function ContentFooter() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const itemsLeft = items.filter((item) => item).length;
  const activeFilter = useSelector(selectItem);

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>Toplam: {itemsLeft}</strong>
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => dispatch(changeActiveFilter("all"))}
              className={activeFilter === "all" ? "selected" : ""}
            >
              Hepsi
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => dispatch(changeActiveFilter("gögüs"))}
              className={activeFilter === "gögüs" ? "selected" : ""}
            >
              Göğüs
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => dispatch(changeActiveFilter("sırt"))}
              className={activeFilter === "sırt" ? "selected" : ""}
            >
              Sırt
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => dispatch(changeActiveFilter("bacak"))}
              className={activeFilter === "bacak" ? "selected" : ""}
            >
              Bacak
            </a>
          </li>
        </ul>

        <button className="clear-completed">Üyelik Bilgileri</button>
      </footer>
    </>
  );
}

export default ContentFooter;
