import React from 'react'
import styled from 'styled-components'

//Component Import
import Comment from './Comment'

//Styling - Styled Components


export default function View({data}) {
    return(
        <div>
            {
                data.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })
            }
        </div>
    )
}