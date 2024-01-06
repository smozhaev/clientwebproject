import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormOutput from "./FormOutput";

const Form = () => {
  interface IMyForm {
    name: string;
    age: number;
    contry: string;
  }

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    // здесь мы передаём новый массив, который содержит все старые элементы и новый
    // ...prev - мы получаем все элементы текущего стэйте (с помощью spread оператора)
    setTasks((prev) => [...prev, data]);
    reset();
  };

  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors, isValid }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const [tasks, setTasks] = useState<IMyForm[]>([]);

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Нужно больше символов Степан",
            },
          })}
        />
        <div>{errors.name?.message}</div>
        <input
          {...register("age", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Нужно больше символов Степан",
            },
          })}
        />
        <input
          {...register("contry", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов Степан",
            },
          })}
        />
        <div>{errors.name?.message}</div>
        <div>{errors.age?.message}</div>
        <button disabled={!isValid} type="submit">
          Сохранить
        </button>
      </form>
      <FormOutput tasks={tasks} />
    </>
  );
};

export default Form;
