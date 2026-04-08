import React from 'react'
import { useParams } from 'react-router-dom'

export default function TodoDetail() {
    //const {id} = useParams(); //주소창에서 id 추출

    return (
        <div>
            할일 상세 페이지
            <p>지금 내가 보고 있는 할 일의 ID는?</p>
        </div>
    )
}