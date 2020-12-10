import React from 'react';
import {useParams} from 'react-router-dom';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import classes from './Project.module.scss';

import projectsData from '../../utils/projects.json';

import Section from '../../components/Section/Section';
import Container from '../../components/UI/Container/Container';

const Project = () => {
   let {id} = useParams();

   const [project] = Object.values(projectsData).filter(prj => {
      return prj._id === id;
   })

   SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

   const carouselArr = project.carousel.map((elem, i) => {
      return (
         <SwiperSlide key={i}>
            <div className={classes.Slide} style={{backgroundImage: `url(${elem})`}}>
               {/* <img src={elem} alt="" /> */}
            </div>
         </SwiperSlide>
      );
   })

   return (
      <Container>
         <div className={classes.Project}>
            <div className={classes.ProjectMain}>
               <div className={classes.Carousel}>
                  <Swiper
                     style={{height: '100%'}}
                     spaceBetween={0}
                     navigation
                     pagination={{clickable: true}}
                  >
                     {carouselArr}
                  </Swiper>
               </div>
               <div className={classes.Description}>
                  <div className={classes.DescriptionTitle}>Project Description:</div>
                  <p>{project.description}</p>
               </div>
            </div>
            <div className={classes.ProjectSide}>
               <Section>
                  <div className={classes.Title}>Techs. used in this project</div>
                  <div className={classes.Body}>
                     {
                        project.techs.map(tech => {
                           return (
                              <span key={tech} className={classes.ButtonCustom}>
                                 {tech}
                              </span>
                           );
                        })
                     }
                  </div>
               </Section>
               <Section>
                  <div className={classes.Title}>
                     code on github
                  </div>
                  <div className={classes.Body}>
                     {
                        Object.entries(project.source).map(([key, data]) => {
                           return (
                              <div className={classes.Link} key={key}>
                                 <div>{key}</div>
                                 <a className={classes.Demo} href={data}>{data}</a>
                              </div>
                           );
                        })
                     }
                  </div>
               </Section>
               <Section>
                  <div className={classes.Title}>
                     try it online
                  </div>
                  <div className={classes.Body}>
                     <a className={classes.Demo} href={project.demo}>{project.demo}</a>
                  </div>
               </Section>
            </div>
         </div>
      </Container>
   );
}

export default Project;