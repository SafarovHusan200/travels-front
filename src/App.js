import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTravelBook from "./components/AddTravelBook";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/add" element={<AddTravelBook />}></Route>
        <Route path="/update/:id" element={<UpdateBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
