import NavLink from "./NavLink";

function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full shadow-md z-50 p-4 text-center">
                <div className="w-fit px-20 py-2 text-xl rounded-2xl bg-black text-white fixed top-15 left-20">
                    <ul className="flex ease-linear ">
                        <NavLink link="/" nav_link_text="HOME"></NavLink>
                        <NavLink link="/diagnosis" nav_link_text="バイクを見つける"></NavLink>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;