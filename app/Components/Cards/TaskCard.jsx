import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

const TaskCard = () => {
  return (
    <div className="flex justify-between items-center bg-white p-2 rounded">
      <p>Buy Milk</p>
      <SlOptionsVertical />
    </div>
  );
};

export default TaskCard;
