import React, { useState, useEffect } from 'react'

import View from './View'
import { loadComments } from './loadComments'

export default function Comments() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(loadComments()) 
    }, [])

    return (
        <View data={data} />
    )
}