import React from 'react';
import '../styles/about.css';
import harsh from '../media/harsh.JPG';
import html from '../media/html.png';
import javascript from '../media/javascript.svg';
import css from '../media/css.png';
import react from '../media/react.png';



export default function About() {
  return (
    <div id="about" className='flex__row__center'>
      <section id="about__container">
        <article className='about__article flex__row__center'>
          <img src={harsh} alt="harsh" />
        </article>
        <div className='article__divider  '></div>
        <article className='about__article intro flex__row__center'>
        <p>Pursuing BE in Computer Science, and working towards my degree with full stack development specialization.<br/><br/> Looking for an opportunity to begin my career in the field where I can grow and learn from other experienced team members.</p>
        </article>
        <div className='article__divider'></div>
        <article className='about__article flex__row__center'>
          <div ><b>&nbsp; THINGS I LOVE &nbsp;</b><hr/></div>
          
          <div className="article__image__container">
          <img src={css } alt='css' />
          <img src={ javascript} alt='javascript' />
          <img src={ react} alt='react' />
          <img src={html } alt='html' />
            

          </div>
        </article>
      </section>
    </div>
  )
}
