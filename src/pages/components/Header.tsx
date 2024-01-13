import { Link } from 'react-router-dom'
import logo from '../../assets/blade-high-resolution-logo-black-removebg-preview.png'
import { DatePicker, Space } from 'antd'
import { useEffect, useState } from 'react';

export default function Header() {
  const { RangePicker } = DatePicker;
  const [ searchActive , setSearchActive ] = useState("null")
  useEffect(()=>{
    document.querySelectorAll(`.inputField`)?.forEach((element)=>{element.classList.remove("active")})
    document.querySelector(`.${searchActive ? searchActive : "null"}`)?.classList.add("active")
  },[searchActive])

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
        <div className={searchActive != "" ? "searchField active" : "seachField"}>
          <div onClick={()=>{setSearchActive('location')}} className={searchActive == 'location' ? 'inputField location active' : 'inputField location'}>
            <label htmlFor="">Location</label>
            <input placeholder='Enter Location' type="text" />
          </div>
          <div onClick={()=>{setSearchActive('dateRange')}} className={searchActive == 'dateRange' ? 'inputField dateRange active' : 'inputField dateRange'}>
            <Space style={{display:"flex",justifyContent:"center" , width:"100%"}} direction="vertical" size={1}>
              <label htmlFor="">Date Range</label>
              <RangePicker style={{padding:"0px"}} bordered={false}/>
            </Space>
          </div>
          <div onClick={()=>{setSearchActive('paxes')}} className={searchActive == 'paxes' ? 'inputField paxes active' : 'inputField paxes'}>
            <label htmlFor="">Paxes</label>
            <input placeholder='Enter pax' type="text" />
          </div>
          <button>Search</button>
        </div>
      </section>
    </div>
  )
}
