
import { TablePagination, useTheme } from '@mui/material';
import React from 'react';

interface TableCustomizePaginationProps {
    handlePage: (e: any) => void;
    handleRowsPerPage: (e: any) => void;
    page: number;
    rowsPerPage: number;
    rows: any;
}

const TableCustomizePagination = ({ rows, page, rowsPerPage, handlePage, handleRowsPerPage }: TableCustomizePaginationProps) => {
    const handleChangePage = (event: unknown, newPage: number) => {
        handlePage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleRowsPerPage(parseInt(event.target.value, 10));
        handlePage(0);
    };

    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={<span>Hiển thị số dòng</span>}
            labelDisplayedRows={({ from, to, count }: any) => <span>{from}-{to} trong số {count}</span>}
        />
    )
}
export default TableCustomizePagination