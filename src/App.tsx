import React, { useEffect, useState } from "react";
import "./App.css";
import { Table, Button } from 'antd';
import { ColumnsType } from "antd/es/table";
import axios from "axios";

function App() {

  interface DataType {
    country: string;
    name: string;
    school: string;
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Название школы',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Сайт школы',
      dataIndex: 'web_pages',
      key: 'school',
    },
    
  ];

  const limit: number = 10;
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();

  const getUniversity = async (page: number, limit: number, offset: number) => {
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`)
    setDataSource(response.data);    
  }

  useEffect(() => {
    getUniversity(page, limit, offset)
  })

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
      <div className="pagination">
        <Button onClick={() => {setPage(page - 1); setOffset(offset - 10)}} disabled={offset === 1}>Назад</Button>
        <p className="pagination__page">{page}</p>
        <Button onClick={() => {setPage(page + 1); setOffset(offset + 10)}}>Вперед</Button>
      </div>
    </>
  )
}

export default App;
