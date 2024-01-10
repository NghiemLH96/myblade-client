import React from 'react'
import './authenPage.scss'

export default function RegisterPage() {
  return (
    <div className='authenPage'>
        <div className='contentBox'>
            <h2>Sign Up</h2>
            <form action="" className='infoBox'>
                <div className='info-field'>
                    <label htmlFor="">UserName</label>
                    <input type="text" />
                </div>
                <div className='info-field'>
                    <label htmlFor="">Passwords</label>
                    <input type="text" />
                </div>
                <div className='info-field'>
                    <label htmlFor="">Confirm Passwords</label>
                    <input type="text" />
                </div>
                <div className='info-field'>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className='button-field'>
                    <button>Register</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  )
}
