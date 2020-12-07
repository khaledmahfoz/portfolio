import React, {useEffect} from 'react';
import AOS from 'aos';

import classes from '../SkillTree/SkillTree.module.scss';
import "aos/dist/aos.css";

const SkillItem = (props) => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div className={classes.cd_timeline_block}>
         <div className={classes.cd_timeline_img}></div>
         <div data-aos="fade-up" data-aos-duration="300">
            <div className={classes.cd_timeline_content}>
               {
                  props.skill.images.map((img, i) => <img className={classes.cd_timeline_content_img} key={i} src={img} alt="skill" />)
               }
               <h2>{props.skill.title}</h2>
               {
                  props.skill.details.map((info, i) => <p key={i}>- {info}</p>)
               }
               {/* <div className={classes.timeline_content_info}></div> */}
            </div>
         </div>
      </div>
   )
}

export default SkillItem;