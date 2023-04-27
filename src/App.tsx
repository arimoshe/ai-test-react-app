import React, { useState } from 'react';
import QuestionList from './components/QuestionList';
import QuestionForm from './components/QuestionForm';

interface QuestionData {
  id: number;
  name: string;
  question: string;
  answered: boolean;
}

function App() {
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  const handleAddQuestion = (name: string, question: string) => {
    const newQuestion: QuestionData = {
      id: questions.length,
      name,
      question,
      answered: false,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleToggleAnswered = (id: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, answered: !question.answered };
        }
        return question;
      })
    );
  };

  return (
    <div>
      <h1>Question Box</h1>
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionList questions={questions} onToggleAnswered={handleToggleAnswered} />
    </div>
  );
}

export default App;
