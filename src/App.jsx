import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Student_List from "./Components/Student_List";
import Favourite_student from "./Components/Favourite_student";
import { createContext, useState } from "react";

const StudentList = createContext();
const FavouriteContext = createContext();
function App() {
  const [favourite, setFavourite] = useState([]);
  const [list, setList] = useState([
    {
      id: 1,
      rollNo: 1,
      name: "subbaiya",
    },
    {
      id: 2,
      rollNo: 2,
      name: "sunder",
    },

    {
      id: 3,
      rollNo: 3,
      name: "sunnil",
    },
  ]);
  return (
    <>
      {/* <h1 className="">HELLOW</h1> */}
      <div className="bg-black text-white px-5 py-20 text-center flex-wrap">
      <BrowserRouter>
        <nav className="flex gap-5 text-center">
          <Link className="hover:underline bg-green-400 px-4 py-2 rounded-md" to="/">Student_List</Link>
          <Link className="hover:underline bg-yellow-400 px-4 py-2 rounded-md" to="/favourite">Favourite_student</Link>
        </nav>
        <FavouriteContext.Provider value={{ favourite, setFavourite }}>
          <StudentList.Provider value={{ list, setList }}>
            <Routes>
              <Route path="/" element={<Student_List />}>
                Student List
              </Route>
              <Route path="/favourite" element={<Favourite_student />}>
                Student List
              </Route>
            </Routes>
          </StudentList.Provider>
        </FavouriteContext.Provider>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
export { StudentList, FavouriteContext };
