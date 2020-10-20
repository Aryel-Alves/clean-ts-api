import { loginPath, surveyPath } from './paths'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'
import { accountSchema, errorSchema, loginParamsSchema, surveysSchema, surveyAnswerSchema, surveySchema, apiKeyAuthSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Ts Api',
    description: 'API do curso do mango TDD de enquetes',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{ url: '/api' }],
  tags: [
    { name: 'Login' },
    { name: 'Enquete' }
  ],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}
