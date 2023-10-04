import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { MDBBtn} from 'mdb-react-ui-kit';

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandelSubmit = (e) =>{
        e.preventDefault();
    }


    return (
        <Container>
            <form onSubmit={HandelSubmit}>
                <label>Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}
                    name="name" id="name" placeholder="full Name" />

                <label>email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}
                    type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                
                <label>password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>

            </form>

            <p>Already have an account?</p>
            <MDBBtn className="mb-4" type="submit" href="./Login">
                Login here.
            </MDBBtn>

            
        </Container>
    );
};
export default SignUp