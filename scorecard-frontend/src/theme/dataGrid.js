import { createTheme } from '@mui/material/styles';

export const dataGridTheme = createTheme({
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    overflow: "hidden",
                      // Hide vertical scrollbar

                    '& .odd-row': {
                        backgroundColor: '#ffffff',

                    },
                    '& .even-row': {
                        backgroundColor: '#f9f9f9',

                    },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: 'unset !important', // <-- disables MUI's default hover
                    },
                    '& .even-row:hover': {
                        backgroundColor: '#f9f9f9 !important', // <-- forces zebra bg on hover
                    },
                    '& .odd-row:hover': {
                        backgroundColor: '#ffffff !important',
                    },
                    // Column-specific borders
                    '& .MuiDataGrid-cell[data-field="name"]': {
                        borderRight: "1px solid #e0e0e0",
                    },
                    '& .MuiDataGrid-cell[data-field="state"]': {
                        borderRight: "1px solid #e0e0e0",
                    },
                    '& .MuiDataGrid-cell[data-field="party"]': {
                        borderRight: "1px solid #e0e0e0",
                    },

                    // Header styles
                    '& .MuiDataGrid-columnHeaders': {
                        color: "black",
                        overflow: "hidden",
                        backgroundColor: '#d2e5f7',
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: "700 !important",
                            fontSize: "14px",
                            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        },
                    },

                    // Cell focus styles
                    '& .MuiDataGrid-cell:focus': {
                        outline: "none",
                    },
                    '& .senator-name-cell': {
                        '&:focus, &:focus-within': {
                            outline: 'none !important',
                        },
                    },
                },
            },
            defaultProps: {
                disableSelectionOnClick: true,
                disableColumnFilter: true,
                disableColumnSelector: true,
                disableDensitySelector: true,
                disableColumnResize: true,
                disableRowSelectionOnClick: true,
                hideFooter: true,
                rowHeight: 38,
                getRowClassName: (params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row',
            },
        },
    },
});
