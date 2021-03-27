import React, { useState, useEffect } from 'react'

import View from './View'
import { loadComments } from './loadComments'

export default function Comments() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(loadComments()) //TODO: call loadComments.js module
    }, [])

    return (
        <View data={data} />
    )
}