import Image from "next/image";
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StreamIcon from '@mui/icons-material/Stream';

const RightHalf = () =>{
    return(
        <div>
            <div className="flex bg-background mr-[60px] pl-[30px] pr-[30px] pt-[30px] pb-[40px] rounded-md mt-[20px]" >
                <div className="mr-4">
                <Image src="/me.png" height={160} width={160} alt="me" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                          About me
                        </div>
                        <div>
                            Bachelor's in Computer Science [2021-2025] | VIT,India
                        </div>
                    </div>
                    <div className="flex">
                       <div className="mr-1">
                        <SchoolIcon />
                       </div>
                       <div className="mr-1">
                        <CodeIcon />
                       </div>
                       <div className="mr-1">
                        <RocketLaunchIcon />
                       </div>
                       <div>
                        <DeviceHubIcon />
                       </div>
                    </div>
                    <div>
                        <p> I’m Aryan, a final-year VIT student and MERN stack developer. With a passion for problem-solving and years of experience using Linux, I focus on system design, optimization, and building scalable solutions. Always learning, I aim to stay ahead in the tech field.</p>
                    </div>
                </div>
            </div>

            <div className="flex bg-background mr-[60px] pl-[30px] pr-[30px] pt-[30px] pb-[40px] rounded-md mt-[20px]" >
                <div className="mr-4">
                <Image src="/work.png" height={160} width={160} alt="me" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                          Experience
                        </div>
                        <div>
                            SDE Intern | Easycompany
                        </div>
                    </div>
                    <div className="flex">
                       <div className="mr-1">
                        <BusinessCenterIcon />
                       </div>
                       <div className="mr-1">
                       <DeveloperModeIcon />
                       </div>
                       <div className="mr-1">
                        <GroupsIcon />
                       </div>
                       <div>
                       <TrendingUpIcon />
                       </div>
                    </div>
                    <div>
                        <p>I worked extensively with the Next.js framework to build web pages and integrate APIs. I handled CSS issues, fixed ESLint bugs, and ensured smooth functionality across projects. Additionally, I gained experience using tools like Docker for containerization and Postman for API testing.</p>
                    </div>
                </div>
            </div>
            <div className="flex bg-background mr-[60px] pl-[30px] pr-[30px] pt-[30px] pb-[40px] rounded-md mt-[20px]" >
                <div className="mr-4">
                <Image src="/prjct.png" height={160} width={160} alt="me" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                          Project 1
                        </div>
                        <div>
                            <div>
                                Food Order App
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                       <div className="mr-1">
                       <CodeIcon />
                       </div>
                       <div className="mr-1">
                       <JoinFullIcon />
                       </div>
                       <div className="mr-1">
                        <YouTubeIcon />
                       </div>
                       <div>
                       <StreamIcon />
                       </div>
                    </div>
                    <div>
                        <p>Hi, I am Aryan, Final Year Student at VIT. I am MERN Stack Developer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet possimus dolores distinctio dolor dolore, deleniti officia, similique porro ducimus voluptate, aliquam expedita perspiciatis architecto qui temporibus quaerat! Aliquam, ex esse.</p>
                    </div>
                </div>
            </div>

            <div className="flex bg-background mr-[60px] pl-[30px] pr-[30px] pt-[30px] pb-[40px] rounded-md mt-[20px]" >
                <div className="mr-4">
                <Image src="/prjct.png" height={160} width={160} alt="me" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                          Project 2
                        </div>
                        <div>
                            <div>
                                Food Order App
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                       <div className="mr-1">
                       <CodeIcon />
                       </div>
                       <div className="mr-1">
                       <JoinFullIcon />
                       </div>
                       <div className="mr-1">
                        <YouTubeIcon />
                       </div>
                       <div>
                       <StreamIcon />
                       </div>
                    </div>
                    <div>
                        <p>Hi, I am Aryan, Final Year Student at VIT. I am MERN Stack Developer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet possimus dolores distinctio dolor dolore, deleniti officia, similique porro ducimus voluptate, aliquam expedita perspiciatis architecto qui temporibus quaerat! Aliquam, ex esse.</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-12">
                <button className=" pt-2 pr-2 pl-2 pb-2 text-white bg-black text-center ml-[480px] rounded-md">Contact Me</button>

            </div>
        </div>

    )
}


export default RightHalf;