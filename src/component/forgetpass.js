import {useState} from 'react'
import PopUpOTP from '../popupsuccess/popupotp'

function ForgetPass() {
    const [OpenOTP, setOpenOTP] = useState(false)
    const [forgetEmail, setForgetEmail] = useState('')
    const [showError, setShowError] = useState(false)

    const handleBlur = () => {
        if(forgetEmail === ''){
            setShowError(true)
        } else {
            setShowError(false)
        }
    }   

    return (
        <div className="form">
            <div className="form-validation">
                <h3 className="forget-pass-title">Quên mật khẩu</h3>
                <p className="forget-pass-para">
                    Nhập vào email bạn đã đăng ký tài khoản
                    <br />
                    Bizbooks để lấy lại mật khẩu
                </p>
                <div className="email-used-form">
                    <input
                        value={forgetEmail}
                        className={showError ? 'border-error-forget-pass' : 'email-used-forms'}
                        type='text'
                        placeholder='Email đã đăng ký'
                        onChange={e => setForgetEmail(e.target.value)}
                        onBlur={handleBlur}
                    />
                    {showError && <span style={{
                        display: 'block',
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        fontSize: '13px',
                        color: '#FF4C4D',
                        marginTop: '5px',
                        letterSpacing: '0.25px'
                    }}>*Email không hợp lệ</span>}
                </div>
                
                <div onClick={() => setOpenOTP(true)} className='continuteBtn'>
                    <div className="continute-btn">Tiếp tục</div>
                    {OpenOTP && <PopUpOTP setCloser={setOpenOTP}/>}
                </div>
            </div>
        </div>
    )
}

export default ForgetPass