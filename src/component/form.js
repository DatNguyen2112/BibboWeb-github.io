
import {useState} from 'react'
import PopUpCreatePass from '../popupsuccess/popupcreatepass'

function Form() {
    const [openCreate, setOpenCreate] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [repass, setRePass] = useState('')
    const [showError, setShowError] = useState(false)
    const [showErrorName, setShowErrorName] = useState(false)
    const [showErrorPass, setShowErrorPass] = useState(false)
    const [showErrorRePass, setShowErrorRePass] = useState(false)
    const handleBlurEmail =  () => {
        if(email === "") {
            setShowError(true)
        }else {
            setShowError(false)
        }
    }

    const handleBlurName =  () => {
        if(name === "") {
            setShowErrorName(true)
        }else {
            setShowErrorName(false)
        }
    }

    const handleBlurPass =  () => {
        if(pass === "") {
            setShowErrorPass(true)
        }else {
            setShowErrorPass(false)
        }
    }

    const handleBlurRePass =  () => {
        if(repass === "") {
            setShowErrorRePass(true)
        }else {
            setShowErrorRePass(false)
        }
    }
    
    
    return (
        <div className="form">
            <form className="form-validation" action="">
                <h2 className="form-title">Tạo tài khoản</h2>
                <div className="form-input">
                    <input
                        value={email}
                         className={showError ? "border-error" : "email-input"} 
                         type="text" 
                         placeholder="Email" 
                         onChange={e => setEmail(e.target.value)}
                         onBlur={handleBlurEmail}
                    />
                    {showError && <span style={{
                        display: 'block',
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        fontSize: '13px',
                        color: 'red'
                    }}>*Vui lòng nhập email</span>}
                </div>
                <div className="form-input">
                    <input 
                        value={name}
                        className={showErrorName ? "border-error" : "email-input"} 
                        type="text" 
                        placeholder="Họ và tên" 
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleBlurName}
                    />
                    {showErrorName && <small style={{
                        display: 'block',
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        fontSize: '13px',
                        color: 'red'
                    }}>*Vui lòng nhập họ tên</small>}
                </div>
                <div className="form-password">
                    <div className="form-input-password">
                        <input
                            value={pass}
                            className={showErrorPass ? 'border-error-pass' : 'pass-input'}
                            type="text"
                            placeholder="Mật khẩu"
                            onChange={e => setPass(e.target.value)}
                            onBlur={handleBlurPass}
                        />

                        {showErrorPass && 
                        <small style={{
                            display: 'block',
                            position: 'absolute',
                            left: '0',
                            bottom: '0',
                            fontSize: '13px',
                            color: 'red'
                        }}>*Vui lòng nhập mật khẩu</small>}       

                        <button className="form-input-show">
                            <img src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="form-password">
                    <div className="form-input-password">
                        <input
                            value={repass}
                            className={showErrorRePass ? 'border-error-re-pass' : 're-pass-input'} 
                            type="text"
                            placeholder="Nhập lại mật khẩu"
                            onChange={e => setRePass(e.target.value)}
                            onBlur={handleBlurRePass}
                        />

                    {showErrorRePass && <small style={{
                        display: 'block',
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        fontSize: '13px',
                        color: 'red'
                    }}>*Vui lòng nhập lại mật khẩu</small>}   

                        <button className="form-input-show blue">
                            <img src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div onClick={() => setOpenCreate(true)} className="form-submit">
                    <div className="form-submit-btn">Tạo tài khoản</div>
                    {openCreate && <PopUpCreatePass setClosePass={setOpenCreate}/>}
                </div>
            </form>
            <div className="option">
                <p className="option-para">Đã có tài khoản? <span className="signin">Đăng nhập</span></p>
            </div>
        </div>
    )
}

export default Form;