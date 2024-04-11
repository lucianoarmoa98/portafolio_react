import React, { useEffect, useState } from "react";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ContactoPage() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <HeaderCustom>
            <div style={{
                height: '100vh',
            }}>
                <Container sx={{}} style={{}}>
                    {mobile ? (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            padding: 5,
                            gap: 2,
                            background: 'linear-gradient(#989898, #656565, #7c7c7c)',
                            borderRadius: 5,
                            boxShadow: 2,
                            marginTop: 10,
                        }}>
                            <Typography variant="h4" component="h1" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#dddddd' }}>
                                Estamos a un mensaje de distancia
                            </Typography>

                            <Typography variant="h5" component="h2" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#dddddd' }}>
                                Si tienes alguna duda o pregunta, no dudes en contactarnos: <strong>
                                    <a href="mailto:incentivacallcenter@gmail.com" style={{ color: '#dddddd', fontSize: 20 }}>
                                        incentivacallcenter@gmail.com
                                    </a>
                                </strong>

                            </Typography>
                        </Box>
                    ) : (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            padding: 10,
                            gap: 2,
                            background: 'linear-gradient(#989898, #656565, #7c7c7c)',
                            borderRadius: 5,
                            boxShadow: 50,
                            marginTop: 10,
                        }}>
                            <Typography variant="h2" component="h1" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#dddddd' }}>
                                Estamos a un mensaje de distancia
                            </Typography>

                            <Typography variant="h5" component="h2" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#dddddd' }}>
                                Si tienes alguna duda o pregunta, no dudes en contactarnos: <strong>
                                    <a href="mailto:incentivacallcenter@gmail.com" style={{ color: '#dddddd' }}>
                                        incentivacallcenter@gmail.com
                                    </a>
                                </strong>
                            </Typography>
                        </Box>
                    )}
                </Container>
            </div>
        </HeaderCustom>
    )
}