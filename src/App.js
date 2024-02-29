import BottomNavBar from "./codepens/bottomNavBar";
import Footer from "./components/footer";
import Header from "./components/header";
import Contactanos from "./pages/contactanos";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Planes from "./pages/planes";
import Servicios from "./pages/servicios";
import Proyectos from "./pages/proyectos";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      <BottomNavBar />
      <Landing />
      <Servicios />
      <Proyectos />
      <Planes />
      <Contactanos />
    </div>
  );
}

export default App;
