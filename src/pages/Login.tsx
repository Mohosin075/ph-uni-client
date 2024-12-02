import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { JWTVerify } from "../utils/jwtVerify";

function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  // console.log({ data, error });

  const onSubmit = async (data: { id: string; password: string }) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();

    const user = JWTVerify(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id : </label>
        <input type="text" {...register("id")} />
      </div>
      <div>
        <label htmlFor="id">Password : </label>
        <input type="text" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
}

export default Login;
