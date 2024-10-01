
interface NavMenuProps {
    productNav: string,
    alertFunction: number;
}

const NavMenu = (a: NavMenuProps) => {
    const alertButton = () => {
        alert(a.alertFunction);
    }
    
    return (
        <button
            style={{
                background: "orange",
                border: "1px solid #000"
            }}
            onClick={alertButton}
        >
            {a.productNav}
        </button>
    )
}

export default NavMenu;