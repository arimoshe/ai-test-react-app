import React from 'react';
import Question from './Question';

interface QuestionData {
    id: number;
    name: string;
    question: string;
    answered: boolean;
}

interface Props {
    questions: QuestionData[];
    onToggleAnswered: (id: number) => void;
}

function QuestionList({ questions, onToggleAnswered }: Props) {
    return (
        <ul>
            {questions.map((question) => (
                <Question key={question.id} {...question} onToggleAnswered={onToggleAnswered} />
            ))}
        </ul>
    );
}

export default QuestionList;
