import React from 'react';

interface Props {
    id: number;
    name: string;
    question: string;
    answered: boolean;
    onToggleAnswered: (id: number) => void;
}

function Question({ id, name, question, answered, onToggleAnswered }: Props) {
    const handleToggleAnswered = () => {
        onToggleAnswered(id);
    };

    return (
        <li>
            <div>{name}</div>
            <div>{question}</div>
            <button onClick={handleToggleAnswered}>{answered ? 'Mark as unanswered' : 'Mark as answered'}</button>
        </li>
    );
}

export default Question;
