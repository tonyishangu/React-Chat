import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="e8235634-5996-431c-839d-11325df1c3aa"
      userName="Tonnie"
      userSecret="Saige1aw"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
