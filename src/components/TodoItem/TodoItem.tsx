import * as React from 'react';

import './TodoItem.css'
type Props = {
    text: string;
    id: number
    handleCheck: (id: number) => void
}


export const TodoItem: React.FC<Props> = ({text, id, handleCheck}) => {
        return (
            <div className="todoItem d-flex justify-content-between">
                <span>{id + 1}. {text}</span>
                <span  onClick={() => handleCheck(id)}>
                    Mark <i className="fas fa-check-circle"></i>
                </span>
            </div>
        );
}