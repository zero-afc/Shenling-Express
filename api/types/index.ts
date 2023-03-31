export namespace Login {
  export interface Request {
    account : string
    password : string
  }
  export interface Response {
    token : string
  }
}