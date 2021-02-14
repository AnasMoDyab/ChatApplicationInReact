import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./ChatFeedComponent";
import LoginFormToChat from "./LoginFormToChat";
import './chat.css'

const projectID = 'a030b2f8-2e34-4396-8086-3fe086c9ae30';
const Chat =()=> {
    if (!localStorage.getItem('username')) return <LoginFormToChat />;
    return (
        <ChatEngine
            height="70vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default Chat;