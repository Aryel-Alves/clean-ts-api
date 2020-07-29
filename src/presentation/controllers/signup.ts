import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    let response
    requiredFields.forEach((field) => {
      if (!httpRequest.body[field]) {
        response = badRequest(new MissingParamError(field))
      }
    })
    return response
  }
}
