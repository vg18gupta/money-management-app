import React from 'react'
import {Link } from 'react-router-dom'

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: {}

    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
    }

    render(){
        let { name, password, confirmPassword, email, error} = this.state
        return (
            <div class='row'>
                <div className='col-md-6 offset-md-3'>
                    <h1 class='text-center display-4'>Register here</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <label htmlfor='name'> Name: </label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder="Enter your Name"
                                name='name'
                                id='name'
                                value={name}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlfor='email'> Email: </label>
                            <input
                                type="email"
                                className='form-control'
                                placeholder="Enter your Email"
                                name='email'
                                id='email'
                                value={email}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlfor='password'> Password: </label>
                            <input
                                type="password"
                                className='form-control'
                                placeholder="Enter your Password"
                                name='password'
                                id='password'
                                value={password}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlfor='confirmPassword'> Confirm Password: </label>
                            <input
                                type="password"
                                className='form-control'
                                placeholder="Confirm your Password"
                                name='confirmPassword'
                                id='confirmPassword'
                                value={confirmPassword}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <Link to='/login'>Already have Account? Login here</Link>
                        <button className='btn btn-primary my-3 d-block'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Register