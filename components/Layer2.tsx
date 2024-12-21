import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Link from 'next/link';
const Layer2 = () =>{
    return(
        <div className="bg-bcport-img h-[202px]  pb-20 pt-10 text-white  relative">
            <div>
               <Image
               src="/profile.png"
               alt="img"
               height={300}
               width={250}
               className='absolute lg:top-6 lg:left-8 left-16'
               />
            </div>
            <div className="lg:flex justify-center absolute left-[340px] hidden">
                <div>
                <div className='text-2xl font-bold mb-2'>
                    Contact Me
                </div>
                <div className='mb-2'>
                    Email: sudoaptrana2025@gmail.com
                </div>
                <div className="flex">
                    <Link href="https://www.linkedin.com/in/sudoaptrana2025/">
                    <div className=" flex items-center mr-2">

                        <div className='mr-2'>
                            <LinkedInIcon />
                        </div>
                        <div>
                            LinkedIn
                        </div>
                    </div>
                    </Link>
                    <Link href="https://github.com/geekaryan"> 
                    <div className=" flex items-center mr-2">
                        <div className='mr-2'>
                           <GitHubIcon />
                        </div>
                        <div>
                            Github
                        </div>
                    </div>
                    </Link>
                    <div className=" flex items-center mr-2">
                        <div className='mr-2'>
                           <PhoneAndroidIcon />
                        </div>
                        <div>
                            8219345280
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Layer2;