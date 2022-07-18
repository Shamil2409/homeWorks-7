import UserInfo from "./UserInfo";
import { dataFormat } from "../helpers/general";
import CommentWrapper from "./CommentWrapper";
const Comment = (props) => {
  return (
    <div className="Comment">
        <UserInfo author={props.author} />
      <CommentWrapper>
        <div className="textData">
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-data">{dataFormat(props.date)}</div>
        

        </div>

      </CommentWrapper>
    </div>
  );
};
export default Comment;
