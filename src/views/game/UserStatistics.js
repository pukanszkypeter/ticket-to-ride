import { RiCopperCoinLine } from "react-icons/ri";
import { MdTrain } from "react-icons/md";
import { CgCardDiamonds } from "react-icons/cg";
import { GiDetour } from "react-icons/gi";

export function UserStatistics() {
  return (
    <div className="col">
      <div className="userCard">
        <div className="card-header">#Player</div>
        <div className="row my-row">
          <div className="col">
            Points: 10 <RiCopperCoinLine />
          </div>
          <div className="col">
            Wagons: 25 <MdTrain />
          </div>
        </div>
        <div className="row my-row">
          <div className="col">
            Cards: 6 <CgCardDiamonds />
          </div>
          <div className="col">
            Destinations: 2 <GiDetour />
          </div>
        </div>
        <div className="row my-footer">
          <div className="col">X. round</div>
        </div>
      </div>
    </div>
  );
}
