import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";

const Context =  () => {
        return(
        <div className="flex mt-14 justify-between ">
            <div>
                <LeftHalf />
            </div>
            <div className="border-t-2 pt-2 ml-11">
                <RightHalf />
            </div>
        </div>
        )
}

export default Context;