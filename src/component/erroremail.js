
function ErrorEmail() {
    return (
      <small
        style={{
          position: "absolute",
          left: "0",
          bottom: "-2px",
          color: "red",
          fontSize: "12px",
          letterSpacing: "0.25px",
          display: "block",
          fontFamily: 'SVN-Gilroy-light'
        }}
      >
        *Vui lòng nhập email
      </small>
    );
}

export default ErrorEmail