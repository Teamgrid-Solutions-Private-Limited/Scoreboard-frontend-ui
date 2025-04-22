import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // <-- Make sure this is imported

const CustomizedDataGrid = ({ type, rows, loading }) => {
    const getBorderColor = (party) => {
        if (!party) return "gray";
        const lowerParty = party.toLowerCase();
        if (lowerParty === "republican") return "#dd3333";
        if (lowerParty === "democrat") return "#1e73be";
        return "gray";
    };
    
    const formatDistrict = (district) => {
        if (!district) return "";
      
        const [prefix, statePart] = district.split(",");
        const stateName = statePart?.trim() || "";
      
        // Handle state initials logic
        let stateInitials = "";
        const stateWords = stateName.split(" ");
        if (stateWords.length > 1) {
          // Multiple words: take first letter of each
          stateInitials = stateWords.map(word => word.charAt(0).toUpperCase()).join("");
        } else {
          // Single word: take first 2 letters capitalized
          stateInitials = stateName.substring(0, 2).toUpperCase();
        }
      
        // Extract district number from the prefix (e.g., "Congressional District 3")
        const districtMatch = prefix.match(/District\s*(\d+)/i);
        const districtNumber = districtMatch ? districtMatch[1] : "";
      
        return `${stateInitials}-${districtNumber}`;
      };
      
      


    const columns =
        type === "senator"
            ? [
                {
                    field: "name",
                    headerName: "Senator",
                    minWidth: 400,
                    renderCell: (params) => (
                        <Link to={`/senator/${params.row._id}`} sx={{ textDecoration: "none", }}>
                            <Typography
                                sx={{
                                    color: getBorderColor(params.row.party),
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    display: 'inline-block',
                                    py: "8px",
                                    "&:hover": {
                                        opacity: 0.6,
                                    },
                                    "&:focus": {
                                        outline: "none",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                {params.row.name}
                            </Typography>
                        </Link>
                    ),
                    cellClassName: "senator-name-cell",
                },
                { field: "state", headerName: "State", minWidth: 300 },
                {
                    field: "party",
                    headerName: "Party",
                    minWidth: 150,
                    valueGetter: (params) =>
                        params ? params.charAt(0).toUpperCase() + params.slice(1).toLowerCase() : "N/A",
                },
                {
                    field: "rating",
                    headerName: "Rating",
                    minWidth: 145,
                    renderCell: (params) => params.row.rating || "N/A",
                },
            ]
            : type === "representative"
                ? [
                    { field: "name", headerName: "Representative", minWidth: 400 ,
                        renderCell:(params)=>(
                            <Link
                            to={`/representative/${params.row._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography sx={{
                                color: getBorderColor(params.row.party),
                                fontWeight: "600",
                                fontSize: "14px",
                                display: 'inline-block',
                                py: "8px",
                                "&:hover":{
                                    opacity:.6
                                }
                            }}>
                                {params.row.name}
                            </Typography>
                            </Link>
                        )

                    },
                    { field: "district", headerName: "District", minWidth: 300 ,
                    valueGetter:(params)=> params?formatDistrict(params) :"N/A"
                    },
                    {
                        field: "party",
                        headerName: "Party",
                        minWidth: 150,
                        valueGetter: (params) =>
                            params ? params.charAt(0).toUpperCase() + params.slice(1).toLowerCase() : "N/A",
                    },
                    {
                        field: "rating",
                        headerName: "Rating",
                        minWidth: 145,
                        renderCell: (params) => params?.row?.rating || "N/A",
                    },
                ]
                : [
                    { field: "date", headerName: "Date", minWidth: 150 },
                    { field: "bill", headerName: "Bill", minWidth: 300 },
                    { field: "billsType", headerName: "Type", minWidth: 150 },
                ];

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <DataGrid
    rows={rows}
    columns={columns}
    getRowId={(row) => row._id}
    loading={loading}
    rowHeight={38}
    sx={{
        
        // Main container styling
        "& .MuiDataGrid-main": {
            overflow: "hidden",
        },
        // Virtual scroller (content area)
        "& .MuiDataGrid-virtualScroller": {
            overflow: "hidden !important",
            marginRight: "0 !important", // Remove right margin that might cause scrollbar
        },
        // Vertical scrollbar
        "& .MuiDataGrid-virtualScrollerContent": {
            width: "100% !important", // Ensure content takes full width
        },
        // Scrollbar track
        "& .MuiDataGrid-virtualScrollerRenderZone": {
            width: "100% !important", // Ensure render zone takes full width
        },
        // Hide scrollbar track completely
        "& .MuiDataGrid-scrollbar--vertical": {
            display: "none !important",
            width: "0 !important",
        },
        // Column headers
        "& .MuiDataGrid-columnHeaders": {
            height: "38px",
            minHeight: "38px !important",
            color: "#333333",
            "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "700 !important",
                fontSize: "14px",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            },
            "& .MuiDataGrid-columnHeader": {
                height: "38px",
                backgroundColor: "#d2e5f7",
            },
            "& .MuiDataGrid-columnHeaderRow": {
                height: "38px !important",
                
            },
        },
       "& .MuiDataGrid-scrollbar MuiDataGrid-scrollbar--horizontal": {
              overflowY: "none",
            },
            "& .MuiDataGrid-row--borderBottom": {
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              overflow: "hidden",
            },
          
          // Border settings for specific cells and headers
          "& .MuiDataGrid-cell[data-field='name']": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-cell[data-field='state']": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-cell[data-field='party']": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-cell[data-field='district']": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-columnHeader[data-field='name']": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-columnHeader[data-field='state']": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-columnHeader[data-field='party']": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-columnHeader[data-field='district']": {
            borderRight: "1px solid #e0e0e0",
          },

          // Custom header row height and background color
          // Disable row hover effects completely

          "& .MuiDataGrid-cell:focus": {
            outline: "none", // Removes focus outline from cells
            background: "none",
          },
          "& .senator-name-cell": {
            "&:focus": {
              outline: "none !important", // Removes focus outline for senator name column
            },
            "&:focus-within": {
              outline: "none !important",
            },
          },
    }}
    componentsProps={{
        root: {
            style: {
                overflow: "hidden", // Additional overflow control
            },
        },
    }}
    hideFooter // Add this if you don't need pagination controls
    autoHeight // This makes the grid height fit its content
/>
    </div>
  );
};

export default CustomizedDataGrid;
