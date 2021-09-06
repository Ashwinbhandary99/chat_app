import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Loginform from './components/Loginform';
import './App.css';

const App = () =>{
    
    if(!localStorage.getItem('userName')) return <Loginform/>
    return(
        <ChatEngine
            height="100vh"
            projectID="b03d3024-f9a2-4a0a-95d7-213463605875"
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>
            }

        />
    );
}
export default App;