import Image from 'next/image';


const Layer2 = () =>{
    return(
        <div className="bg-bcport-img  pb-20 pt-10 text-white  relative">
            <div>
               <Image
               src="/profile.png"
               alt="img"
               height={300}
               width={250}
               className='absolute top-6 left-8'
               />
            </div>
            <div className="flex justify-center">
                <div>
                <div>
                    Contact Me
                </div>
                <div>
                    Email: sudoaptrana2025@gmail.com
                </div>
                <div className="flex">
                    <div className="mr-2">
                        LinkedIn
                    </div>
                    <div className="mr-2">
                        Github
                    </div>
                    <div className="mr-2">
                        Phone Number
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Layer2;