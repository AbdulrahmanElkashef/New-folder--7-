import React, { useState } from 'react';
import './header.css';

 function Header() {
  const [showModel, setshowModel] = useState(false);
  return (
    <header className='flex'>
      <button onClick={() => {setshowModel(true) }} className='menu'>show model</button>

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

      <button>light</button>
   {showModel && (
    <div className='fixed'>
       
       <ul className='model'>
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
 // finsh the header coding 
export default Header;