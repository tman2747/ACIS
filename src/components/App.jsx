import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Footer from "./footer";
function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
