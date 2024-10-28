import React from "react";
import Comment from "./Comment";

function CommentList() {
    const commentData = [
        { id: 1, name: "김가현", text: "나리스는최고의스터디 ~~ ~~~~ 🩷🩷🩷🩷🩷🩷" },
        { id: 2, name: "작성자 2", text: "댓글 내용 2" },
        { id: 3, name: "작성자 3", text: "댓글 내용 3" },
    ];

    return (
        <div>
            {commentData.map(comment => (
                <Comment key={comment.id} name={comment.name} text={comment.text} />
            ))}
        </div>
    );
}

export default CommentList;
