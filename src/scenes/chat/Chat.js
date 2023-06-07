import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './Chat.css' ;




const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
          height="90vh"
          projectID="27c8c183-47b3-4c97-81fa-9ea60699f616"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          //onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default Chat;