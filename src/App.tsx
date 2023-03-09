import "./styles/global.scss";
import { Outlet } from "react-router-dom";
import Navigation from "./layouts/navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
