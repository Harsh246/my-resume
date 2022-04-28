import React from 'react';
import { useState } from 'react';
import '../styles/projects.css';
import picCharades from '../media/pic-charades.gif';
import task from '../media/task.gif';
import poke from '../media/poke.gif';
import resume from '../media/resume.gif';

export default function Projects() {

  const [projects] = useState([
    {
      title: 'PokeApi',
      image: poke,
      url:'https://github.com/Harsh246/my-poke'
    },
    {
      title: 'Task Manager',
      image: task,
      url:'https://github.com/Harsh246/todo-app2'
    },
    
    {
      title: 'Pic-Charades',
      image: picCharades,
      url:'https://github.com/Harsh246/pic-charades'
    },
    {
      title: 'Resume Builder',
      image: resume,
      url:'https://github.com/Harsh246/resume-builder'
    }

     
  ]);

  return (
    <div id="projects">
      <div id="project__container">

        {
          projects.map((item) => 
            <article className="project__article">
              <img src={item.image} alt="project"/>
              <footer className="project__article__footer"><a href={item.url} rel="noreferrer" target="_blank">
                {item.title} <img src="https://img.icons8.com/color-glass/30/000000/link.png" alt="icon"/></a>
              </footer>
            </article>
          )
        }

      </div>
    </div>
  )
}
