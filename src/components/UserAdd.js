import { Modal, ModalHeader, ModalBody, Row } from "reactstrap";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"

export default function UserAdd() {
    const BASE_URL = process.env.REACT_APP_API_BASE_URL
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        address: "",
        email: ""
    });

    let handleSubmit = (e) => {
    
        try {
            e.preventDefault();        
            console.log(e)
            
            // let res = axios.post(BASE_URL + "/add", userData)

            // if (res.status === 200) {
            //     setUserData({})
            // } else {
            //     console.log("Error occured while submitting")
            // }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Modal
                size="lg"
                isOpen={isModalOpen}
                toggle={() => setIsModalOpen(!isModalOpen)}>

                <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
                    Add user
                </ModalHeader>

                <ModalBody>
                    <Form onSubmit={handleSubmit()}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

            <button className="btn mt-3" onClick={() => setIsModalOpen(true)}>
                Open
            </button>
        </div>

    );

    function submitForm(event) {
        console.log(event);
    }

}