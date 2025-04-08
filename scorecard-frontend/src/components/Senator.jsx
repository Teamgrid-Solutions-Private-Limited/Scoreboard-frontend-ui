import React from 'react'

const Senator = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>

                <TopBar />
                <AppHeaderBar />
                <RightStickyTab />

                <Box
                    component="main"
                    sx={() => ({
                        // flexGrow: 1,
                        // flexGrow: 1,
                        overflowX: "hidden",
                     
                    })}
                >

                    <Box sx={{
                        pt: { xs: "10px", md: '180px' }, // <-- Adds space below the fixed header (adjust height as needed)
                        // mx: 4,
                        // pb: 8,
                        // width: "100%"
                    }}>
                        <SenatorTopImg />
                    </Box>
                    <Stack
                        spacing={3}
                        sx={{
                            // alignItems: "start",
                            mx: 31.7,
                            justifyContent: "center",
                            paddingX: "4px",
                            width: "66%",
                            overflowX: "hidden",
                            pb: 5,
                            mt: { xs: 8, md: -2 },
                        }}
                    >
                    </Stack>
                </Box>
            </Box>

        </>
    )
}

export default Senator