import React, { useEffect, useState } from "react";
import "../App.css";
import { Table, Button, Pagination } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

export interface StyledPaginationProps {
  ThemeColor?: string;
}

const PaginationPage = () => {
  interface DataType {
    country: string;
    name: string;
    school: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Страна",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Название школы",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Сайт школы",
      dataIndex: "web_pages",
      key: "school",
    },
  ];

  const PaginateContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-end;
    width: 100%;
    max-width: 200px;
    margin-top: 40px;
    height: 100%;
  `;

  const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-self: center;
    margin-top: 20px;
    width: 100%;
    min-height: 100px;
    height: 100%;
    margin-bottom: 40px;
  `;

  const StyledTable = styled(Table)`
    background-color: black;
    color: black;
  `;

  const StyledButton = styled(Button)`
    background-color: none;
  `;

  const limit: number = 10;
  const [page, setPage] = useState<number>(1);
  const offset: number = (page - 1) * limit;
  const [dataSource, setDataSource] = useState<DataType[]>();

  const getUniversity = async (page: number, limit: number, offset: number) => {
    const response = await axios.get(
      `http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`
    );
    setDataSource(response.data);
  };

  useEffect(() => {
    getUniversity(page, limit, offset);
  });

  return (
    <TableContainer>
      <h2>Список университетов</h2>
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <PaginateContainer>
        <StyledButton
          onClick={() => setPage((page) => page - 1)}
          disabled={offset === 1}
        >
          Назад
        </StyledButton>
        <p className="pagination__page">{page}</p>
        <Button onClick={() => setPage((page) => page + 1)}>Вперед</Button>
      </PaginateContainer>
    </TableContainer>
  );
};

export default PaginationPage;
