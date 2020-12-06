import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import classes from './Portfolio.module.scss';

import view from '../../images/view.png';

import projectsData from '../../utils/projects.json';

import Section from '../Section/Section';
import Container from '../UI/Container/Container';

const Portfolio = () => {
   const history = useHistory();

   const navigateHandler = (id) => {
      history.push(`/portfolio/${id}`);
   }

   const catageories = ['all', 'static', 'SPA', 'multipage', 'full stack', 'SSR/SSG', 'react native'];

   const [catageoryState, setCatageoryState] = useState('all');

   const changeCatageory = (elem) => {
      setCatageoryState(elem);
   }

   let filteredProjects = {};

   Object.entries(projectsData).forEach(([key, data]) => {
      if (catageoryState === 'all') {
         filteredProjects[key] = data;
      } else {
         data.techs.forEach(elem => {
            if (elem === catageoryState) {
               filteredProjects[key] = data;
            }
         })
      }
   })


   const content = catageories.map(elem => {
      return (
         <li
            key={elem}
            className={`${classes.ButtonCustom} ${catageoryState === elem ? classes.ButtonBlueprintEffect : ''}`}
            onClick={() => changeCatageory(elem)}
         >
            {elem}
         </li>
      );
   })

   const isEmpty = (obj) => {
      for (var key in obj) {
         return obj.hasOwnProperty(key) && false;
      }
      return true;
   }

   let projects;

   if (isEmpty(filteredProjects)) {
      projects = <div>stay tuned</div>
   } else {
      projects = Object.entries(filteredProjects).map(([key, data]) => {
         return (
            <div className={classes.project} key={data._id}>
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
                  {/* <ul>
                     {data.techs.map(elem => <li key={elem}>{elem}</li>)}
                  </ul> */}
               </div>
            </div>
         )
      })
   }

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
               <div className={classes.projects}>
                  {projects}
               </div>
            </div>
         </Container>
      </>
   )
}

export default Portfolio;