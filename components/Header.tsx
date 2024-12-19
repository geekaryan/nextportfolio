const Header = () => {
    return(
        <div className="flex justify-between items-center mb-5 mt-5">
          <div className="ml-6 font-bold text-3xl">
            Aryan Rana
          </div>
          <div className="flex">
            <div className="mr-8">
                Education
            </div>
            <div className="mr-8">
                Work Experience
            </div>
            <div className="mr-8">
                Projects
            </div>
            <div className="mr-8">
                Certifications
            </div>
            <div className="mr-8">
                <button>View Projects</button>
            </div>
          </div>
        </div>
    )
}

export default Header;