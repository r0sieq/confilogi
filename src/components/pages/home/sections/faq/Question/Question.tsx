import { useState } from 'react'
import './Question.css'

interface QuestionProps {
    question: string,
    children: string,
}

export default function Question(props: QuestionProps){

    const [active, setActive] = useState<boolean>(false)

    return (
        <div className="question" data-extended={active}>
            <div className="top-bar" onClick={() => setActive(currentActive => !currentActive)}>
                <div className="title">
                    {props.question}
                </div>
                <button className="more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                        <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                    </svg>
                </button>
            </div>
            <p className="answer">
                {props.children}
            </p>
        </div>
    )
}