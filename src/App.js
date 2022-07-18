import "./App.css";
import Comment from "./components/Comment";
import {comment} from './data/data.jsx'

function App() {

  return (
    <Comment 
    author={comment.author} 
    text={comment.text}
     date={comment.date} />
  );
}

export default App;
