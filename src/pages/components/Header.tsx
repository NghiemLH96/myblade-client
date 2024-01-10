import logo from '../../assets/blade-high-resolution-logo-black-removebg-preview.png'

export default function Header() {
  return (
    <div className='pageHeader'>
      <div className="header-L">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="header-M">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Account</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className="header-R">
        <div className='cartBox'>
          <span className="material-symbols-outlined cartIcon">
            shopping_cart
          </span>
        </div>
        <div className='accountBox'>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
