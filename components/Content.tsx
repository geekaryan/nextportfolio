import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";

const Context =  () => {
        return(
        <div className="lg:flex mt-14 justify-between ">
            <div>
                <LeftHalf />
            </div>
            <div className="border-t-2 pt-2 lg:ml-11 ml-4">
                <RightHalf />
            </div>
        </div>
        )
}

export default Context;