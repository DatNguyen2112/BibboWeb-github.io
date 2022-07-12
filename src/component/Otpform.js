import {useState} from 'react'
import PopUpSignIn from '../popupsuccess/popupsignin'
function Otpform() {
    const [IsOpen, setIsOpen] = useState(false)
    const [OtpPass, setOtpPass] = useState('')
    const [OtpRePass, setOtpRePass] = useState('')
    const [OtpPassError, setOtpPassError] = useState(false)
    const [OtpRePassError, setRePassError] = useState(false)

    function handleBlurOtpPass () {
        if(OtpPass === ''){
            setOtpPassError(true)
        } else {
            setOtpPassError(false)
        }
    }

    function handleBlurOtpRePass () {
        if(OtpRePass === ''){
            setRePassError(true)
        } else {
            setRePassError(false)
        }
    }

    return (
        <div className="otp-form">
            <h1 className="otp-title">Nhập mã xác nhận</h1>
            <small className="otp-para">
                Nhập mã xác nhận 06 chữ số vừa được gửi về Email đã 
                <br />
                đăng ký của bạn. Sau đó hay tạo mật khẩu mới
            </small>

            <form className="otp-forms" action="">
                <div className="otp-forms-email">
                    <input
                        placeholder="datnguyen21122001@gmail.com"
                        className="otp-forms-email-input" 
                    />
                </div>

                <div className="otp-forms-verify">
                    <div className="otp-forms-code">
                        <input
                            className="otp-forms-code-input"
                            type='text'
                            placeholder="Nhập mã xác nhận" 
                        />
                    </div>

                    <small className="otp-resend">Gửi lại</small>
                </div>

                <div className="otp-forms-new-pass">
                    <div className="otp-new-pass">
                        <input
                            value={OtpPass}
                            className={OtpPassError ? 'border-error-otp-pass' : 'otp-new-pass-input'}
                            type='password'
                            placeholder="Mật khẩu mới" 
                            onChange={e => setOtpPass(e.target.value)}
                            onBlur={handleBlurOtpPass}
                        />

                        {OtpPassError && <small style={{
                            display: 'block',
                            position: 'absolute',
                            left:'0',
                            bottom: '0',
                            fontSize: '12px',
                            color: 'red'
                        }}> 
                        *Vui lòng nhập mật khẩu mới</small>}
                    </div>

                    <button className="form-input-show width40">
                        <img src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg" alt="" />
                    </button>
                </div>

                <div className="otp-forms-new-re-pass">
                    <div className="otp-new-re-pass">
                        <input 
                            value={OtpRePass}
                            className={OtpRePassError ? 'border-error-otp-pass' : 'otp-new-re-pass-input'}
                            type='password'
                            placeholder="Nhập lại mật khẩu mới"
                            onChange={e => setOtpRePass(e.target.value)}
                            onBlur={handleBlurOtpRePass}
                        />

                        {OtpRePassError && <small style={{
                            display: 'block',
                            position: 'absolute',
                            left:'0',
                            bottom: '0',
                            fontSize: '12px',
                            color: 'red'
                        }}> 
                        *Vui lòng nhập lại mật khẩu mới</small>}
                    </div>

                    <button className="form-input-show blue width40">
                        <img src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg" alt="" />
                    </button>
                </div>

                <div onClick={() => setIsOpen(true)} className="otp-forms-submit">
                    <div className="otp-forms-btn">Tiếp tục</div>
                    {IsOpen && <PopUpSignIn setClose={IsOpen}/>}
                </div>
            </form>
        </div>
    )
}

export default Otpform