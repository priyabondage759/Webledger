import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Components/Comp.css"

export function Register() {

    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        pswd: ""
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        // to store values
        localStorage.setItem("users", JSON.stringify(input))
        navigate('/login')

    }
    return (
        <>
        <h3 className='heading'>Welcome to Registeristration</h3>
        <div>
            

            <form onSubmit={handleSubmit}>
                <div className='main-container'>
                    <div className='container'>
                        <div className='card shadow bg-ingo'>
                            <div className='card-body bg-warnig'>
                                <div className='row  py-2'>
                                    <div className='col-12'>
                                        <div className='form-group m-2'>
                                            <label className='label-form shadow'>First Name :  </label>
                                            <input className=' input-form text-form mx-2 form-control"' value={input.fname} onChange={(e) => setInput({ ...input, fname: e.target.value })} type='text' placeholder='First name Here..' />
                                        </div>


                                    </div>
                                    <div className='col-12'>
                                        <div className='form-group m-2'>
                                            <label className='label-form shadow'>Last Name :  </label>
                                            <input className='input-form mx-2 form-control"' value={input.lname}
                                                onChange={(e) => setInput({ ...input, lname: e.target.value })} type='text' placeholder='Last name Here..' />
                                        </div>
                                        </div>

                                        <div className='col-12'>
                                            <div className='form-group m-2'>
                                                <label className='label-form mx-2 shadow'>Email - ID :  </label>
                                                <input className='input-form mx-2 form-control"' value={input.email}
                                                    onChange={(e) => setInput({ ...input, email: e.target.value })} type='text' placeholder='abc@gmail.com...' />
                                            </div>



                                        </div>

                                        <div className='col-12'>
                                            <div className='form-group m-2'>
                                                <label className='label-form mx-2 shadow'>Password :  </label>
                                                <input className='input-form mx-2 form-control"' value={input.pswd}
                                                    onChange={(e) => setInput({ ...input, pswd: e.target.value })} type='password' placeholder='***' />
                                            </div>



                                        </div>
                                    </div>

                                    <button type='submit' className='btn btn-primary shadow mb-2 p-2'>Register</button>
                        <span><p>Already registered? <Link to='/login' className='btn btn-danger p-2'>Login</Link></p></span>
                                </div>

                           
                            </div>

                        </div>
                    </div>
            </form>

            
        </div>
        </>
    )
}
          