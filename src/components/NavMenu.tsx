
interface NavMenuProps {
    productNav: string
}

const NavMenu = (props: NavMenuProps) => {
    return (
        <button
            style={{
                background: "orange",
                border: "1px solid #000"
            }}
        >
            {props.productNav}
        </button>
    )
}

export default NavMenu;