import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestionIndex: 0,
  answers: [],
  questions: [
    {
      id: 1,
      question: 'Как ты обычно реагируешь на кризисные ситуации в бизнесе?',
      options: [
        { text: 'Расслабляюсь, потому что всегда есть выход', score: 1 },
        { text: 'Превращаю любую проблему в хайповую тему', score: 2 },
        { text: 'Показываю, как круто я справляюсь, чтобы все знали', score: 3 },
        { text: 'Делаю из мухи слона, чтобы привлечь внимание к себе', score: 4 },
        { text: 'Ищу бюджетное решение, которое всех устроит', score: 5 },
        { text: 'Включаю харизму и продаю решение даже самым скептикам', score: 6 },
      ],
    },
    {
      id: 2,
      question: 'Как ты выбираешь стратегию продвижения своего продукта?',
      options: [
        { text: 'Спокойно: доверяю проверенным методам.', score: 1 },
        { text: 'Ставлю на тренды и хайп.', score: 2 },
        { text: 'Главное — эффектно показать свои достижения.', score: 3 },
        { text: 'Взрываю инфополе, даже если продукт обычный.', score: 4 },
        { text: 'Экономлю на всем, что можно, но делаю эффективно.', score: 5 },
        { text: 'Сразу включаю режим убеждения и переговорами закрываю сделки.', score: 6 },
      ],
    },
    {
      id: 3,
      question: 'Что для тебя важнее в бизнесе?',
      options: [
        { text: 'Спокойствие и баланс.', score: 1 },
        { text: 'Быть в центре внимания и задавать тренды.', score: 2 },
        { text: 'Демонстрировать успех и мотивировать окружающих.', score: 3 },
        { text: 'Провоцировать дискуссии и быть на слуху.', score: 4 },
        { text: 'Минимизировать затраты и максимально оптимизировать процессы.', score: 5 },
        { text: 'Строить отношения с клиентами и делать их счастливыми.', score: 6 },
      ],
    },
    {
      id: 4,
      question: 'Какие проекты тебя вдохновляют?',
      options: [
        { text: 'Те, которые не требуют лишнего стресса.', score: 1 },
        { text: 'Громкие, инновационные и с потенциалом хайпа.', score: 2 },
        { text: 'Те, где можно показать себя с лучшей стороны.', score: 3 },
        { text: 'Проекты, где можно показать свой уникальный подход.', score: 4 },
        { text: 'Там, где можно достичь результата с минимальными вложениями.', score: 5 },
        { text: 'Те, где нужно общаться, убеждать и заключать сделки.', score: 6 },
      ],
    },
    {
      id: 5,
      question: 'Как ты общаешься с клиентами или партнерами?',
      options: [
        { text: 'Тепло и заботливо, как с друзьями.', score: 1 },
        { text: 'Ярко и энергично, чтобы запомнили надолго.', score: 2 },
        { text: 'На уровне победителя — показываю, что мы лучшие.', score: 3 },
        { text: 'С сарказмом и чувством юмора, но всегда по делу.', score: 4 },
        { text: 'Спокойно, но убедительно.', score: 5 },
        { text: 'Уверенно, превращая каждую встречу в успешную сделку.', score: 6 },
      ],
    },
    {
      id: 6,
      question: 'Как ты смотришь на конкурентов?',
      options: [
        { text: 'Спокойно: пусть делают свое дело.', score: 1 },
        { text: 'Всегда ищу возможность сделать что-то ярче и круче.', score: 2 },
        { text: 'Не забываю флексить, показывая, как я лучше.', score: 3 },
        { text: 'Немного стебусь над ними, но уважаю их усилия.', score: 4 },
        { text: 'Анализирую, как сделать их методы дешевле и эффективнее.', score: 5 },
        { text: 'Убеждаю, что работать со мной выгоднее.', score: 6 },
      ],
    },
  ],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion(state, action) {
      if (state.currentQuestionIndex < state.answers.length) {
        state.currentQuestionIndex++;
      }
    },
    previousQuestion(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      }
    },
    selectAnswer(state, action) {
      const { questionIndex, answer } = action.payload;
      state.answers[questionIndex] = answer;
      state.currentQuestionIndex++
    },
    resetQuiz(state) {
      state.currentQuestionIndex = 0;
      state.answers = [];
    },
  },
});

export const { nextQuestion, previousQuestion, selectAnswer, resetQuiz, answers } = quizSlice.actions;
export default quizSlice.reducer;
