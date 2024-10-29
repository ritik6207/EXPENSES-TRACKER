import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/Home/HomePage";
import PublicNavbar from "./Components/Navbar/PublicNavbar";
import LoginForm from "./Components/Users/Login";
import { useSelector } from "react-redux";
import RegistrationForm from "./Components/Users/Register";
import PrivateNavbar from "./Components/Navbar/PrivateNavbar";
import AddCategory from "./Components/Category/AddCategory";

function App() {
  const user = useSelector(state => state?.auth?.user);

  return (
    <BrowserRouter>
      {/* Navbar */}
      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/add-category" element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
