import React from 'react';
import { Input , FormGroup , Button , Container} from '@material-ui/core';


export const LoginComponent = () =>{
    return(
        <Container >
            <div style={{marginLeft : "40%",marginRight : "40%",marginTop : "20%"}}> 
                <FormGroup >
                    <Input color="primary" name="Mail" placeholder="Mail"/>
                    <Input color="primary" name="Password" placeholder="Password"/> 
                    <Button color="primary"> Iniciar sesion </Button>
                </FormGroup>
            </div>
        </Container>
    );
};


