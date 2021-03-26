import React, { useState } from 'react'
import View from './View'

export default function Comments() {
    const [data, setData] = useState([])


    return (
        <View data={data} />
    )
}