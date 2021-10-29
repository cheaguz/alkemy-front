import React from 'react'
import { TextField   , Button , Container , Paper  } from '@mui/material';
import styled from 'styled-components';
import useRegister from '../Hooks/useRegister'

const avatar = 'assets/avatar.png'



const RegisterComponent = () => {
    const [formik ] = useRegister();
    return(
        <Container maxWidth="sm" style={{padding : "10%"}}>  
            <StyledTitle> Registro </StyledTitle>
            <Paper style={{padding : "5%"}}>

                <StyledDivImg>
                    <StyledImg src={avatar} alt="avatar" /> 
                </StyledDivImg>

                <StyledForm onSubmit={formik.handleSubmit} >

                    <TextField 
                        id="mail"
                        label="Mail"
                        variant="outlined"
                        fullWidth
                        placeholder="mail@example.com"
                        style={{marginTop : "1%" , marginBottom : "2%"}}
                        onChange={formik.handleChange}
                        value={formik.values.mail}
                        type="mail"
                        required
                       
                    />

                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        placeholder="********"
                        style={{marginTop : "1%" , marginBottom : "2%"}}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                        required
                    /> 

                    <Button color="primary" variant="contained" type="submit" > Registro</Button>
                </StyledForm>
            </Paper>    
        </Container>
    );
};
export default RegisterComponent


const StyledForm = styled.form`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img`
width : 100px;
height : 100px
`;

const StyledDivImg = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
`;

const StyledTitle = styled.h1`
text-align : center;
`