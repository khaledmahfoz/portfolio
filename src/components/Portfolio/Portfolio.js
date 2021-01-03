import React, {useState, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import mixItUp from 'mixitup';

import classes from './Portfolio.module.scss';

import viewSM from '../../images/view/view_sm.png';

import {values} from '../../utils/polyfill_Object';
import projectsData from '../../utils/projects.json';

import Section from '../Section/Section';
import Container from '../UI/Container/Container';

const Portfolio = () => {
   values();
   const myRef = useRef();
   const warningRef = useRef();
   const history = useHistory();

   const navigateHandler = (id) => {
      history.push(`/portfolio/${id}`);
   }

   const catageories = ['all', 'reactjs', 'frontend', 'fullstack', 'nextjs', 'react native'];

   const [catageoryState, setCatageoryState] = useState('all');

   useEffect(() => {
      mixItUp(myRef.current, {
         animation: {
            duration: 300,
            nudge: true,
            effects: "fade scale(0.01) translateZ(-100px)",
            clampHeight: window.matchMedia('(min-width: 768px)').matches ? false : true,
         },
         callbacks: {
            onMixEnd: function (state) {
               if (state.hasFailed) {
                  warningRef.current.classList.add(classes.warningShow);
               }
               else {
                  warningRef.current.classList.remove(classes.warningShow);
               }
            }
         },
      });
   }, []);

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
            data-sort="order:asc"
         >
            {elem}
         </li>
      );
   });

   let projects = Object.values(projectsData).map(data => {
      return (
         <div onClick={navigateHandler.bind(this, data._id)}
            className={`${classes.project} ${data.techs.map(item => item).join(' ')} mix all`} key={data._id} data-order={data._id}>
            <div className={classes.overlay}>
               <div
                  className={classes.view}
               >
                  <img srcSet={viewSM} alt="view" />
               </div>
            </div>
            <div className={classes.img}>
               <img src={data.carousel[0]} alt={data.alt} />
            </div>
            <div className={classes.info}>
               <div>{data.name}</div>
               <p>{data.description}</p>
            </div>
         </div>

      )
   })


   return (
      <div>
         <Section>
            <h3>My Portfolio</h3>
            <p>Here are some of my work</p>
         </Section>
         <Container>
            <div className={classes.portfolio}>
               <div className={classes.portfolioController}>
                  <ul>{content}</ul>
               </div>
               <div
                  className={`${classes.warning} ${classes.warningHide}`}
                  ref={warningRef}
               >
                  stay tuned
                  </div>
               <div className={classes.projects} ref={myRef}>
                  {projects}
               </div>

            </div>
         </Container>
      </div>
   )
}

export default Portfolio;