import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import Lottie from 'react-lottie';
import animationDevelop from "../assets/lotties/developProgramming.json";
import { MessageDev } from "../constantes/constantes";




function SaludoBienvenida() {


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
        <Box sx={{}}>
            {mobile ?
                <Box sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>

                    <Box sx={{}}>
                        <Typography variant={mobile ? "h3" : 'h2'} style={{ textAlign: 'center', fontWeight: 500, marginTop: mobile ? 20 : 50 }} className="animate__animated animate__backInLeft">
                            Hola, soy Luciano Armoa
                        </Typography>

                        <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 100, marginTop: 5 }} className="animate__animated animate__backInRight">
                            {MessageDev}
                        </Typography>
                    </Box>

                    <div className="animate__animated animate__backInRight">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: animationDevelop,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }}
                            height={mobile ? '50%' : '50vh'}
                            width={mobile ? '90%' : '50vh'}
                        />
                    </div>
                </Box>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>

                    <Box sx={{
                        width: '50%',
                    }}>
                        <Typography variant={mobile ? "h3" : 'h2'} style={{ textAlign: 'center', fontWeight: 500, marginTop: mobile ? 20 : 50 }} className="animate__animated animate__backInLeft">
                            Hola, soy Luciano Armoa
                        </Typography>

                        <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 100, marginTop: 5 }} className="animate__animated animate__backInRight">
                            {MessageDev}
                        </Typography>
                    </Box>

                    <div className="animate__animated animate__backInRight">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: animationDevelop,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }}
                            height={mobile ? '50%' : '50vh'}
                            width={mobile ? '90%' : '50vh'}
                        />
                    </div>
                </Box>
            }
        </Box>
    );
}

export default SaludoBienvenida;