import React from 'react'
import TaskCard from './TaskCard';

const CategoryCard = (props) => {
  return (
      <article className={`event-list ${props.color}  w-1/4 h-5/6 shadow-xl m-1 rounded p-2 hover:drop-shadow-xl`}>
          <header className='p-2'>{props.category}</header>
          {/* Task display */}
          <section>
              <TaskCard />
          </section>
    </article>
  );
}

export default CategoryCard