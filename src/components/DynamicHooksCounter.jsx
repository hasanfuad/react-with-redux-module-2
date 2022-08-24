import { useDispatch, useSelector } from "react-redux";
import { dDecrement, dIncrement } from "../redux/dynamicHooksCounter/dActions";

function DynamicHooksCounter() {
  const dCount = useSelector((state) => state.dCounter.value);
  const dispatch = useDispatch();

  const dIncrementHandler = (value) => {
    dispatch(dIncrement(value));
  };

  const dDecrementHandler = (value) => {
    dispatch(dDecrement(value));
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{dCount}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dIncrementHandler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dDecrementHandler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default DynamicHooksCounter;
