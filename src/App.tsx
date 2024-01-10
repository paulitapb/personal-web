// views
import { About, Hero, Projects } from "./views";

// components
import { Menu } from "./components";
import Experience from "./views/Experience";

// TODO: add blog section and speaker section
function App() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Menu />
    </>
  );
}

export default App;
