import React from 'react'


export default function Comment({ comment }) {
    const nestedComments = (comment.children || []).map((comment) => {
      return <Comment key={comment.id} comment={comment} type="child" />;
    });
  
    return (
      <div className={comment.lineage ? 'comment childComment' : 'comment parentComment'}>
        <div className='commentText'>{`${comment.comment} · ${comment.user_name}`}</div>
        {nestedComments}
      </div>
    );
  }