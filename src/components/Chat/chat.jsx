import { useState } from "react";
import "./chat.scss"

function Chat(){
    const [chat,setChat] = useState(true)

    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    <span>John Doe</span>
                    <p>
                    Lörem ipsum bangen spengar...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    <span>John Doe</span>
                    <p>
                    Lörem ipsum bangen spengar...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    <span>John Doe</span>
                    <p>
                    Lörem ipsum bangen spengar...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    <span>John Doe</span>
                    <p>
                    Lörem ipsum bangen spengar...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    <span>John Doe</span>
                    <p>
                    Lörem ipsum bangen spengar...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    <span>John Doe</span>
                    <p>
                    Lörem ipsum bangen spengar...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    <span>John Doe</span>
                    <p>
                    Lörem ipsum bangen spengar...
                    </p>
                </div>


            </div>
            {chat && ( <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg" alt="" />
                    John Doe
                </div>
                <span className="close" onClick={()=>setChat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage own">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lörem ipsum bangen spengar.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>k</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
            </div>)}
        </div>
    )
}

export default Chat