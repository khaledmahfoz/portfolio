import React from 'react';

const FormInput = props => {
   switch (props.type) {
      case 'input':
         return <input
            {...props.configs}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.checkValidity}
         />

      case 'textarea':
         return <textarea
            {...props.configs}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.checkValidity}
         />

      default:
         return <input
            {...props.configs}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.checkValidity}
         />
   }
}

export default FormInput;