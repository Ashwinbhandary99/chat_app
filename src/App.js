import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () =>{
    return(
        <ChatEngine
            height="100vh"
            projectID="b03d3024-f9a2-4a0a-95d7-213463605875"
            userName="Admin"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>
            }





        />
    );
}
export default App;