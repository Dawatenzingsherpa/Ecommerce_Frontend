import { useNavigate } from "react-router-dom"
import Form from "../Form"
import { LoginDataType } from "../types"
import { useAppDispatch, useAppSelector } from "../../../store/Hook"
import { login, resetStatus, Status } from "../../../store/authSlice"
import { useEffect } from "react"
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {status} = useAppSelector((state)=>state.auth)
  const handleSubmit = async(data:LoginDataType)=>{
    dispatch(login(data))
  }
  useEffect(()=>{
    if(status=== Status.SUCCESS){
      dispatch(resetStatus())
      navigate("/")
    }
  },[status,dispatch,navigate])
  return (
    <Form type = 'login' onSubmit={handleSubmit}/>
  )
}

export default Login