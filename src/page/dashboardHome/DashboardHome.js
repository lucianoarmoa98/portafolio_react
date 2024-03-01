import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../components/SkeletonLoading";
import { BackdropStyle } from "../../styles/styles";
import { DatasKills, MessageDev } from "../../constantes/constantes";




function DashboardHome() {
    const [texto, setTexto] = useState('');
    const [cargando, setCargando] = useState(false);

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
        <HeaderCustom>
            <Container sx={{
                marginTop: 10,
                // marginBottom: 20
            }}>
                <Typography variant="h3" style={{ textAlign: 'center' }}>
                    Hola, soy Luciano Armoa
                </Typography>

                <Typography variant="body1" style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
                    {MessageDev}
                </Typography>


                <Typography variant="h5" style={{ textAlign: 'center' }}>
                    Mis habilidades
                </Typography>

                {mobile ?
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}>
                        {
                            DatasKills.map((item, index) => {
                                return (
                                    <Box key={index} sx={{
                                        padding: 2,
                                        marginBottom: 5,
                                        transition: 'transform 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }

                                    }}>
                                        <img src={item.image} alt={item.name} style={{ ...  (mobileStyle), pointerEvents: 'none' }} draggable="false" />
                                    </Box>
                                )
                            })
                        }
                    </Box>

                    :
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        marginTop: 5,
                    }}>

                        {
                            DatasKills.map((item, index) => {
                                return (
                                    <Box key={index} sx={{
                                        padding: 2,
                                        transition: 'transform 0.3s', // Añadir transición solo para la propiedad transform
                                        '&:hover': {
                                            transform: 'scale(1.1)' // Aumentar el tamaño en un 10% al pasar el cursor
                                        }
                                    }}>
                                        <img src={item.image} alt={item.name} style={desktopStyle} draggable="false" />
                                    </Box>
                                )
                            })
                        }
                    </Box>
                }

            </Container>

            {/* <Categorias /> */}

            <BackdropStyle open={cargando}>
                <CircularProgress color="inherit" />
            </BackdropStyle>
        </HeaderCustom>
    );
}

export default DashboardHome;