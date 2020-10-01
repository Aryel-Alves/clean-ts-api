export interface AddSurveyModel {
  question: string
  answers: surveyAnswers[]
  date: Date
}

export interface surveyAnswers {
  image?: string
  answer: string
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
