import { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    question: "Что такое переменная в программировании?",
    options: [
      "Константное значение",
      "Именованная область памяти для хранения данных",
      "Функция без параметров",
      "Тип данных"
    ],
    correctAnswer: 1,
    points: 10
  },
  {
    id: 2,
    question: "Какой из этих языков программирования является строго типизированным?",
    options: ["JavaScript", "Python", "TypeScript", "PHP"],
    correctAnswer: 2,
    points: 10
  },
  {
    id: 3,
    question: "Что возвращает функция console.log() в JavaScript?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: 2,
    points: 10
  },
  {
    id: 4,
    question: "Что означает аббревиатура HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correctAnswer: 0,
    points: 10
  },
  {
    id: 5,
    question: "Какая структура данных работает по принципу LIFO (Last In, First Out)?",
    options: ["Очередь", "Стек", "Список", "Дерево"],
    correctAnswer: 1,
    points: 10
  },
  {
    id: 6,
    question: "Что такое рекурсия?",
    options: [
      "Цикл while",
      "Функция, которая вызывает сама себя",
      "Массив массивов",
      "Метод сортировки"
    ],
    correctAnswer: 1,
    points: 10
  },
  {
    id: 7,
    question: "Какой HTTP-метод используется для получения данных?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctAnswer: 2,
    points: 10
  },
  {
    id: 8,
    question: "Что такое API?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Implementation",
      "Automated Process Integration",
      "Application Process Interface"
    ],
    correctAnswer: 0,
    points: 10
  },
  {
    id: 9,
    question: "Какая сложность у бинарного поиска?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    points: 10
  },
  {
    id: 10,
    question: "Что такое Git?",
    options: [
      "Язык программирования",
      "База данных",
      "Система контроля версий",
      "Фреймворк"
    ],
    correctAnswer: 2,
    points: 10
  }
];
