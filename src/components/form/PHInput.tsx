import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

function PHInput({ type, name, label }: TInputProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor={name}>{label} : </label>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      ></Controller>
    </div>
  );
}

export default PHInput;
