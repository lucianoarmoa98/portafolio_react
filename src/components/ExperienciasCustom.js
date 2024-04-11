import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Container, Grid, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import { COLOR_BACKGROUND_BLANCO } from "../styles/styles";
import checkImage from "../assets/iconsPortafolioKills/check.png";
import Lottie from 'react-lottie';

function ExperienciasCustom({ data, mobile }) {


    const mobileStyle = {
        borderRadius: 10,
        height: 100,
        width: 80,
        objectFit: 'contain'
    };

    const mobileKillStyle = {
        borderRadius: 10,
        height: 50,
        width: 40,
        objectFit: 'contain'
    };

    const desktopStyle = {
        borderRadius: 10,
        height: 90,
        width: 90,
        objectFit: 'contain',
    };

    const desktopKillStyle = {
        borderRadius: 10,
        height: 30,
        width: 30,
        objectFit: 'contain',
    };



    return (
        <Box>
            <Box sx={{  }} className="animate__animated animate__backInLeft">
                <Typography variant={mobile ? "h4" : 'h3'} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Nuestros Servicios
                </Typography>
            </Box>

            {mobile ?
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                }}
                    className="animate__animated animate__backInRight"
                >
                    {
                        data.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    padding: 2,
                                    marginBottom: 5,
                                    // transition: 'transform 0.3s',
                                    // '&:hover': {
                                    //     transform: 'scale(1.1)'
                                    // },
                                    backgroundColor: COLOR_BACKGROUND_BLANCO,
                                    offset: 2,
                                    boxShadow: 3,
                                    //dar sombra
                                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                                    borderRadius: 5,
                                    marginBottom: 5,
                                    width: '100%',
                                }}>
                                    <Box sx={{

                                    }}>
                                        <Box sx={{
                                            //centrar imagen
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            {/* {item.code === 'natura' ?
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 130, height: 90, backgroundColor: '#973941', borderRadius: 10 }}>
                                                    <img src={item.image} alt={item.name} style={desktopStyle} draggable="false" />
                                                </div>
                                                :
                                                <img src={item.image} alt={item.name} style={desktopStyle} draggable="false" />}
                                        */}
                                            <Lottie
                                                options={{
                                                    loop: true,
                                                    autoplay: true,
                                                    animationData: item.imagen,
                                                    rendererSettings: {
                                                        preserveAspectRatio: "xMidYMid slice"
                                                    }
                                                }}
                                                height={150}
                                                width={150}
                                            />

                                        </Box>


                                        <Box>
                                            <Typography variant="h5" style={{ textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>
                                                {item.nombre}
                                            </Typography>
                                            {/* <Typography variant="body1" style={{ textAlign: 'left', marginTop: 5 }}>
                                                {item.name}
                                            </Typography> */}
                                        </Box>




                                        <Box sx={{
                                            // display: 'flex',
                                            // flexWrap: 'wrap',
                                            // justifyContent: 'center',
                                            // alignContent: 'center',
                                            // alignItems: 'center',
                                        }}>
                                            {
                                                item.servicios.map((item, index) => {
                                                    return (
                                                        <Box key={index} sx={{
                                                            padding: 2,
                                                            transition: 'transform',
                                                            display: 'flex',
                                                            alignContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <img src={checkImage} alt={item.name} style={mobileKillStyle} draggable="false" />

                                                            <Typography variant="body1" style={{ textAlign: "left", marginLeft: 10 }}>
                                                                {item}
                                                            </Typography>
                                                        </Box>

                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>
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
                    marginTop: 3,
                }}
                    className="animate__animated animate__backInRight"
                >

                    {
                        data.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    padding: 2,
                                    transition: 'transform 0.3s', // Añadir transición solo para la propiedad transform
                                    '&:hover': {
                                        transform: 'scale(1.1)' // Aumentar el tamaño en un 10% al pasar el cursor
                                    },
                                    backgroundColor: COLOR_BACKGROUND_BLANCO,
                                    offset: 2,
                                    boxShadow: 3,
                                    //dar sombra
                                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                                    borderRadius: 5,
                                    width: 350,
                                    // height: 300,
                                    marginBottom: 5,
                                }}>
                                    <Box sx={{

                                    }}>
                                        <Box sx={{
                                            //centrar imagen
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            {/* {item.code === 'natura' ?
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 130, height: 90, backgroundColor: '#973941', borderRadius: 10 }}>
                                                    <img src={item.image} alt={item.name} style={desktopStyle} draggable="false" />
                                                </div>
                                                :
                                                <img src={item.image} alt={item.name} style={desktopStyle} draggable="false" />} */}
                                                 <Lottie
                                                options={{
                                                    loop: true,
                                                    autoplay: true,
                                                    animationData: item.imagen,
                                                    rendererSettings: {
                                                        preserveAspectRatio: "xMidYMid slice"
                                                    }
                                                }}
                                                height={150}
                                                width={150}
                                            />
                                        </Box>


                                        <Box>
                                            <Typography variant="h6" style={{ textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>
                                                {item.nombre}
                                            </Typography>

                                        </Box>


                                        <Box sx={{
                                            // display: 'flex',
                                            // flexWrap: 'wrap',
                                            // justifyContent: 'center',
                                            // alignContent: 'center',
                                            // alignItems: 'center',
                                        }}>
                                            {
                                                item.servicios.map((item, index) => {
                                                    return (
                                                        <Box key={index} sx={{
                                                            padding: 2,
                                                            transition: 'transform',
                                                            display: 'flex',
                                                            alignContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <img src={checkImage} alt={item.name} style={desktopKillStyle} draggable="false" />

                                                            <Typography variant="body1" style={{ textAlign: "left", marginLeft: 10 }}>
                                                                {item}
                                                            </Typography>
                                                        </Box>
                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            }

        </Box>
    )
}

export default ExperienciasCustom;