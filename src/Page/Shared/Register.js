import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Authcontext } from '../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Register = () => {

  const { register, updateUserProfile, verifyEmail } = useContext(Authcontext);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    register(email, password)
      .then(result => {
        toast.success("Check your email,if needed go on spam folder",
          {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true })
        handleUpdateProfile(name,photoUrl);
        handleEmailVerification();
        
      })
      .catch(error => {
        toast.error("Register Error",
          {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        console.log(error)
      })
    form.reset();
    console.log(name, email, password);
  }
  const handleUpdateProfile = (name,photoUrl) => {
    const profile = { displayName: name,photoURL: photoUrl }
    updateUserProfile(profile)
      .then(() => { })
      .catch(error => { console.log(error) })
  }
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => { })
      .catch(error => { console.log(error) })
  }
  const handleCheckBox = (event) => {
    setAccepted(event.target.checked);
  }
  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter your full-name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control name="photoUrl" type="text" placeholder="Place your photo url here.." />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleCheckBox}
          label={<>Accept
            <Link className='textDecoration-none'> terms and condition</Link>
          </>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
      <ToastContainer position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </Form>
  );
};

export default Register;