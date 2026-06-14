import React, { createContext, useContext, useState } from "react";
import { StudentList } from "../App";
import List_Item from "./List_Item";

const propsvalue = createContext();
const inputdata = createContext();

const Student_List = () => {
  const { list, setList } = useContext(StudentList);

  const [input, setInput] = useState("");

  function handlechange(e) {
    setInput(e.target.value);
  }

  function studentAdd() {
    if (input.trim() === "") {
      alert("Please enter a Student name");
      return;
    }
    setList([
      ...list,
      { id: list.length + 1, rollno: list.length + 1, name: input },
    ]);
    setInput("");
  }
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={handlechange}
          className="border border-black px-5 py-3 my-2 rounded-md bg-gray-400 text-black font-medium "
          type="text"
          placeholder="Enter studen name here?"
        />

        <button
          onClick={studentAdd}
          className="border border-black px-5 py-3 pointer rounded-md bg-blue-400 cursor-pointer"
        >
          Add
        </button>
      </div>

      <h1 className="font-medium text-2xl my-5">STUDENT LIST</h1>
      {list.map(function (item, index, rollno, id) {
        return (
          <div key={item.id}>
            {/* {index + 1} . {item.name} */}
            <propsvalue.Provider
              value={{
                item,
                index,
                id: item.id,
                rollno: item.rollno,
                input,
                setInput,
              }}
            >
              <List_Item />
            </propsvalue.Provider>
          </div>
        );
      })}
    </div>
  );
};

export default Student_List;
export { propsvalue };
export { inputdata };
