import { EmailValidator, Controller, HttpRequest, HttpResponse } from '../protocols'
import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      let response
      requiredFields.forEach((field) => {
        if (!httpRequest.body[field]) {
          response = badRequest(new MissingParamError(field))
        }
      })
      const isValid = this.emailValidator.isValid(httpRequest.body.email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      return response
    } catch (error) {
      return serverError()
    }
  }
}
