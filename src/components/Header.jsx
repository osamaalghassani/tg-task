import React from 'react'
import "./header.css";
function Header() {
  return (
    <header>
    <div className='logo'>
     <img src="images/LOGO.svg"/>
    </div>
    <div className="nav">

     <ul>
   <li><a>الصفحة الرئيسية</a></li>
   <li><a>من نحن </a></li>
   <li><a> ماذا نقدم </a></li>
   <li><a>  المسارات </a></li>
   <li><a>  أعمالنا </a></li>
   <li><a>  فريقنا </a></li>
     </ul>
    </div>
    <button className='btn'>انضم لنا</button>
    </header>
      )
}

export default Header