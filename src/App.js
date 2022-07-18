import "./App.css";
import Comment from "./components/Comment";
import {comment} from './data/data.jsx'

function App() {

  return (
    <div className="App">
      {comment.map((item) => 
    <Comment  author={item.author}text={item.text}
       date={item.date} />
    )}
    </div>
  //   <Comment 
  //   author={comment.author} 
  //   text={comment.text}
  //    date={comment.date} />
  
  );
}

export default App;
