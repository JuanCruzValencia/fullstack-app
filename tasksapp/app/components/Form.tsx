"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { postTask } from "../requests/tasks.request";

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
  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    await postTask({ ...data });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}

      <input {...register("task", { required: true })} />
      {errors.task && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
