import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa'
import axios from 'axios';
import { Redirect } from '@reach/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

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
            url:"http://localhost:4000/api/users",
            data: formData,
        })
            .then(function (res) {
                // err
                console.log(res)
                toast("User was successfully created!")
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
            <ToastContainer />
        </div>
    );
}

export default Register;
