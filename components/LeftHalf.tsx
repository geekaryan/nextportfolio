import Image from "next/image";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';

const LeftHalf = () => {
    return(<div className="ml-8 mt-8 text-white">
       <div className="bg-black pt-[12px] pb-[12px] pl-[60px] pr-[60px] mb-4">
        Download Resume
       </div>
       <div className="bg-black pt-[12px] pb-[12px] pl-[76px] pr-[52px] mb-4">
        View Project
       </div>
       <div className="bg-black pt-[12px] pb-[12px] pl-[70px] pr-[60px] mb-4">
        Coding Profile
       </div>
       <div className="bg-black pt-[12px] pb-[12px] pl-[84px] pr-[50px] mb-4">
        Medium
       </div>

       <div className="text-black">
        Experience
       </div>
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
               <Image
               src="/exp1.png"
               alt="image"
               height={40}
               width={40}
               />
            </div>
            <div>
                SDE Intern at easycompany
            </div>
       </div>
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
               <Image
               src="/exp2.png"
               alt="image"
               height={40}
               width={40}
               />
            </div>
            <div>
                Kernel Dev at Kavach OS
            </div>
       </div>

       <div className="text-black mt-[40px]">
        Skills
       </div>
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
              <CodeIcon />
            </div>
            <div>
                C++/ Javascript/ Typescript
            </div>
       </div>
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
             <StorageIcon />
            </div>
            <div>
                MySql/ MongoDB
            </div>
       </div>
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
             <DataObjectIcon />
            </div>
            <div>
                ReactJS/ NextJS/ NodeJS
            </div>
       </div>
       
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
             <RocketLaunchIcon />
            </div>
            <div>
                Docker/ Postman
            </div>
       </div>
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
             <TerminalIcon />
            </div>
            <div>
                Linux/ Git
            </div>
       </div>
       <div className="w-[250px] mt-4 flex text-black items-center ">
            <div className="mr-4">
             <CloudIcon />
            </div>
            <div>
                AWS
            </div>
       </div>
    </div>
    )
}

export default LeftHalf;