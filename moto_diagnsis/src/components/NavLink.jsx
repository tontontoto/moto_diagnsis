function NavLink(props) {
    return (
        <>
            <li className="mr-10 my-1 relative mx-12 px-1 text-white text-lg font-bold italic list-none after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
                <a href={props.link}>{props.nav_link_text}</a>
            </li>
        </>
    )
}

export default NavLink