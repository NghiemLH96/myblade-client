import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import './home.scss'

export default function Home() {
  return (
    <div onClick={()=>{
      let searchNodeList = document.querySelectorAll(".inputField");
      searchNodeList.forEach(element=>{
        if (element.classList) {
          element.classList.remove("active")
          element.classList.remove("inactive")
        }
      })
    }}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
