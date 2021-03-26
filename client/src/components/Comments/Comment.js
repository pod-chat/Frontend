import React from 'react'
import styled from 'styled-components'


export default function Comment({ comment }) {
    const nestedComments = (comment.children || []).map((comment) => {
      return <Comment key={comment.id} comment={comment} type="child" />;
    });
  
    return (
      <div className={comment.lineage ? 'childComment' : 'parentComment'}>
        <div>{`${comment.comment} · ${comment.user_name}`}</div>
        {nestedComments}
      </div>
    );
  }