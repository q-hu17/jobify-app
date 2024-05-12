import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby blue bottle polaroid bushwick asymmetrical, craft beer artisan pabst direct trade jean shorts. Retro grailed actually beard small batch cliche bodega boys gorpcore heirloom air plant keytar. Trust fund solarpunk intelligentsia cornhole tote bag put a bird on it shoreditch fit brunch. 3 wolf moon quinoa whatever skateboard shabby chic typewriter squid, thundercats sartorial austin.
          </p>
          <Link to='register' className='btn register-link'>
            Register
          </Link>
          <Link to='login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  )
}



export default Landing