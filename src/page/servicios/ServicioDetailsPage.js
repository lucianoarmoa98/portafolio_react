import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../components/SkeletonLoading";
import { BackdropStyle } from "../../styles/styles";
import { DatasKills, ExperienciaLaboral, MessageDev, planesConsultoriaEstrategia, planesDesarrolloSistemas, planesMarketingDigital, servicios } from "../../constantes/constantes";
import Lottie from 'react-lottie';
import animationDevelop from "../../assets/lotties/developProgramming.json";
import '../../styles/AppCss.css'
import { useLocation, useParams } from 'react-router-dom';
import ServicioDetailsComponents from "../../components/ServicioDetailsComponents";



function ServicioDetailsPage() {
    const [cargando, setCargando] = useState(false);
    const [dataDetails, setDataDetails] = useState([]);
    const [titleInfo, setTitleInfo] = useState('');

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    let { id } = useParams();
    console.log("info data", id);

    //valido si el id viene "marketing_digital", "desarrollo_sistemas", "consultoria_estrategia"

    useEffect(() => {
        if (id === "marketing_digital") {
            setDataDetails(planesMarketingDigital);
            setTitleInfo("Marketing Digital");
        } else if (id === "desarrollo_sistemas") {
            setDataDetails(planesDesarrolloSistemas);
            setTitleInfo("Desarrollo de Sistemas");
        } else if (id === "consultoria_estrategia") {
            setDataDetails(planesConsultoriaEstrategia);
            setTitleInfo("Consultoria y Estrategia");
        } else {
            setDataDetails([]);
            setTitleInfo("");
        }
    }, [id]);





//   planesMarketingDigital
//   planesDesarrolloSistemas
//   planesConsultoriaEstrategia

    return (
        <HeaderCustom>
            <Container sx={{}} style={{}}>
                <div style={{ marginTop: 15 }}>
                    <ServicioDetailsComponents data={dataDetails} mobile={mobile} titleInfo={titleInfo}/>
                </div>
            </Container>
        </HeaderCustom>
    );
}

export default ServicioDetailsPage;