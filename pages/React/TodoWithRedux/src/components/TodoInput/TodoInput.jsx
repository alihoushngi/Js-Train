import { useState } from "react";
import { addTodo } from "../../store/slices/todosSlice";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (inputText.length > 0) {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          text: inputText,
          done: false,
        })
      );

      setInputText("");
    }
  };

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-600"
        placeholder="Add Todo"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button
        className="flex-no-shrink p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500 hover:bg-teal"
        onClick={addTodoHandler}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
