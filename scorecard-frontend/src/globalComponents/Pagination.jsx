import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const getPaginationItems = () => {
    const items = [];
  
    if (totalPages <= 7) {
      // Small page count: show all
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Always show first page
      items.push(1);
  
      if (currentPage <= 3) {
        // Show first few pages
        for (let i = 2; i <= 5; i++) {
          items.push(i);
        }
        items.push('...');
      } else if (currentPage >= totalPages - 4) {
        // Show last few pages
        items.push('...');
        for (let i = totalPages - 4; i < totalPages; i++) {
          items.push(i);
        }
      } else {
        // Middle pages
        items.push('...');
        for (let i = currentPage; i <= currentPage + 2; i++) {
          items.push(i);
        }
        items.push('...');
      }
  
      // Always show last page
      if (!items.includes(totalPages)) {
        items.push(totalPages);
      }
    }
  
    return items;
  };
  

  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== '...') {
      onPageChange(page - 1);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: "35px !important" }}>
      <Typography sx={{ fontSize: "14px", mt: 1, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
        Showing {currentPage * itemsPerPage + 1} to {Math.min((currentPage + 1) * itemsPerPage, totalItems)} of {totalItems} entries
      </Typography>
      
      <Box sx={{ display: "flex", mt: 1, border: "1px solid #ddd", margin: "20px 0px", borderRadius: "2px" }}>
        <Button 
          onClick={handlePrevious}
          // disabled={currentPage === 0}
          sx={paginationButtonStyles(currentPage === 0)}
        >
          Previous
        </Button>
        
        {getPaginationItems().map((item, i) => (
          item === '...' ? (
            <Button
              key={`ellipsis-${i}`}
              // disabled
              sx={ellipsisButtonStyles}
            >
              ...
            </Button>
          ) : (
            <Button
              key={item}
              onClick={() => handlePageClick(item)}
              sx={{
                ...pageNumberButtonStyles,
                backgroundColor: currentPage === item - 1 ? "#33a2e3" : "white",
                color: currentPage === item - 1 ? "white" : "#33a2e3",
                "&:hover": {
                  backgroundColor: currentPage === item - 1 ? "#337ab7" : "#f5f5f5",
                  borderRadius: 0,
                  borderRight: "1px solid #ddd",
                  boxShadow: "none", // <-- ADD THIS
                },
              }}
            >
              {item}
            </Button>
          )
        ))}     
        <Button
          onClick={handleNext}
          // disabled={currentPage >= totalPages - 1}
          sx={paginationButtonStyles(currentPage >= totalPages - 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

// Styles
const paginationButtonStyles = (disabled) => ({
  color: disabled ? "#777777" : "#337ab7",
  cursor: disabled ? "not-allowed" : "pointer",
  fontWeight: "400",
  fontSize: "18px",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  borderRadius: 0,
  paddingX: "13px",
  lineHeight: "1.52857143",
  textDecoration: 'none',
  backgroundColor: "white",
  textTransform: "none",
  borderRight: "1px solid #ddd",
  "&:hover": {
    borderRadius: 0,
    backgroundColor: "#f5f5f5",
    borderRight: "1px solid #ddd",
    boxShadow: "none", // <-- ADD THIS

  },
  "&:focus": {
    outline: "none",
    borderRadius: 0,
    boxShadow: "none", // <-- ADD THIS

  },
});

const ellipsisButtonStyles = {
  minWidth: "35px",
  padding: "6px 10px",
  borderRadius: 0,
  borderRight: "1px solid #ddd",
  cursor: "default",
  fontWeight: "400",
  fontSize: "16px",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  lineHeight: "1.5",
  textDecoration: 'none',
  textTransform: "none",
  "&:hover":{
    outline:"none",
    border:"none",
    boxShadow: "none",
    borderRight: "1px solid #ddd",

  },
  "&:focus":{
    outline:"none",
    border:"none",
    boxShadow: "none",
  }
};
const pageNumberButtonStyles = {
  minWidth: "35px",
  padding: "6px 10px",
  borderRadius: 0,
  borderRight: "1px solid #ddd",
  // border: "none", // add this to remove default border
  cursor: "pointer",
  fontWeight: "400",
  fontSize: "16px",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  lineHeight: "1.5",
  textDecoration: 'none',
  textTransform: "none",
  backgroundColor: "white",
  color: "#33a2e3",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#f5f5f5",
    border: "none",
    boxShadow: "none",
    outline: "none",
    borderRight: "1px solid #ddd",
  },

  "&:focus": {
    outline: "none",
    border: "none",
    boxShadow: "none",
    borderRight: "1px solid #ddd",

  },
};


export default Pagination;