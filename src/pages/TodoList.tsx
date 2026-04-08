import React, { useMemo, useState } from 'react'
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import TodoSearch from '../components/TodoSearch';
import useDebounce from '../hooks/useDebounce';


export interface Todo {
    id: number;
    text: string;
    isDone: boolean;
}

export default function TodoList() {
    const [todoList, setTodoList] = useState<Todo[]>([]); //할일 추가했을 때 저장되는 배열
    const [searchQuery, setSearchQuery] = useState(''); //검색어 저장
    const debouncedQuery = useDebounce(searchQuery);
    const [filterTodo, setFilterTodo] = useState<'all' | 'active' | 'done'>('all'); //<'all'|'active'|'done'> 이 3개만 들어올 수 있다는 표시, ('all') 기본값

    const addTodo = (inputText: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text: inputText,
            isDone: false
        }
        setTodoList([newTodo, ...todoList]);
        console.log(todoList);
    }
    const deleteTodo = (targetId: number) => {
        setTodoList(todoList.filter((todo) => {
            return todo.id !== targetId;
        }));
    }
    const toggleTodo = (targetId: number) => {
        setTodoList(todoList.map((todo) => {
            if (todo.id === targetId) {
                return { ...todo, isDone: !todo.isDone }
            } else {
                return todo;
            }
        }));
    }
    // filteredTodo: 검색했을 때 나오는 값, 아무것도 검색 안 하면 전체 보여줌
    // filterTodo: 상태를 가리킴 "all", "active", "done"
    // isDone: true: 완료, false: 미완료
    // => 검색한 내용이 기본값이고 
    // filterTodo가 all이면 전체를 보여주기 때문에 filteredTodo 기본값 => return filteredTodo
    // filterTodo가 active면 isDone: false인 값 => return filteredTodo.isDone === false
    // filterTodo가 done이면 isDone: true인 값 => return filteredTodo.isDone === true

    const filteredTodos = useMemo(() => {
        const filteredTodo = todoList.filter((todo) => {
            return todo.text.includes(debouncedQuery);
        });
        if (filterTodo === 'all') {
            return filteredTodo;
        } else if (filterTodo === 'active') {
            return filteredTodo.filter((todo) => {
                return todo.isDone === false;
            })
        } else {
            return filteredTodo.filter((todo) => {
                return todo.isDone === true;
            })
        }
    }, [todoList, filterTodo, debouncedQuery])



    return (
        <div>
            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoSearch
                setSearchQuery={setSearchQuery}
            ></TodoSearch>
            <button
                className={filterTodo === 'all' ? 'bg-blue-400' : 'bg-gray-300'}
                onClick={() => {
                    setFilterTodo('all');
                }}>
                전체
            </button>
            <button
                className={filterTodo === 'active' ? 'bg-blue-400' : 'bg-gray-300'}
                onClick={() => {
                    setFilterTodo('active');
                }}>
                미완료
            </button>
            <button
                className={filterTodo === 'done' ? 'bg-blue-400' : 'bg-gray-300'}
                onClick={() => {
                    setFilterTodo('done');
                }}>
                완료
            </button>
            {/* {todoList.filter((todo) => { //{} return 생략 불가능
                return todo.text.includes(debouncedQuery)
            }).map((todo) => ( //() return 생략 가능
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoItem>
            ))
            } */}
            {filteredTodos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoItem>
            })}

        </div>
    )
}