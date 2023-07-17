import React, { useEffect, useState } from 'react'
// import './L'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import Myntra from '../../image/Myntra-main.png'

// import linkedInLogo from '../Images/linkedin-logo.png';


const Signup = () => {
    const initialData = {
        email: '',
        name: '',
        password: ''
    }
    const [status, setStatus] = useState(false);
    const [formdata, setFormdata] = useState(initialData)
    const navigate = useNavigate()

    console.log('email...', formdata.email, 'name', formdata.name, 'password...', formdata.password)
    const updateFn = (e) => {
        console.log('signup data ....', e.target.name, 'value - ', e.target.value)
        let obj = {}
        obj[e.target.name] = e.target.value
        setFormdata({ ...formdata, ...obj })
    }

    const signupFn = () => {
        let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let passwordPatern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

        if (!formdata.name || !formdata.password) {
            return alert("All the input must be filled.......")

        } else if (!formdata.email.match(emailPattern)) {
            alert('Please use a valid email id.......')
        }
        else if (!formdata.password.match(passwordPatern)) {
            alert('Password must be strong.......')
        }
        else {
            setStatus(true)
            alert('Registered Successfully.............')
            let temp = JSON.parse(localStorage.getItem('users')) || []
            localStorage.setItem('users', JSON.stringify([...temp, formdata]))
            navigate('/login')
        }
        // useEffect(() => {
        //     let temp = JSON.parse(localStorage.getItem('users'))
        //     console.log(temp)
        // }, [status])
    }
    return (
        <div>
            <div className='signup_maindiv '>
                <div className='signup_main '>
                    <div className='signup_logo'>
                        <img className='loginpage__logo ' src={Myntra} width='100px' />
                    </div>
                    {/* <div className='signInHead'>Sign in</div> */}

                    <div className='signup_firsttext'>
                    <p className='stayUpdated'> Get The Best Of Fashion Only On Myntra</p><br />
                    </div>
                    <div className='signup_input'>
                        <input type='text' name='email' className='loginpage__text' onChange={updateFn} placeholder='Email' /><br />
                        <input type='text' name='name' className='loginpage__text' onChange={updateFn} placeholder='Name' /><br />
                        <input type='password' name='password' className='loginpage__text' onChange={updateFn} placeholder='eg. Abcd1234@' /><br />
                    </div>
                    <div className='signup_info'>
                        By signing up, you agree to our Terms , Privacy Policy and Cookies Policy
                    </div>
                    <button className='login__button' onClick={signupFn}>Sign up</button>
                </div>
            </div>
            <div className='loginpage__loginUpDiv'>
                <div className='loginpage_login'>Have an account?<Link to='/'>Log In</Link></div>
            </div>
        </div>
    )
}

export default Signup