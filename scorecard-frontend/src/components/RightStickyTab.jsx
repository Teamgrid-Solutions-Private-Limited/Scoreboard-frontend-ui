import { Box, Typography ,AppBar} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function RightStickyTab() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "40%",
        right: 0,
        zIndex: 9999,
        backgroundColor: "#c79c3c", // golden color
        color: "white",
        width: "40px",
        height:"130px",
        padding: "9px 0px",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        textAlign: "center",
        cursor: "pointer",
        alignItems:"center",
        display:"flex",
        justifyContent:"center"
      }}
    >
      <Typography
        sx={{
          fontFamily: "Verdana, Geneva, sans-serif",
          fontSize: "14px",
        //   fontWeight: 600,
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          display:"block"
          
        }}
      >
        Ways to Give
        <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
      </Typography>
    </Box>
  );
}
