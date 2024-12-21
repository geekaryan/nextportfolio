import Link from "next/link";

const Footer = () =>{
    return(
    <div className="lg:flex justify-between mb-2 font-serif hidden">
        <div className="ml-6">
            <div className="text-3xl font-semibold mb-3">
                Contact
            </div>
            <div>
                sudoaptrana2025@gmail.com
            </div>
        </div>
        <div className="flex mr-4">
            <div className="mr-4">
                <div className="mb-2">
                I'm software engineer
                </div>
                <div className="mb-2">
                   <a href="#moveT"> About Me </a>
                </div>
                <div className="mb-2">
                   <Link href="https://www.linkedin.com/in/sudoaptrana2025/"> LinkedIn </Link>
                </div>
                <div className="mb-2">
                    Contact Me
                </div>
                <div className="mb-2">
                 <Link href="https://medium.com/@sudoaptrana2025"> Blog </Link>
                </div>
                
            </div>
            <div className="mr-4">
                <div className="mb-2">
                Follow Me
                </div>
                <div className="mb-2">
                    <Link href="https://github.com/geekaryan">Github</Link>
                </div>
                <div className="mb-2">
                <Link href="https://www.linkedin.com/in/sudoaptrana2025/"> LinkedIn </Link>
                </div> 
            </div>
            <div className="mr-4">
                <div className="mb-2">
                Coding Profiles
                </div>
                <div className="mb-2">
                  <Link href="https://leetcode.com/re_cur_sion/"> Leetcode</Link> 
                </div>
                <div className="mb-2">
                    <Link href="https://codeforces.com/profile/su_D_oaptrana7">CodeForces</Link>
                </div>
                <div className="mb-2">
                    <Link href="https://www.codechef.com/users/su_doaptrana07">CodeChef</Link>
                </div>
                
            </div>
        </div>

    </div>
    )
}

export default Footer;