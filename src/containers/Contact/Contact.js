import React, {useState} from 'react';

import classes from './Contact.module.scss';

import {entries, values} from '../../utils/polyfill_Object';

import Container from '../../components/UI/Container/Container';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/UI/Button/Button';
import Section from '../../components/Section/Section';

const Contact = () => {
   values();
   entries();
   const formElemsObj = {
      name: {
         label: 'Please enter your name',
         value: '',
         valid: false,
         errMessage: '',
         configs: {
            type: 'text',
            name: 'name',
            autoComplete: 'on',
            id: 'name'
         },
         validationConfigs: {
            notEmpty: {
               value: true,
               message: 'please enter a valid name'
            }
         }
      },
      email: {
         label: 'Please enter your email',
         value: '',
         valid: false,
         errMessage: '',
         configs: {
            type: 'email',
            name: 'email',
            autoComplete: 'on',
            id: 'email'
         },
         validationConfigs: {
            isEmail: {
               value: true,
               message: 'please enter a valid email'
            }
         }
      },
      message: {
         label: 'Please enter your message',
         value: '',
         valid: false,
         errMessage: '',
         configs: {
            name: 'message',
            type: 'textarea',
            id: 'message'
         },
         validationConfigs: {
            notEmpty: {
               value: true,
               message: 'please enter your message'
            }
         }
      }
   };


   const [formElems, formElemsHandler] = useState(formElemsObj);
   const [formValidity, formValidityHandler] = useState(false);

   const validationConfigs = (value, configs) => {
      let isValid = true;
      let message = '';
      if (configs.notEmpty) {
         isValid = value !== '' && isValid;
         message = configs.notEmpty.message;
         return {
            isValid: isValid,
            message: message
         };
      }

      if (configs.isEmail) {
         const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         isValid = emailRegex.test(value) && isValid;
         message = configs.isEmail.message;
         return {
            isValid: isValid,
            message: message
         };
      }

   }

   const encode = (data) => {
      return Object.keys(data)
         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
         .join("&");
   }


   const emptyFields = () => {
      const updatedState = {...formElems};
      Object.keys(updatedState).forEach(name => {
         const updatedField = {...updatedState[name]};
         updatedField.value = '';
         updatedState[name] = updatedField;
      });
      formElemsHandler(updatedState);
   }

   const submitHandler = (e) => {
      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact", name: formElems.name.value, email: formElems.email.value, message: formElems.message.value })
       })
         .then(() => {
            emptyFields();
            alert("Thank you");
         })
         .catch(error => {
            emptyFields();
            alert(error);
         });
      e.preventDefault();
   }

   const changeHandler = (e) => {
      const {name, value} = e.target;
      const updatedState = {...formElems};
      const updatedElem = {...formElems[name]};
      const {isValid, message} = validationConfigs(value, formElems[name].validationConfigs);
      updatedElem.value = value;
      updatedElem.valid = isValid;
      updatedElem.errMessage = message;
      updatedState[name] = updatedElem;
      let formValidityState = Object.values(updatedState).map(data => {
         return data.valid;
      })
      let checkValidity = formValidityState.filter(elem => !elem);
      formElemsHandler(updatedState);
      formValidityHandler(checkValidity.length <= 0)
   }

   const checkValidity = (e) => {
      const {name, value} = e.target;
      const updatedState = {...formElems};
      const updatedElem = {...formElems[name]};
      const {isValid, message} = validationConfigs(value, formElems[name].validationConfigs);
      updatedElem.valid = isValid;
      updatedElem.errMessage = message;
      updatedState[name] = updatedElem;
      formElemsHandler(updatedState);
   }

   let content;

   content = Object.entries(formElems).map(([key, data]) => {
      return (
         <div key={key} className={classes.formItem}>
            <label htmlFor={data.configs.id}>{data.label}</label>
            <FormInput
               type={data.configs.type}
               value={data.value}
               onChangeHandler={changeHandler}
               checkValidity={checkValidity}
               configs={data.configs}
            />
            {
               (!data.valid && data.errMessage)
                  ? <p className={classes.errMessage}>{data.errMessage}</p>
                  : null
            }
         </div>
      );
   });

   return (
      <div>
         <Section>
            <h3>Contact Me</h3>
            <p>contact me to build your project</p>
         </Section>
         <Container>
            <div className={classes.contact}>
               <div className={classes.contactForm}>
                  <form onSubmit={submitHandler}>
                     {/* <input type="hidden" name="form-name" value="contact" />   */}
                     {content}
                     <Button
                        configs={{type: 'submit'}}
                        isEnabled={formValidity}
                        styles={classes.Button}
                     >
                        Send Now
                     </Button>
                  </form>
               </div>
               <div className={classes.contactInfo}>
                  <div className={classes.contactInfoBody}>
                     <h3>Feel free to contact me</h3>
                     <ul>
                        <li>
                           <a href="http://github.com/khaledmahfoz" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/khaled-mahfoz-1b4b3a18b" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </li>
                        <li>
                           <a href="https://mail.google.com/mail/u/?authuser=khaledmahfoz20@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                        </li>
                        <li>
                           <a href="https://codepen.io/khaledMahfoz" target="_blank" rel="noopener noreferrer">Codepen</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Contact;