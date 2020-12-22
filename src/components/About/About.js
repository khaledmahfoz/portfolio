import React from 'react';

import skillsData from '../../utils/skills.js';

import author from '../../images/author.jpg';

import classes from './About.module.scss';

import Container from '../UI/Container/Container';
import Section from '../Section/Section';
import SkillTree from '../SkillTree/SkillTree';

const About = () => {
   return (
      <div>
         <Section>
            <h3>About Me</h3>
            <p>more about me and my skills</p>
         </Section>
         <Container>
            <div className={classes.About}>
               <div className={classes.First}>
                  <div className={classes.Img}>
                     <img src={author} alt="author" />
                  </div>
                  <div className={classes.Info}>
                     <p>My name is <i><u>khaled mahfoz</u></i>, from egypt and i'm a mern stack developer. i've been in the web development industry since 2016 fighting back to back with <span>js</span> alot of experience was gained and alot yet to come.</p>
                     <q>I hope that my code will be a good addition to the world</q>
                  </div>
               </div>
               <div className={classes.Final}>
                  {/* <div>Let's get to the skills</div> */}
                  <div className={classes.Skills}>
                     <SkillTree data={skillsData} />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default About;