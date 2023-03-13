import { BsList } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import Drop from "./Drop";

const User = () => {
  return (
    <div className="relative">
      <Drop
        configs={{
          width: "300px",
          top: "calc(100% + 10px)",
          right: "0",
        }}
        target={
          <button className="flex items-center btn btn-trans rounded-full border border-color ">
            <BsList className="mr-3" />
            <div className="w-[30px] h-[30px] bg-gray-700 flex items-center justify-center text-white rounded-full">
              <FaUserAlt />
            </div>
          </button>
        }
      >
        <ul>
          <li className="py-2 px-3 font-semibold text-start cursor-pointer hover:bg-gray-300">
            Sign up
          </li>
          <li className="py-2 px-3 font-semibold text-start cursor-pointer hover:bg-gray-300">
            log in
          </li>
        </ul>
      </Drop>
    </div>
  );
};

export default User;
