import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { navigate } from 'gatsby';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const firstLogin = async () => {
        await axios({
            method: "post",
            url: "http://localhost:4000/api/users/login",
            data: formData,
        })
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios({
            method: "post",
            url: "http://localhost:4000/api/users/register",
            data: formData,
        })
            .then(function (res) {
                // err
                console.log(res)
                firstLogin()
                navigate("/")
                toast("User created successfully")
            })
            .catch(function (res) {
                // error
                console.log(res)
                toast("Invalid fields or User already exists")
            })
    }

    const { name, email, password, password2 } = formData

    return (
        <div>
            <section class='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section class='form'>
                <form onSubmit={onSubmit}>
                    <div class='form-group'>
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Enter your name'
                            onChange={onChange}
                        />
                    </div>
                    <div class='form-group'>
                        <input
                            type="text"
                            className="form-control"
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange}
                        />
                    </div>
                    <div class='form-group'>
                        <input
                            type="text"
                            className="form-control"
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange}
                        />
                    </div>
                    <div class='form-group'>
                        <input
                            type="text"
                            className="form-control"
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Confirm your password'
                            onChange={onChange}
                        />
                    </div>
                    <button type='submit' class='btn btn-block'>
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Register;
