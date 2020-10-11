import React from 'react'

const button = props => {
   return (
      <button className={props.styles} disabled={!props.isEnabled}>
         {props.children}
      </button>
   )
}

export default button