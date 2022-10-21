import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import Header from '../Page/Shared/Header';
import LeftSideNav from '../Page/Shared/Left-Side/Left-side-nav';
import RightSideNav from '../Page/Shared/Right-side/Right-side-nav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
                <Row className='mt-5'>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;