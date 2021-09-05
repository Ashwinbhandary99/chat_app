//import { RightCircleFilled } from "@ant-design/icons";

const Mymessage = ({message}) => {
    
    if (message?.attachments?.lenghth > 0){

        return(
            <img
                src={message.attachments[0].file}
                alt="message attachment"
                className="message-image"
                style={{ float:'right'  }}
            />
        )
    }
    return(
        <div className="message" style={{float: 'right' , marginRight:'18px', color:'white', backgroundColor:'(90deg, rgba(116,112,168,0.958420868347339) 13%, rgba(64,64,85,1) 37%, rgba(0,212,255,1) 100%);',}}> 
        {message.text}
        Mymessage</div>
    );
}
export default Mymessage;