import React from "react";

interface IMyForm {
  name: string;
  age: number;
  contry: string;
}

interface MyComponentProps {
  tasks: IMyForm[];
}

const FormOutput: React.FC<MyComponentProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <p>
          {task.name} - {task.age} - {task.contry}
        </p>
      ))}
    </>
  );
};

export default FormOutput;
