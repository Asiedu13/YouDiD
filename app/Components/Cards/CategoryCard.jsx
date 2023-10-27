import React from "react";
import TaskCard from "./TaskCard";

const CategoryCard = (props) => {
  return (
    <article
      className={`event-list ${props.color}  w-[350px] h-5/6 shadow-xl m-1 rounded p-2 hover:drop-shadow-xl`}
    >
      <header className="p-2 text-lg">{props.category}</header>
      {/* Task display */}
      <section>
        {props.tasks.map((task) => {
          return (
            <div key={task.id}>
              <TaskCard todo={task.task} />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default CategoryCard;
