const MessageBox = (props) => {
    return (
        <div className={ `msg-box ${props.msg !== ""? "open" : null }`} id="msgBox">
            { props.msg }
        </div>
    )
}

export default MessageBox;