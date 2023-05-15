import HttpResponseException from '../../../commons/exceptions/http-response.exception'

class IdNotFoundException extends HttpResponseException {
  public message

  public error = 'Not found'

  public statusCode = 404

  constructor(msg = 'id not found') {
    super()
    this.message = msg
  }
}

export default IdNotFoundException
