import "./styles/global.scss";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./layouts/navigation";
import Contact from "./layouts/contact";

function App() {
  const [prevLocation, setPrevLocation] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setPrevLocation((prev) => {
      if (
        prev &&
        prev.includes("/projects") &&
        location.pathname.includes("/projects")
      ) {
        return location.pathname;
      }
      window.scrollTo(0, 0);
      return location.pathname;
    });
  }, [location]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
