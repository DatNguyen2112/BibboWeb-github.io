import ForgetPass from "./component/forgetpass"
import './App.css'

 function ForgotPass() {
    return (
        <div className="sign-up">
            <div className="sign-up-bg">
                <div className="sign-up-container">
                <div className="sign-up-logo">
                    <img className="sign-up-img" src="https://biboo.tecinus.vn/static/media/Logo.b253bc96.png" alt="" />
                 </div>

                <div className="sign-up-content">
                    <div className="sign-up-contents">
                        <div className="sign-up-return">
                            <div className="return-icon">
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>

                            <p className="return-para">Quay lại</p>
                        </div>
                        
                        <ForgetPass />
                       
                    </div>
                </div>
                </div>
                
            </div>

        </div>
    )
 }

 export default ForgotPass