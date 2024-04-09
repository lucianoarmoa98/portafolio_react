import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import animationDevelop from "../assets/lotties/developProgramming.json";
import { MessageDev, Nosotros, porQueElegirnos } from "../constantes/constantes";




function MasInfoComponents() {


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




    console.log('mobile', mobile);




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
                    backgroundColor: '#abe2f5',
                    padding: 3,
                    borderRadius: 5,
                }}
                    className="animate__animated animate__backInLeft"
                >

                    <Box sx={{}}>
                        <Typography variant={mobile ? "h4" : 'h2'} style={{ textAlign: 'center', fontWeight: 500, marginTop: mobile ? 20 : 50 }}>
                            ¿Por qué Elegirnos?
                        </Typography>

                        <Typography variant="h6" style={{ textAlign: "left", marginTop: 5 }}>
                            <span style={{ fontWeight: 700 }}>Compromiso con la Excelencia:</span> {porQueElegirnos.compromisoConLaExcelencia} {"\n"}
                        </Typography>

                        <Typography variant="h6" style={{ textAlign: "left", marginTop: 5 }}>
                            <span style={{ fontWeight: 700 }}>Innovación Constante:</span> {porQueElegirnos.innovacionConstante}
                        </Typography>
                    </Box>

                </Box>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#abe2f5',
                    // background: 'linear-gradient(#76daff, #aee7ff, #76daff)',
                    padding: 5,
                    borderRadius: 5,
                }}
                    className="animate__animated animate__backInLeft"
                >

                    <Box sx={{
                        // width: '50%',
                    }}>
                        <Typography variant={'h3'} style={{ textAlign: 'center', fontWeight: 500 }}>
                            ¿Por qué Elegirnos?
                        </Typography>

                        <Typography variant="h5" style={{ textAlign: "left", marginTop: 5 }}>
                            <span style={{ fontWeight: 700 }}>Compromiso con la Excelencia:</span> {porQueElegirnos.compromisoConLaExcelencia} {"\n"}
                        </Typography>

                        <Typography variant="h5" style={{ textAlign: "left", marginTop: 5 }}>
                            <span style={{ fontWeight: 700 }}>Innovación Constante:</span> {porQueElegirnos.innovacionConstante}
                        </Typography>


                    </Box>
                </Box>
            }
        </Box>
    );
}

export default MasInfoComponents;