import MainHeader from "./Components/Headers/MainHeader";
import Footer from "./Components/Footer";
import LargeInput from "./Components/Inputs/LargeInput";
import Button from "./Components/Buttons/Button";
import CategoryCard from "./Components/Cards/CategoryCard";

export default function Home() {
  return (
    <div>
      <MainHeader />

      <main className="flex flex-col p-5 items-center h-screen border-3 px-[8rem]">
        <section className="flex items-center border-2 h-16 w-full border-2">
          <LargeInput />
          <Button />
        </section>

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
