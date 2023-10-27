"use client";
import MainHeader from "./Components/Headers/MainHeader";
import Footer from "./Components/Footer";
import CategoryCard from "./Components/Cards/CategoryCard";
import { useEffect, useState } from "react";
import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from './firebase';
import { addTask } from "./Components/utils/functions";

export default function Home() {
  // const allTasks = await getTasks();
  const [formInput, setFormInput] = useState( "" );
  const [allTasks, setAllTasks] = useState( []);
  // const [notStarted, setNotStarted] = useState()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput != "") {
      addTask(formInput);
    } else {
      console.log("Empty input");
    }
    setFormInput( "" );
  };
  useEffect( () => {
    const q = query( collection( db, 'tasks' ) );
    const unsubscribe = onSnapshot( q, ( querySnapshot ) => {
      let tasksArr = [];

      querySnapshot.forEach( doc => {
        tasksArr.push( {...doc.data() } );
      } )
      setAllTasks( tasksArr );
    })
  }, [])
  return (
    <div>
      <MainHeader />

      <main className="flex flex-col p-5 items-center h-screen border-3 px-[8rem]">
        <form className="flex items-center border-2 h-16 w-full border-2 relative">
          <input
            type="text"
            id="userInput"
            placeholder="Finish my homework"
            className="h-15 p-3 w-10/12 outline-none"
            name="task"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
          />

          <button
            onClick={(e) => handleSubmit(e)}
            className="h-16 p-3 flex-2 w-1/6 bg-gray-800 text-amber-100 rounded hover:bg-gray-700"
          >
            Add task
          </button>
        </form>

        <section className="events mainContainer w-full h-full p-3 pt-10">
          <div className="events__header">
            <h2 className="text-orange-600 mb-10 text-xl">Events</h2>
          </div>

          <div className="event_display flex justify-between w-full h-full py-2rounded">
            <CategoryCard color="bg-blue-100"  category="Not started"/>
            <CategoryCard color="bg-yellow-100" category="In Progress" />
            <CategoryCard color="bg-green-100" category="Completed" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
