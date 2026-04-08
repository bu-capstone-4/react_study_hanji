import React, { useState } from 'react'

interface TodoInputProps {
    addTodo: (inputText: string) => void
}

export default function TodoInput({ addTodo }: TodoInputProps) {
    const [inputText, setInputText] = useState(''); //입력한 값 저장
    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { //키보드 이벤트인지 마우스 이벤트인지 모르기 때문에 정의해줘야 함
        if (e.key === 'Enter') {
            if (inputText.trim() === '') {
                alert('할 일을 입력해주세요')
            } else {
                addTodo(inputText);
                setInputText('');
            }

        }
    }


    return (
        <div>
            {/* 인풋창에 값 입력 -> 버튼을 눌러 추가 */}
            <input type="text"
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value);
                }}
                onKeyDown={keyDown}
            />
            <button
                className="bg-blue-500 text-white rounded-md px-4 py-2"
                onClick={() => {
                    if (inputText.trim() === '') {
                        alert('할 일을 입력해주세요')
                    } else {
                        addTodo(inputText);
                        setInputText('');
                    }

                }
                }
            >
                추가
            </button>
        </div>
    )
}