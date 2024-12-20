import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
const Layer2 = () =>{
    return(
        <div className="bg-bcport-img h-[202px]  pb-20 pt-10 text-white  relative">
            <div>
               <Image
               src="/profile.png"
               alt="img"
               height={300}
               width={250}
               className='absolute top-6 left-8'
               />
            </div>
            <div className="flex justify-center absolute left-[340px]">
                <div>
                <div className='text-2xl font-bold mb-2'>
                    Contact Me
                </div>
                <div className='mb-2'>
                    Email: sudoaptrana2025@gmail.com
                </div>
                <div className="flex">
                    <div className=" flex items-center mr-2">

                        <div className='mr-2'>
                            <LinkedInIcon />
                        </div>
                        <div>
                            LinkedIn
                        </div>
                    </div>
                    <div className=" flex items-center mr-2">
                        <div className='mr-2'>
                           <GitHubIcon />
                        </div>
                        <div>
                            Github
                        </div>
                    </div>
                    <div className=" flex items-center mr-2">
                        <div className='mr-2'>
                           <PhoneAndroidIcon />
                        </div>
                        <div>
                            My-number
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Layer2;