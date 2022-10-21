import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Authcontext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {
  const { login } = useContext(Authcontext);
  const googleAuthProvider = new GoogleAuthProvider();


  const handleGoogleSignin = () => {
    login(googleAuthProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error =>{
        console.log("Error",error)
      })
  }

  return (
    <div className=''>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignin} className='mb-3 px-5' variant="outline-primary">
          <FaGoogle></FaGoogle>  Log in with Google</Button>
        <Button variant="outline-dark"><FaGithub></FaGithub>  Log in with GitHub</Button>
      </ButtonGroup>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className='mb-4'> <FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-4'><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item className='mb-4'><FaWhatsapp /> Whatsapp</ListGroup.Item>
          <ListGroup.Item className='mb-4'><FaGithub />  GitHub</ListGroup.Item>
          <ListGroup.Item className='mb-4'><FaTwitch /> Twitch</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://digivizer.com/wp-content/uploads/2021/11/Digi-Carousel-BlogHeader.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.socialmediacollege.com/wp-content/uploads/5-Creative-Ways-to-Use-Facebooks-Carousel-Ads-1024x512.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;