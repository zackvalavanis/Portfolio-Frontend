import './MainPage.css';
// import myImage from './IMG_3383.jpg';
import { AboutMe } from './AboutMe'
import { ProjectsPage } from './ProjectsPage'
import { Contact } from './Contact'
import { useEffect } from 'react'
import { Tech } from './Tech/Tech';

export function MainPage() {
    useEffect(() => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
          },
          opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
    }, []);

  return (
    <div>
    <section>
    <div className='main-page'>
    <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>
      <h1 className='my-name'><b>Hello,</b></h1>
      <h2 className='my-name2'><b>I&apos;m Zack Valavanis</b></h2>
      <div className='button-container'>
      <a className= 'button-about' href='#about'>
      <button>About Me</button>
      </a>
      <a className= 'button-projects' href='#projects'>
      <button>My Projects</button>
      </a>
      </div>
      <div className='left-section'>
        <img src="/Images/Valavanis_Zack_NBPW_Gradient_1x1.25.jpg" className="img-thumbnail"></img>
      </div> 

    </div>
    </section>
    <section id='technology'>
      <Tech></Tech>
    </section>
    <section id='projects'>
      <ProjectsPage/>
    </section>
    <section id='about'>
      <AboutMe></AboutMe>
    </section>
    <section id='contact'>
      <div className='container-contact'>
      <Contact />
      </div>
    </section>
    
    </div>

  );
}
