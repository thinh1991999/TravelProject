import { useModal } from "../share/customHooks";
import Categories from "./Categories";
import FilterBtn from "./FilterBtn";
import Filters from "./Filters";
import Modal from "./Modal";

const HeaderSub = () => {
  const [show, handleShow] = useModal();

  return (
    <>
      <div className="fixed top-[100px] left-0 right-0  z-40 bg-white shadow-sm">
        <div className="container m-auto py-5 flex flex-wrap">
          <div className="w-full md:w-[calc(100%_-_100px)]">
            <Categories />
          </div>
          <div className="w-[100px] justify-center md:flex hidden">
            <FilterBtn handleShow={handleShow} />
          </div>
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <Filters handleShow={handleShow}></Filters>
      </Modal>
    </>
  );
};

export default HeaderSub;
