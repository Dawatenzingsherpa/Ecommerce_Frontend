export type Props = {
  type : 'login' | 'register',
  onSubmit : (data:UserDataType)=>void
}

export interface UserDataType{
  email:string,
  username : string,
  password : string
}

export interface LoginDataType{
  email:string,
  password : string
}