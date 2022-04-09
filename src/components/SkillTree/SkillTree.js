import React from 'react';

import classes from './SkillTree.module.scss';

import SkillItem from '../SkillItem/SkillItem';

const SkillTree = props => {
   return (
      <section id={classes.cd_timeline} className={classes.cd_container}>
         {props.data.map((skill, i) => {
            return (
               <SkillItem key={i} skill={skill} />
            );
         })}
      </section>
   )
}


export default SkillTree;