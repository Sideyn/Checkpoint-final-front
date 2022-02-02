import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Admin from "./components/Admin/admin";
import Login from "./components/Login/login";
import Project from "./components/Project/project";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="projects" element={<Project />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
