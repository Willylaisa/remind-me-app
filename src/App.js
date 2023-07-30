import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.js";
import Signup from "./pages/Signup.js";
import Tasks from "./pages/Tasks.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/logout" element={<Welcome />}/>
      <Route path="/tasks/:id" element={<Tasks />}/>
    </Routes>
  )
}

export default App;
