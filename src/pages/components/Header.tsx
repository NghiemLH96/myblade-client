import { Link } from 'react-router-dom'
import logo from '../../assets/blade-high-resolution-logo-black-removebg-preview.png'

export default function Header() {
  return (
    <div className='pageHeader'>
      <section className='header_T'>
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
          <div className='accountBox'>
            <div className='menuBox'>
              <span className="material-symbols-outlined menuIcon">
                menu
              </span>
              <img className='userAvatar' src="https://vieclam.vimaru.edu.vn/assets/uploads/no_avatar.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='header-B'>
        <div className='searchField'>
          <div className='inputField location'>
            <label htmlFor="">Location</label>
            <input type="text" />
          </div>
          <div className='inputField checkIn'>
            <label htmlFor="">Check In</label>
            <input type="text" />
          </div>
          <div className='inputField checkOut'>
            <label htmlFor="">Check Out</label>
            <input type="text" />
          </div>
          <div className='inputField Paxes'>
            <label htmlFor="">Paxes</label>
            <input type="text" />
          </div>
          <button>Search</button>
        </div>
      </section>
    </div>
  )
}
