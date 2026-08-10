import Form from "../Form";
import { UserDataType } from "../types";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { register, Status, resetStatus } from "../../../store/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);
  console.log(status);
  const handleSubmit = async (data: UserDataType) => {
    dispatch(register(data));
  };
  useEffect(() => {
    if (status === Status.SUCCESS) {
      dispatch(resetStatus());
      navigate("/login");
    }
  }, [status, navigate, dispatch]);

  return <Form type="register" onSubmit={handleSubmit} />;
};

export default Register;
