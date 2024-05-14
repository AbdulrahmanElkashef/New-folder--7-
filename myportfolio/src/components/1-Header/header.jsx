import React, { useState } from 'react';
import './header.css';

 function Header() {
  const [showModel, setshowModel] = useState(false);
  return (
    <header className='flex'>
      <button onClick={() => {setshowModel(true) }} className='menu icon-menu flex' />

      <div />
      <nav>
        <ul className='flex'>
          <li><a href='#About'>About</a></li>
          <li><a href='#Articles'>Articles</a></li>
          <li><a href='#Project'>Project</a></li>
          <li><a href='#Speaking'>Speaking</a></li>
          <li><a href='#Contact'>Contact</a></li>
        </ul>
      </nav>

      <button className='mode flex'>
        <span className='icon-moon-o'></span>
      </button>
   {showModel && (
    <div className='fixed'>
       
       <ul className='model'>
         <li>
         <button className='icon-clear' onClick={() => {
          setshowModel(false)
         }}></button>
         </li>
         <li><a href='#About'>About</a></li>
         <li><a href='#Articles'>Articles</a></li>
         <li><a href='#Project'>Project</a></li>
         <li><a href='#Speaking'>Speaking</a></li>
         <li><a href='#Uses'>Uses</a></li>
       </ul>
       </div>
   )}

    </header>
  )
}
export default Header;