export interface AddSurveyModel {
  question: string
  answers: surveyAnswers[]
}

export interface surveyAnswers {
  image: string
  answer: string
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
