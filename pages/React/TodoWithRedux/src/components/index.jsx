import { useSelector } from "react-redux";
import ListItem from "./ListItem/ListItem";
import TodoInput from "./TodoInput/TodoInput";

export default function TodosSection() {
  const todos = useSelector((state) => state.todo.list);

  return (
    <div className="w-full flex items-center justify-center bg-blue-900 h-screen font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-600">Todo List</h1>
          <TodoInput />
        </div>
        <div>
          {todos &&
            todos.length > 0 &&
            todos.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  todoText={item.text}
                  isDone={item.done}
                  todoId={item.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
