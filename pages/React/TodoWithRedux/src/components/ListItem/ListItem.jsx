import { useDispatch } from "react-redux";
import { deleteTodo, toggleDoneTodo } from "../../store/slices/todosSlice";

const ListItem = ({ todoText, isDone, todoId }) => {
  const dispatch = useDispatch();

  const onRemoveButtonClick = (id) => dispatch(deleteTodo(id));

  const onDoneButtonClick = (id) => dispatch(toggleDoneTodo({ id: id }));

  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest ${isDone && "line-through"}`}>
        {todoText}
      </p>
      <button
        className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded ${
          isDone
            ? "hover:text-white text-green-500 border-green-500 hover:bg-green-500"
            : "hover:text-white text-grey-500 border-grey-500 hover:bg-black w-fit text-nowrap"
        }`}
        onClick={() => onDoneButtonClick(todoId)}
      >
        {isDone ? "Done" : "Not Done"}
      </button>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        onClick={() => onRemoveButtonClick(todoId)}
      >
        Remove
      </button>
    </div>
  );
};

export default ListItem;
