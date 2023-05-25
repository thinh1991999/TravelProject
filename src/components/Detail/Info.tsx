import Checkout from "./Checkout";
import InfoLeft from "./InfoLeft";

const Info = () => {

  return (
    <div>
      <div className="row ">
        <div className="w-full md:w-4/6 p-2">
          <InfoLeft />
        </div>
        <div className="md:block hidden w-2/6 p-2  relative">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Info;
