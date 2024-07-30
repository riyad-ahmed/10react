import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Skeleton from "react-loading-skeleton";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home /> || <Skeleton/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
    </>
  );
}

export default App;
