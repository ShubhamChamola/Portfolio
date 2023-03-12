import "./styles/global.scss";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./layouts/navigation";
import Contact from "./layouts/contact";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
