import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroy, selectItem, getTodosAsync } from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = (id) => {
    if (window.confirm("Emin misin?")) {
      dispatch(destroy(id));
    }
  };
  let filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((todo) => todo.tip === activeFilter);
  }
  return (
    <>
      <ul className="todo-list">
        {filtered.map((item) => (
          <li key={item.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{item.title} </label>
              <button
                className="destroy"
                onClick={() => dispatch(handleDestroy(item.id))}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
