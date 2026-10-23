'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Stack, Image } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-primary text-white p-4">
                    <Col className="mx-5">
                        <Stack>
                            <Image
                                src="/images/logo.png"
                                alt="Slam.com logo"
                                rounded
                                width={150}
                                height={150}
                            />
                            <h2>Slam.com</h2>
                            <p>Drop hard</p>
                        </Stack>
                    </Col>
                    <Col>
                        <nav className="flex-column fs-5">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link href="/" className="text-white">Home</Link></li>
                                <li><Link href="/about" className="text-white">About</Link></li>
                                <li><Link href="/products" className="text-white">Products</Link></li>
                                <li><Link href="/help" className="text-white">Help Us</Link></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col>
                        <h3>Contact the Developer!</h3>
                        <p>aydexter05@gmail.com</p>
                        <p>Phone: +44 7939-401-982</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;