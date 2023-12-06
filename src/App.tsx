import React, { useEffect } from "react";
import "./App.css";
import { Table } from 'antd';
import { ColumnsType } from "antd/es/table";

function App() {
  // const getStaff = async () => {
  //   const data = await axios.get(
  //     "https://e.mospolytech.ru/old/lk_api.php/?getStaff&search=&division=&page=50&perpage=50&token=encs7hdoQvvlRbnmdYMx6iYbN6BV4c0u3OFzrYnFLLnxMTZgPEFWacFk%2BbO2lmIVpB4FZl3gw4Gl4vqwmhv0ZozGywqMuZHzO9Dp7nzjoCq3RxTWE0Lh58dVG%2FAoV9M13ElJ6AUayD%2B9Vw41XTcwOFhTEtm5OaGaCnVtzkeGR28%3D"
  //   );
  //   return response.data;
  // };

  // useEffect(() => {
  //   console.log(getStaff());
  // });
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    email: string;
    username: string;
  }

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      email: 'mike@mail.ru',
      username: 'MegaGigsDragonSlayer69',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      email: 'jhon@mail.ru',
      username: 'MegaGigsDragonSlayer70',
    },
    {
      key: '2',
      name: 'Don',
      age: 42,
      address: '10 Downing Street',
      email: 'djero@mail.ru',
      username: 'MegaGigsDragonSlayer71',
    },
    {
      key: '2',
      name: 'Bob',
      age: 42,
      address: '10 Downing Street',
      email: 'adww@mail.ru',
      username: 'MegaGigsDragonSlayer72',
    },
  ];
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    }
  ];
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Table dataSource={dataSource} columns={columns} />
      </header>
    </div>
  );
}

export default App;
