import React, {useState} from 'react';

import classes from './Contact.module.scss';

import Container from '../../components/UI/Container/Container';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/UI/Button/Button';
import Section from '../../components/Section/Section';

const Contact = () => {
   const formElemsObj = {
      name: {
         label: 'Please enter your name',
         value: '',
         valid: false,
         errMessage: '',
         configs: {
            type: 'text',
            name: 'name',
            autoComplete: 'on'
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
            autoComplete: 'on'
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
            type: 'textarea'
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
            <label>{data.label}</label>
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
      <>
         <Section>
            <h3>Contact Me</h3>
            <p>contact me to build your project</p>
         </Section>
         <Container>
            <div className={classes.contact}>
               <div className={classes.contactForm}>
                  <form>
                     {content}
                     <Button
                        isEnabled={formValidity}
                        styles={classes.Button}
                     >
                        Send Now
                  </Button>
                  </form>
               </div>
               <div className={classes.contactInfo}>
                  <div className={classes.contactInfoBody}>
                     <h3>Feel free to contact me :-</h3>
                     <ul>
                        <li>
                           <a href="http://github.com/khaledmahfoz">Github</a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/khaled-mahfoz-1b4b3a18b">Linkedin</a>
                        </li>
                        <li>
                           <a href="https://mail.google.com/mail/u/?authuser=khaledmahfoz20@gmail.com">Email</a>
                        </li>
                        <li>
                           <a href="https://codepen.io/khaledMahfoz">Codepen</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
}

export default Contact;