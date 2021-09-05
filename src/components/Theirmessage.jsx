const Theirmessage = ({lastmessage, message}) => {
    const firstmsguser = !lastmessage || lastmessage.sender.userName !== message.sender.username;

    return(
        <div className="message-row"> 
        {firstmsguser && (
            <div
                className="msg avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
            />
            
        )}

        {(message?.attachments?.lenghth > 0
         ?(
            <img
                src={message.attachments[0].file}
                alt="message attachment"
                className="message-image"
                style={{ marginLeft: firstmsguser ? '4px' : '48px'   }}
            />
        ) :(
            <div className="message" style={{float: 'left' , backgroundColor:'#CABCDC',marginLeft: firstmsguser ? '4px' : '48px' }}> 
                {message.text}
                Mymessage</div>
            )
        )
        }

        MessageForm
        </div>
    );
}
export default Theirmessage;