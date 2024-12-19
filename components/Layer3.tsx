import Image from "next/image";

const Layer3 = () =>{
    return(
        <div className="flex justify-between items-center text-center relative">
            <div>
                
            </div>
            <div className="absolute top-[20px] left-[330px] bottom-[100px] text-3xl font-bold">
                Skills
            </div>
            <div className="flex mr-6 relative top-[20px] items-center">
               <div className="mr-2  font-bold">
                Programming :
               </div>
               <div className="bg-background pt-1 pr-2 pl-2 pb-1 rounded-[12px] font-mono">
                C++, JS, Python
               </div>
            </div>
        </div>
    )
}

export default Layer3;