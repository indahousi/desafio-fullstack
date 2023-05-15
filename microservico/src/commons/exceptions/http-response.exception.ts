abstract class HttpResponseException extends Error {
  public abstract error: string

  public abstract message: string

  public abstract statusCode: number

  public toJSON(): object {
    return {
      error: this.error,
      message: this.message,
      statusCode: this.statusCode,
    }
  }
}

export default HttpResponseException
