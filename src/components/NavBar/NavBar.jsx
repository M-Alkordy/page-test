
function NavBar() {
    return (
        <nav className="flex items-center justify-between px-18 h-[90px]">
            <img src="/assets/img/logo.png" alt="" />
            <ul className="gap-7.5 hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>New Property</li>
                <li>Contact</li>
            </ul>
            <button className="w-[135px] h-[38px] bg-myprimary text-white rounded-md hidden md:block">login</button>
            <button className="md:hidden"><img src="/assets/img/bars.svg" alt="" /></button>
        </nav>
    )
}

export default NavBar
