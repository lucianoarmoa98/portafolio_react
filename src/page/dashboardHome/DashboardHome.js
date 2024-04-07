import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../components/SkeletonLoading";
import { BackdropStyle } from "../../styles/styles";
import { DatasKills, ExperienciaLaboral, MessageDev, servicios } from "../../constantes/constantes";
import Lottie from 'react-lottie';
import animationDevelop from "../../assets/lotties/developProgramming.json";
import '../../styles/AppCss.css'
import HabilidadesCustom from "../../components/HabilidadesCustom";
import ExperienciasCustom from "../../components/ExperienciasCustom";
import SaludoBienvenida from "../../components/SaludoBienvenida";
import NosotrosComponents from "../../components/NosotrosComponents";




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
            <Container sx={{marginBottom: 10}} style={{
                //agregar linear gradient
                // backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
            }}>
                <SaludoBienvenida />

                <NosotrosComponents />

                <ExperienciasCustom data={servicios} mobile={mobile} />

                {/* <HabilidadesCustom data={DatasKills} mobile={mobile} /> */}
            </Container>
        </HeaderCustom>
    );
}

export default DashboardHome;