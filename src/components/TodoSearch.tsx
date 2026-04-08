import React from 'react'

interface TodoSearchProps {
    setSearchQuery: (query: string) => void;
}


export default function TodoSearch({ setSearchQuery }: TodoSearchProps) {
    return (
        <div>
            <input type="text"
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log(e.target.value);
                }}
            />
        </div>
    )
}