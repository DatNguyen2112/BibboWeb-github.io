

 
function PopUpCreatePass({setClosePass}) {              
    return (
        <div className="modalBackground">
            <div className="modalContent">
                <div className="modalContents">
                    <div className="modals">
                        <div className="modalBtns">
                            <span 
                                onClick={() => setClosePass(false)} 
                                className="modalClose">
                                <i className="fa-solid fa-xmark"></i>
                            </span>   
                        </div>

                        <div className="modalForm">
                            <div className="modalTitle">
                                <h1 className="modalPara">
                                    Tạo tài khoản
                                    <br />
                                    thành công
                                </h1>
                            </div>

                            <div className="modalContent">
                                <div className="modalIcon">
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                    
                                <small className="modalAccount">
                                    Tài khoản Bizbooks của bạn là
                                    <br />
                                    <span className="modalAccoutTile">“datnguyen21122001@gmail.com”</span>
                                </small>
                            </div>

                            <div className="modalSubmit">
                                <span onClick={() => setClosePass(false)} className="modalBtn">Xác nhận</span>
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default PopUpCreatePass