import React from 'react';

import classes from '../SkillTree/SkillTree.module.scss';

const SkillItem = (props) => {
   return (
      <div className={classes.cd_timeline_block}>
         <div className={classes.cd_timeline_img}></div>
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
   )
}

export default SkillItem;