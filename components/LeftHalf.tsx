import Image from "next/image";
import Link from "next/link";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';

const LeftHalf = () => {
    return(<div className="lg:ml-8 ml-4 lg:mr-0 mr-4 lg:mt-8 mt-[120px] text-white">
       <div className="bg-black pt-[12px] pb-[12px] lg:pl-[60px] pl-[100px] lg:pr-[50px] pr-[30px] mb-4">
       <Link href="https://drive.google.com/file/d/181hxGKJ6Dq_qKsF5FG_53asmzcWlmx8H/view?usp=drive_link">Download Resume</Link> 
       </div>
       <div className="bg-black pt-[12px] pb-[12px] lg:pl-[76px] pl-[120px] lg:pr-[52px] mb-4">
        <Link href="https://github.com/geekaryan">View Project</Link>
       </div>
       <div className="bg-black pt-[12px] pb-[12px] lg:pl-[70px] pl-[116px] lg:pr-[60px] mb-4">
        <Link href="https://leetcode.com/u/re_cur_sion/">Coding Profile</Link>
       </div>
       <div className="bg-black pt-[12px] pb-[12px] lg:pl-[84px] pl-[136px] lg:pr-[50px] mb-4">
        <Link href="https://medium.com/@sudoaptrana2025">Medium</Link>
       </div>

       <div className="text-black lg:mt-0 mt-[50px]" >
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
                Docker/ Postman/ Kafka
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
       <div className="w-[250px] mt-4 flex text-black items-center mb-4">
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