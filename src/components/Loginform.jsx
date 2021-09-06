import { useState } from "react";
import axios from "axios";

const projectID = 'b03d3024-f9a2-4a0a-95d7-213463605875';

const Loginform = () => {
    const [userName, setUserame] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObj= { 'Project-ID': projectID, 'User-Name': userName, 'User-Secret': password}
            try{
               await axios.get('https://api.chatengine.io/chats', {headers: authObj});

               localStorage.setItem('userName', userName);
               localStorage.setItem('password', password);

               window.location.reload();
            } catch (error){
                    setError('Sorry, That is incorrect')
            }
        
    };
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className= "title"> Talk to me</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={userName}
                        onChange = {(e) => setUserame(e.target.value)} className="input" placeholder="Username" required
                    />
                    <input 
                        type="text"
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)} className="input" placeholder="Password" required
                    />
                    <div align="center">
                        <button type="Submit" className="button">
                            <span> Lets Talk </span>
                         </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default Loginform;