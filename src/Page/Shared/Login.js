import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
const Login = () => {
  const { signIn, setLoading } = useContext(Authcontext);
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true })
        }
        else {
          toast.error("Vai age email verify kor")
        }
      })
      .catch(error => {
        console.log(error)
        setError(error?.message);
      })
      .finally(() => {setLoading(false)})
    form.reset();
    console.log(email, password)
  }
  return (
    <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-danger">
        {error}
      </Form.Text><br />
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default Login;