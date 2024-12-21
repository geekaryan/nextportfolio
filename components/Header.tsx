import Link from "next/link";

const Header = () => {
    return(
        <div className="flex justify-between items-center mb-5 mt-5" id="strt">
          <div className="lg:ml-6 ml-[90px] font-bold lg:text-3xl text-4xl">
            Aryan Rana
          </div>
          <div className="lg:flex hidden ">
            <div className="mr-8 text-1xl font-serif">
               <a href="#strt">Education </a>
            </div>
            <div className="mr-8 text-1xl font-serif">
               <a href="#ep"> Work Experience </a>
            </div>
            <div className="mr-8 text-1xl font-serif">
                <Link href="https://drive.google.com/file/d/1pV7E8IU14TbeoDNf0yGrWl-e39nLxyE3/view?usp=sharing">Certifications</Link>
            </div>
            <div className="mr-8 text-1xl font-serif">
               <a href="#project1">View Projects</a>
            </div>
          </div>
        </div>
    )
}

export default Header;