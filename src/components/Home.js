import React from 'react';
import '../styles/home.css';
import { useState, useEffect, useRef } from 'react';


export default function Home() {

  let myRef = useRef();
  let mycursor = useRef();

  const [name] = useState("HARSH MALHOTRA");
var i = 0;
  function typeWriter() {
    console.log(name.length);
      if (i < name.length) {
        myRef.current.innerHTML += name.charAt(i);
        console.log(myRef.current.innerHTML);
        i++;
        setTimeout(typeWriter, 200);
    }
    //   else {
    //     mycursor.current.innerHTML += '_';
    // }
    }

  useEffect(() => {
    console.log(myRef.current.innerHTML);
    typeWriter();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="home" className='flex__row__center'>
      <div className='flex__column__center' id="home__left">
        <div id="home__intro">
          <div>Hi I'm</div>
          <div id="home__intro__name" ><span ref={myRef}></span ><span ref={mycursor} id="cursor">_</span></div>
          <div id="home__intro__last">A Full Stack Developer</div>
        </div>

      </div>
      <div className='flex__column__center' id="home__right">
      <img src="https://xtrapunch.com/wp-content/uploads/2019/03/xtrapunch-development.svg" alt="home"/>
      </div>
    
    </div>
  )
}
