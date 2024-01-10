import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/blade-high-resolution-logo-black-removebg-preview.png'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='pageHeader'>
      <div className="header-L">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="header-M">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/account"}>Account</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className="header-R">
        <div className='cartBox'>
          <span className="material-symbols-outlined cartIcon">
            shopping_cart
          </span>
        </div>
        <div className='accountBox'>
          <button onClick={()=>{navigate("/login")}}>Sign In</button>
          <button onClick={()=>{navigate("/register")}}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
