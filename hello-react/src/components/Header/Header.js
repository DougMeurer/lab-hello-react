import head1 from "../../images/ironhack-logo-xs.png"
import head2 from "../../images/menu-top-xs.png"

function HeaderMain () {

    return (
        <>
        <nav className="navigator">
        <img src={head1} alt="Ironhack Logo" />
        <img src={head2} alt="Dropdown Menu" />
        </nav>

        
      </>
    )
}


export default HeaderMain