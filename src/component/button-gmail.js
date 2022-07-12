import { Icon } from "./icon"

function ButtonGmail() {
    return (
        <button className="gmail">
            <div className="gmail-logo">
                <Icon />
                <p>Đăng nhập bằng Gmail</p>
            </div>
        </button>
    )
}

export default ButtonGmail