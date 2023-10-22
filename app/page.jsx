export default function Home() {
  return (
    <div>
      <header class="w-auto shadow-xl mb-9 h-20 flex sm:flex-row">
        <div class="flex flex-1 items-center px-4 text-xl">
          <h1>Stack Trial Application</h1>
        </div>
        <nav class="flex-1 border-2 flex sm:block bg-white-200">
          <ul class="flex flex-1 w-full p-3 h-full flex-col sm:flex-row items-center justify-around">
            <li>Home</li>
            <li>Events</li>
            <li>Feedback</li>
          </ul>
        </nav>
      </header>

      <main class="flex flex-col p-5 items-center h-screen border-3">
        {/* Displayer section */}
        <div class="displayer"></div>

        <section class="flex items-center border-2 h-16 w-full border-2">
          <input
            type="text"
            id="userInput"
            placeholder="Finish my homework"
            class="h-15 p-3 w-10/12 outline-none"
          />
          <button class="h-16 p-3 flex-2 w-1/6 bg-gray-800 text-amber-100 rounded hover:bg-gray-700">
            Add Event
          </button>
        </section>

        <section class="events mainContainer w-full h-full p-3 pt-10">
          <div class="events__header">
            <h2 class="text-orange-600 mb-10">Events</h2>
          </div>

          <div class="event_display flex justify-around w-full h-full p-5 rounded">
            <article class="event-list bg-blue-100 w-1/4 h-5/6 shadow-xl m-1 rounded p-2 hover:drop-shadow-xl">
              <header>Not started</header>
            </article>
            <article class="event-list w-1/4 h-5/6 bg-yellow-100 hover:drop-shadow-xl shadow-xl m-1 rounded p-2">
              <header>In Progress</header>
            </article>
            <article class="event-list w-1/4 h-5/6 bg-green-100 m-1 rounded p-2 shadow-xl hover:drop-shadow-xl">
              <header>Completed</header>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
