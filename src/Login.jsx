import {useState} from 'react'
import ErrorEmail from './component/erroremail'
import ErrorPass from './component/errrorpass'

function Login() {

    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [ShowErrorMail, setShowErrorMail] = useState(false)
    const [ShowErrorPass, setShowErrorPass] = useState(false)

    function handleBlurEmail() {
        if(Email === '' ) {
            setShowErrorMail(true)
        } else{
            setShowErrorMail(false)
        }
    }

    function handleBlurPass() {
        if(Pass === '' ) {
            setShowErrorPass(true)
        } else{
            setShowErrorPass(false)
        }
    }

    return(
        <div className="login-bg">
            <div className="login-container">
                <div className="login-logo">
                   <img className="logos" src="https://biboo.tecinus.vn/static/media/Logo.b253bc96.png" alt="" />
                </div>
                <div className="login-content">
                    <div className="rename">
                        <div className="return">
                            <i className="fa-solid fa-arrow-left"></i>
                            <p className="return-para">Quay lại</p>
                        </div>

                        <div className="return-content">
                            <h1 className="return-title">
                                Đăng nhập
                                <br />
                                tài khoản Bizbooks
                            </h1>

                            <div className="return-input">
                                <div className="return-email">
                                    <input
                                        value={Email}
                                        className={ShowErrorMail ? 'border-error-email' : 'email'}
                                        type='text' 
                                        placeholder="Email đăng nhập"
                                        onChange={e => setEmail(e.target.value)}
                                        onBlur={handleBlurEmail}
                                    />

                                    {ShowErrorMail && <ErrorEmail />}
                                </div>
                                
                                <div className="return-pass-show">
                                    <div className="return-pass">
                                        <input 
                                            value={Pass}
                                            className={ShowErrorPass ? 'border-error-passs' : 'password'}
                                            type='text' 
                                            placeholder="Mật khẩu"
                                            onChange={(e) => setPass(e.target.value)}
                                            onBlur={handleBlurPass}
                                        />

                                        {ShowErrorPass && <ErrorPass />}
                                    </div>
                                    
                                    <button className="show-pass">
                                        <img src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg" alt="" />
                                    </button>

                                </div>

                            </div>

                            <div className="forget-pass">
                                <p className="forget-pass-para">Quên mật khẩu?</p>
                            </div>

                            <div className="sign-in-btn">
                                <button className="sign-in">
                                    Đăng nhập
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;