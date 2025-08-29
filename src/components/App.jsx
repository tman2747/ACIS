import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
