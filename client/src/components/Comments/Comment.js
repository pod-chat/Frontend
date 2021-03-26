import React from 'react'

export default function Comment({ comment }) {
    const nestedComments = (comment.children || []).map((comment) => {
      return <Comment key={comment.id} comment={comment} type="child" />;
    });
  
    return (
      <div style={{ marginLeft: "25px", marginTop: "10px" }}>
        <div>{`${comment.comment} · ${comment.user_name}`}</div>
        {nestedComments}
      </div>
    );
  }