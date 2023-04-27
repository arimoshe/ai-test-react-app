import React, { useState } from 'react';

interface Props {
    onAddQuestion: (name: string, question: string) => void;
}

function QuestionForm({ onAddQuestion }: Props) {
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddQuestion(name, question);
        setName('');
        setQuestion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Question:
                <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default QuestionForm;
