import React, {useState, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import mixItUp from 'mixitup';

import classes from './Portfolio.module.scss';

import view from '../../images/view.png';

import projectsData from '../../utils/projects.json';

import Section from '../Section/Section';
import Container from '../UI/Container/Container';

const Portfolio = () => {
   const myRef = useRef();
   useEffect(() => {
      console.log(myRef)
      const mixer = mixItUp(myRef.current, {
         animation: {
            effects: 'scale(0.1)'
         },
         animation: {
            duration: 250
         }
      });
   }, [])
   const history = useHistory();

   const navigateHandler = (id) => {
      history.push(`/portfolio/${id}`);
   }

   const catageories = ['all', 'static', 'js', 'sass', 'bootstrap', 'nodejs', 'express', 'mongodb', 'reactjs', 'react native'];

   const [catageoryState, setCatageoryState] = useState('all');

   const changeCatageory = (elem) => {
      setCatageoryState(elem);
   }

   const content = catageories.map(elem => {
      return (
         <li
            key={elem}
            className={`${classes.ButtonCustom} ${catageoryState === elem ? classes.ButtonBlueprintEffect : ''} filter`}
            onClick={() => changeCatageory(elem)}
            data-filter={`.${elem}`}
         >
            {elem}
         </li>
      );
   })

   let projects = Object.entries(projectsData).map(([key, data]) => {
      return (
         <div className={`${classes.project} ${data.techs.map(item => item).join(' ')} mix`} key={data._id}>
            <div className={classes.overlay}>
               <div
                  className={classes.view}
                  onClick={navigateHandler.bind(this, data._id)}
               >
                  <img src={view} alt="view" />
               </div>
            </div>
            <div className={classes.img} style={{backgroundImage: `url(${data.carousel[0]})`}}></div>
            <div className={classes.info}>
               <div>{data.name}</div>
               <p>{data.description}</p>
            </div>
         </div>
      )
   })


   return (
      <>
         <Section>
            <h3>My Portfolio</h3>
            <p>Here are some of my work</p>
         </Section>
         <Container>
            <div className={classes.portfolio}>
               <div className={classes.portfolioController}>
                  <ul>{content}</ul>
               </div>
               <div className={classes.projects} ref={myRef}>
                  {projects}
               </div>
            </div>
         </Container>
      </>
   )
}

export default Portfolio;