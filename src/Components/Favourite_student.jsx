import { useContext } from "react";
import { FavouriteContext, StudentList } from "../App";

const Favourite_student = () => {
  const { favourite, setFavourite } = useContext(FavouriteContext);
  const { list, setList } = useContext(StudentList);

  function handleDelete(deltekey) {
    var tempp = favourite.filter(function (item) {
      if (item.id == deltekey) {
        return false;
      } else {
        return true;
      }
    });
    setFavourite(tempp);
  }
  return (
    <div>
      <h1 className="my-5 font-medium text-2x1">Favourite student list</h1>
      {favourite.map(function (item) {
        return (
          <p key={item.id}>
            ID : {item.id} | Roll No : {item.rollno} | Name : {item.name}
            <button
              className="border border-black px-5 py-2 pointer rounded-md  bg-red-500 mx-3 my-2 cursor-pointer"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Favourite_student;
export { Favourite_student };
