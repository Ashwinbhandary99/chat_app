import { useState } from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import { SendOutlined , PictureOutlined  } from '@ant-design/icons';

const Messageform = (props) => {
   

    const [value, setValue] = useState('');
    const {chatID, creds} = props;

    const handlechange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatID);

    }
    const handleUpload = (event) => {
        sendMessage(creds, chatID, {files: event.target.files, text:''});
    };

    const handlesubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) 
        sendMessage(creds, chatID, {text} );

        setValue('');
    };
    
    

    return(
    <form className="message-form" onSubmit={handlesubmit}> 
        <input
        className="message-input"
        placeholder = "Send a message..."
        value={value}
        onChange={handlechange}
        onSubmit={handlesubmit}


        />
        <label htmlFor= "uplaod-button">
            <span className="image-button">
                <PictureOutlined className="picture-icon"/>
                <SendOutlined/>
            </span>
        </label>
        <input
            type="file"
            multiple={false}
            id="upload-button"
            style={{display:'none'}}
            onChange={handleUpload}
        />
        <button type="Submit" className="send-button"> 
            <SendOutlined className="send-icon"/>
        </button>
    </form>
    );
}
export default Messageform;