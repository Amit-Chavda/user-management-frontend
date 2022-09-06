import React, { useState } from 'react';
import axios from "axios"
import ErrroModal from "./ErrorModal";
import AddUserModal from "./AddUserModal";

export default function CreateUser() {
    const BASE_URL = process.env.REACT_APP_API_BASE_URL
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isErrorModal, setIsErrorModal] = useState(false);

    const [errorObject, setErrorObject] = useState({
        statusCode: "",
        title: "",
        message: "",
        timestamp: ""
    });

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        address: "",
        email: ""
    });

    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post(BASE_URL + "/add", userData)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    setUserData({})
                } else {
                    console.log("Error occured while submitting")
                }
            }).catch((err) => {
                let data = err.response.data
                setErrorObject({
                    statusCode: data.status,
                    title: data.error,
                    message: data.message,
                    timestamp: data.timestamp
                });
                setIsErrorModal(true)

            });
    };

    let handleChange = (e) => {
        const { name, value } = e.target
        setUserData(prevUserData => {
            return {
                ...prevUserData,
                [name]: value
            }
        })
    };


    return (
        <div>
            <ErrroModal
                isErrorModal={isErrorModal}
                errorObject={errorObject}
                onClickHide={() => setIsErrorModal(!isErrorModal)} />

            <AddUserModal
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isModalOpen={isModalOpen}
                handleToggle={() => setIsModalOpen(!isModalOpen)} />

            <button
                style={{ margin: '0 0  10px auto' }}
                className="btn mt-3 btn-primary"
                onClick={() => setIsModalOpen(true)}>
                Create User
            </button>
        </div>

    );
}