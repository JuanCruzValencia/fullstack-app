'use client'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  task: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("title")} />
      {errors.title && <span>This field is required</span>}

      <input {...register("task", { required: true })} />
      {errors.task && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
