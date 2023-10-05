import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Components/Comp.css"

export function Login() {

    const [input,setInput] = useState({
      
        email:"",
        pswd:""
    })

    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();

       const info = JSON.parse(localStorage.getItem('users'))
       if(info.email===input.email && info.pswd===input.pswd){
        navigate('/news')
       }else{
        alert('Invalid Credentails')
       }
       
        
    }
    return (
        <>
        <h3 className='heading'>Login Page</h3>
        <div>
            

            <form onSubmit={handleSubmit}>
                <div className='main-container'>
                    <div className='container'>
                        <div className='card shadow bg-ingo'>
                            <div className='card-body bg-warnig'>
                                <div className='row  py-2'>
                                  
                                 

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

                                    <button type='submit' className='btn btn-danger shadow mb-2 p-2'>Login</button>
                        <span><p>Not Yet Registered? <Link to='/' className='btn btn-primary shadow p-2'>Register</Link></p></span>
                                </div>

                           
                            </div>

                        </div>
                    </div>
            </form>

            
        </div>
        </>
    )
}