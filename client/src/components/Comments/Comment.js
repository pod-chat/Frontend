import React from 'react'
import styled from 'styled-components'

// Component Import
import AuthorSmall from '../AuthorSmall'
import CommentUpvote from './CommentUpvote'
import CommentReply from './CommentReply'
import CommentDownvote from './CommentDownvote'

//Styling
const EngagementOptions = styled.div`
  display: flex;
  justify-content: flex-start;
`

export default function Comment({ comment }) {
    const nestedComments = (comment.children || []).map((comment) => {
      return <Comment key={comment.id} comment={comment} type="child" />;
    });
  
    return (
      <div className={comment.lineage ? 'comment childComment' : 'comment parentComment'}>
        <AuthorSmall user_name={comment.user_name} user_handle={comment.user_handle} user_img={comment.user_img}/>
        <div className='commentText'>{`${comment.comment}`}</div>
        <EngagementOptions>
          <CommentUpvote />
          <CommentReply />
          <CommentDownvote />
        </EngagementOptions>
        {nestedComments}
      </div>
    );
  }