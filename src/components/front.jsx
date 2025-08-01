import { Entry } from "./entry";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export const Front = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/entry");
  };
  return (
    <main>
      <div className=" flex justify-between ">
        <img className="h-30" src="/logo.png" alt="Logo" />
        <button onClick={handleClick} className="bg-purple-600 p-3 h-15 m-4 ">
          <Link to={"/entry"}></Link> + Add Entry
        </button>
      </div>

      <div className="flex flex-col justify-center h-150  items-center space-y-4">
        <h1 className="text-5xl text-fuchsia-500">Hello User</h1>
        <p className="text-2xl text-yellow-600">How are you feeling today?</p>
        <div className="flex gap-8 text-7xl ">
          <button>
            🙂<p className="text-xl">Happy</p>
          </button>
          <button>
            ☹️<p className="text-xl">Sad</p>
          </button>
          <button>
            😡<p className="text-xl">Angry</p>
          </button>
          <button>
            🤨<p className="text-xl">Don't Know</p>
          </button>
        </div>
      </div>
    </main>
  );
};
