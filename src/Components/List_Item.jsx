import React, { useContext } from "react";
import { inputdata, propsvalue } from "./Student_List";
import { FavouriteContext, StudentList } from "../App";
import { useNavigate } from "react-router-dom";

const List_Item = () => {
  const { item, index, id, rollno, input, setInput } = useContext(propsvalue);
  const { list, setList } = useContext(StudentList);
  const { favourite, setFavourite } = useContext(FavouriteContext);

  const navigation = useNavigate();
  // const {input,setInput}=useContext(inputdata)

  function handleDelete(deltekey) {
    var tempp = list.filter(function (item) {
      if (item.id == deltekey) {
        return false;
      } else {
        return true;
      }
    });
    setList(tempp);
  }

  // FUNCTION FOR HANDLE FAVOURITE PERSON IN FAVOURITE FUNCTION :

  function handleFovourite() {
    const exists = favourite.some(function (fav) {
      return fav.id === item.id;
    });

    if (exists) {
      alert("Already added to favourite");
      navigation("/favourite");
      return;
    }

    setFavourite([...favourite, item]);
    navigation("/favourite");
  }
  return (
    <p className="flex flex-wrap">
      ID : {index + 1} . Roll no : {item.rollNo} {item.name}
      <button
        className="border border-black px-5 py-2 pointer rounded-md bg-red-500 mx-3 my-2 cursor-pointer"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      <button
        onClick={handleFovourite}
        className="border border-black px-5 py-2 pointer rounded-md bg-pink-500 cursor-pointer"
      >
        Add to Favourite
      </button>
    </p>
  );
};

export default List_Item;
