import Messageform from "./Messageform";
import Mymessage from "./Mymessage";
import Theirmessage from "./Theirmessage";
const ChatFeed = (props) => {
//console.log(props);

const {chats, activeChat, userName, messages} = props;
const chat = chats && chats[activeChat];
//console.log(chats, userName, messages);

const renderreceipt = (message, isMymessage) => {
    return chat.people.map((person, index)=> person.lastread === message.id && (
        <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
            float: isMymessage ? 'right' : 'left',
            backgroundImage: `url(${person?.person?.avatar})`

        }}
    />
))
}

const renderMessages = () => {
    const keys = Object.keys(messages);
    //console.log(keys);
    return keys.map((key, index) => {
        const message = messages[key];
        const lastmessagekey= index === 0 ? null :keys[index -1];
        const isMymessage=  userName === message.sender.userName;
        return(
            <div key={`msg_${index}`} style={{width: '100'}}> 
                <div className="message-block"> 
                    {
                        isMymessage
                        ? <Mymessage message={message}/>
                        :<Theirmessage message={message} lastmessage={messages[lastmessagekey]}/> 
                    }
                </div>
                <div className="read-receipts" style={{marginRight: isMymessage ? '18px' :'0px', marginLeft: isMymessage ? '0px' : '68px' }}> 
                   {renderreceipt(message, isMymessage)}
                </div>
            </div>
        )  
    });
};


if(!chat) return 'Loading...';

return(
    <div className="chat-feed"> ChatFeed
        <div className="chat-title-container"> 
            <div className= "chat-title">{chat.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person) => ` ${person.person.userName}`)}
            </div>

        </div>
        {renderMessages()};
        <div style={{height: '100px'}}/>
        <div className="message-form-container"> 
            <Messageform {...props} chatID={activeChat}/>
        </div>
    </div>
);

}
export default ChatFeed;