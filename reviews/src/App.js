import Reactnpm from "react";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <section className='container'>
        <Title />
        <Reviews />
      </section>
    </main>
  );
}

export default App;
