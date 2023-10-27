import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

const TaskCard = (props) => {
  return (
    <div className="flex justify-between items-center bg-white p-2 rounded my-[10px] text-gray-600">
          <p>{props.todo}</p>
          <SlOptionsVertical />
    </div>
  );
};

export default TaskCard;
