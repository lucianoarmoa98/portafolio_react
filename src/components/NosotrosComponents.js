import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import animationDevelop from "../assets/lotties/developProgramming.json";
import { MessageDev, Nosotros } from "../constantes/constantes";




function NosotrosComponents() {


    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    // useEffect(() => {
    //     let texto = '';
    //     let i = 0;

    //     const interval = setInterval(() => {
    //         if (i < MessageDev.length) {
    //             texto += MessageDev.charAt(i);
    //             setTexto(texto);
    //             i++;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 50);
    // }, []);





    const mobileStyle = {
        borderRadius: 10,
        height: 100,
        width: 80,
        objectFit: 'contain'
    };

    const desktopStyle = {
        borderRadius: 10,
        height: 90,
        width: 90,
        objectFit: 'contain',
    };



    return (
        <Box sx={{ marginTop: 5 }}>
            {mobile ?
                <Box sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eaebef',
                    padding: 3,
                    borderRadius: 5,
                }}
                    className="animate__animated animate__backInLeft"
                >

                    <Box sx={{}}>
                        <Typography variant={mobile ? "h3" : 'h2'} style={{ textAlign: 'center', fontWeight: 500, marginTop: mobile ? 20 : 50 }}>
                            Acerca de Nosotros
                        </Typography>

                        <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 100, marginTop: 5 }}>
                            {Nosotros.titlePrincipal}
                        </Typography>
                    </Box>

                </Box>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'rgba(40, 0, 0, 0.1)',
                    backgroundColor: '#eaebef',
                    padding: 10,
                    borderRadius: 5,
                }}
                    className="animate__animated animate__backInLeft"
                >

                    <Box sx={{
                        // width: '50%',
                    }}>
                        <Typography variant={'h3'} style={{ textAlign: 'center', fontWeight: 500 }}>
                            Acerca de Nosotros
                        </Typography>

                        <Typography variant="h5" style={{ textAlign: "left", fontWeight: 100, marginTop: 5 }}>
                            {Nosotros.titlePrincipal}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default NosotrosComponents;