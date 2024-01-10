import './authenPage.scss'

export default function LoginPage() {
  return (
    <div className='authenPage'>
        <div className='contentBox'>
            <h2>Sign In</h2>
            <form action="" className='infoBox'>
                <div className='info-field'>
                    <label htmlFor="">UserName</label>
                    <input type="text" />
                </div>
                <div className='info-field'>
                    <label htmlFor="">Passwords</label>
                    <input type="text" />
                </div>
                <p style={{fontSize:"13px",textAlign:"center"}}>Still don't have account <a href="">sign-up</a> now!</p>
                <div className='button-field'>
                    <button style={{width:"150px"}}>Log-in</button>
                </div>
            </form>
        </div>
    </div>
  )
}
