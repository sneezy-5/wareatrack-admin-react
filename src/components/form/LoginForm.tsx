import { Box, Button, styled } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../styles/loginForm.scss'


//---------------------------------------------------------------------------------------------

const StyleInput = styled(Field)`
  color: #000000;
  background: none; 
  border: 1px solid rgb(30, 106, 228);
  border-radius: 10px; 
  width: 80%;
  height: 50px;
  &:hover {
    border: 2px solid rgb(3, 133, 202); /* Supprimé 'solid' et ajouté '2px' */
  }
  &:focus {
    outline: none;
  }
`;


const StyleFormError = styled(ErrorMessage)`
color: red;
font-size: 16px;
font-family: 'Roboto', sans-serif;
font-weight: 300;
`;

const buttonStyles = {
  background:"blue",
  width:100,
  color:'#fff',
  '&:hover': {
    backgroundColor: 'blue', 
    color: '#fff', 
  },
};

//---------------------------------------------------------------------------------------------
const validationSchema = Yup.object({
    password: Yup.string().required('Le mot de passe est requis'),
    email: Yup.string().email('Adresse e-mail non valide').required('L\'adresse e-mail est requise'),
  });

  const submit =()=>{
    console.log('form send success');
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const  LoginForm =()=> {
    return (
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        marginLeft:{
          xs:'1.2rem',
          sm:'0rem'
        }
       
       
    
      }}>
        <Formik
          initialValues={{
            username: '',
            password:''
          }}
          validationSchema={validationSchema}
          onSubmit={submit}
        >
          <Form style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              width: '100%',
              height: '200px',
             
              // background:'red'
          }}>
            
              {/* <Field type="email" id="email" name="email" className="input-form"/> */}
              <StyleInput type="email" id="email" name="email"/>
              <StyleFormError name="email" component="div" />
  
              {/* <Field type="password" id="password" name="password" /> */}
              <StyleInput type="password" id="password" name="password"/>
              <StyleFormError name="password" component="div" />
  
           
            <Button 
            sx={buttonStyles}
             type="submit">Login</Button>
          </Form>
        </Formik>
      </Box>
    );
  }
  
  export default LoginForm