


function PopUpSignIn({setClose}) {
    

    return (
        <div className="modalBackground">
            <div className="modalContent">
                <div className="modalContents">
                    <div className="modals">
                        <div className="modalBtns">
                        <span 
                            onClick={() => setClose(false)} 
                            className="modalClose">
                        X
                        </span>
                        </div>

                        <div className="modalForm">
                            <div className="modalTitle">
                                <h1 className="modalPara">
                                    Tạo mật khẩu mới
                                    <br />
                                    thành công
                                </h1>
                            </div>

                            <div className="modalContent">
                                <div className="modalIcon">
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                    
                                <small className="modalAccount">
                                    Mật khẩu mới của bạn là
                                    <br />
                                    <span className="modalAccoutTile">“ngoc21062001”</span>
                                </small>
                            </div>

                            <div className="modalSubmit">
                                <button onClick={() => setClose(false)} className="modalBtn">Xác nhận</button>
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default PopUpSignIn