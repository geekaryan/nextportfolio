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
import Link from "next/link";

const RightHalf = () =>{
    return(
        <div>
            <div className="flex bg-background lg:mr-[60px] mr-4 lg:pl-[30px] pl-[12px] lg:pr-[30px] pr-[12px] lg:pt-[30px] pt-[12px] lg:pb-[40px] pb-[12px] rounded-md lg:mt-[20px] mt-[14px]" >
                <div className=" lg:block mr-4 hidden">
                <Image src="/me.png" height={160} width={160} alt="me" />
                </div>
                <div id="ep">
                    <div className="flex justify-between">
                        <div className="font-bold font-serif">
                          About me
                        </div>
                        <div className="lg:block hidden font-serif">
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
                    <div className="mt-2 font-medium">
                        <p> I’m Aryan Rana, a final-year student at VIT where I have achieved a CGPA of 8.9 and MERN stack developer. With a passion for problem-solving and years of experience using Linux, I focus on system design, optimization, and building scalable solutions. Always learning, I aim to stay ahead in the tech field.</p>
                    </div>
                </div>
            </div>

            <div className="flex bg-background lg:mr-[60px] mr-4 lg:pl-[30px] pl-[12px] lg:pr-[30px] pr-[12px] lg:pt-[30px] pt-[12px] lg:pb-[40px] pb-[12px] rounded-md lg:mt-[20px] mt-[14px]" >
                <div className="lg:block mr-4 hidden">
                <Image src="/work.png" height={160} width={160} alt="me" />
                </div>
                <div>
                    <div className="flex justify-between">
                    <div className="font-bold font-serif">
                          Experience
                        </div>
                        <div className="font-serif">
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
                    <div className="mt-2 font-medium">
                        <p>I worked extensively with the Next.js framework to build web pages and integrate APIs. I handled CSS issues, fixed ESLint bugs, and ensured smooth functionality across projects. Additionally, I gained experience using tools like Docker for containerization and Postman for API testing.</p>
                    </div>
                </div>
            </div>
            <div className="flex bg-background lg:mr-[60px] mr-4 lg:pl-[30px] pl-[12px] lg:pr-[30px] pr-[12px] lg:pt-[30px] pt-[12px] lg:pb-[40px] pb-[12px] rounded-md lg:mt-[20px] mt-[14px]"   id="project1">
                <div className="lg:block hidden mr-4">
                <Image src="/prjct.png" height={160} width={160} alt="me" />
                </div>
                <div>
                    <div className="flex justify-between">
                    <div className="font-bold font-serif">
                          Project 1
                        </div>
                        <div>
                            <div className="font-serif">
                                Food Order App
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                       <div className="mr-1">
                        <Link href="https://github.com/geekaryan/FoodApp-Backend">
                       <CodeIcon />
                       </Link>
                       </div>
                       <div className="mr-1">
                       <JoinFullIcon />
                       </div>
                       <div className="mr-1">
                        <Link href="https://youtu.be/aMAL7ZMbT5M?si=OldMBI4ikHZqGPNy">
                        <YouTubeIcon />
                        </Link>
                       </div>
                       <div>
                       <StreamIcon />
                       </div>
                    </div>
                    <div className="lg:mt-0 mt-2 font-medium">
                        <p>I developed a food order app using Node.js for the backend, incorporating Redis for caching to optimize performance. A real-time chat system was implemented using WebSocket with JWT-based authentication. The frontend was built with React.js, providing a seamless user experience for ordering and interacting with the platform.</p>
                    </div>
                </div>
            </div>

            <div className="flex bg-background lg:mr-[60px] mr-4 lg:pl-[30px] pl-[12px] lg:pr-[30px] pr-[12px] lg:pt-[30px] pt-[12px] lg:pb-[40px] pb-[12px] rounded-md lg:mt-[20px] mt-[14px]" >
                <div className="lg:block mr-4 hidden">
                <Image src="/prjct.png" height={160} width={160} alt="me" />
                </div>
                <div>
                    <div className="flex justify-between">
                    <div className="font-bold font-serif">
                          Project 2
                        </div>
                        <div>
                        <div className="font-serif">
                                Natours App
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                       <div className="mr-1">
                       <Link href="https://github.com/geekaryan">
                       <CodeIcon />
                       </Link>
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
                    <div className="lg:mt-0 mt-2 font-medium">
                        <p>I built a tours application backend that allows users to review tours, select preferred tours and guides, and check trip details using WebSocket. The app uses JWT for authentication, Redis for caching, and geospatial data for location services. It serves as an API for seamless integration with frontend platforms.</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-12">
            <Link href="https://www.linkedin.com/in/sudoaptrana2025/">
                <button className=" pt-2 pr-2 pl-2 pb-2 text-white bg-black text-center lg:ml-[480px] ml-[110px] rounded-md">
                    Contact Me
                </button>
            </Link>
            </div>
        </div>

    )
}


export default RightHalf;