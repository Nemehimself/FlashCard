import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What is language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "What is the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How do you pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 2349,
    question:
      "What is the React hook that lets you add state to a function component?",
    answer: "useState",
  },
  {
    id: 4567,
    question:
      "What is the React hook that lets you run side effects in function components?",
    answer: "useEffect",
  },
  {
    id: 5678,
    question:
      "What is the React hook that lets you fetch data in function components?",
    answer: "useFetch",
  },
  {
    id: 6789,
    question:
      "What is the React hook that lets you share stateful logic across multiple components?",
    answer: "useCustomHook",
  },
  {
    id: 7893,
    question:
      "What is the React hook that lets you add context to a function component?",
    answer: "useContext",
  },
  {
    id: 8901,
    question:
      "What is the React hook that lets you add reducers to a function component?",
    answer: "useReducer",
  },
  {
    id: 9012,
    question:
      "What is the React hook that lets you add memoization to a function component?",
    answer: "useMemo",
  },
  {
    id: 1234,
    question:
      "What is the React hook that lets you add refs to a function component?",
    answer: "useRef",
  },
  {
    id: 2345,
    question:
      "What is the React hook that lets you add context to a function component?",
    answer: "useContext",
  },
  {
    id: 3456,
    question:
      "What is the React hook that lets you add reducers to a function component?",
    answer: "useReducer",
  },
  {
    id: 4567,
    question:
      "What is the React hook that lets you add memoization to a function component?",
    answer: "useMemo",
  },
  {
    id: 5678,
    question:
      "What is the React hook that lets you add refs to a function component?",
    answer: "useRef",
  },
  {
    id: 6789,
    question:
      "What is the React hook that lets you add context to a function component?",
    answer: "useContext",
  },
  {
    id: 7890,
    question:
      "What is the React hook that lets you add reducers to a function component?",
    answer: "useReducer",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          onClick={() => handleClick(q.id)}
          className={q.id === selectedId ? "selected" : ""}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}
