import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, ListItemText, ListItemIcon, ListItem, List, Divider, Drawer, useTheme, useMediaQuery, Tabs, Tab, Button, Avatar, Box, styled, CssBaseline, Badge, Typography } from '@mui/material';
import { AccountCircle, Add, Brightness4, CardGiftcard, ChevronLeft, ChevronRight, DarkMode, Home, HomeOutlined, Instagram, LinkedIn, LockOpen, MenuSharp, Payment, Person, Phone, ShoppingCart, ShoppingCartCheckout, WhatsApp, } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { COLOR_BACKGROUND_VERDER_AGUA, COLOR_BACKGROUND_VERDE_CLARO, DrawerHeader, ICON_COLOR_BLACK, TEXT_HEADER } from '../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/empresas/logoVerde.png';
import Footers from './Footers';
import { setNumberOrders, setTabPosition, setToken } from '../redux/actions/action';
import { Helmet } from 'react-helmet';

const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

function HeaderCustom({ children, id }) {
    const [open, setOpen] = useState(false);
    const [stateMoodNocturno, setStateMoodNocturno] = useState(false);

    const stateOrderNumber = useSelector(state => state.reducerGlobal.numberOrders);


    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    let history = useNavigate();
    let location = window.location.pathname;
    const dispatch = useDispatch();

    let dataAdmin = localStorage.getItem('dataUser');

    useEffect(() => {
        //obtener el numero de ordenes del localstorage
        let numberOrders = localStorage.getItem('dataCarrito');
        if (numberOrders !== null) {
            //pasar a objeto
            let numberOrdersObject = JSON.parse(numberOrders);
            //setear el valor del state global
            dispatch(setNumberOrders(numberOrdersObject.length))
        }


    }, []);

    const handleMoodNocturno = () => {
        setStateMoodNocturno(!stateMoodNocturno);
    }


    //funcion para retornar titulo de la pagina, dependiendo de la ruta
    const handleTitle = () => {
        if (location === '/') {
            return 'Inicio';
        } else if (location === '/app/servicios') {
            return 'Servicios';
        } else if (location === '/app/contacto') {
            return 'Contacto';
        } else {
            return 'Inicio';
        }
    }









    //-------------------------------rutas
    const handleHome = () => {
        history('/');
    }

    const handleServicios = () => {
        history('/app/servicios');
    }

    const handleContacto = () => {
        history('/app/contacto');
    }

    const handleCarrito = () => {
        history('/incentiva-ecommerce-web/carrito');
    }




    //-------------------------------rutas externas
    const handleUrlInstagram = () => {
        let url = 'https://www.instagram.com/incentivapy__';

        //abrir en una nueva pestaña
        window.open(url, '_blank');
    }

    const handlePhoneWhatsApp = () => {
        let url = 'https://api.whatsapp.com/send?phone=595976308922&text=Hola%20Incentiva%20Py';

        //abrir en una nueva pestaña
        window.open(url, '_blank');
    }

    const handleClose = () => {
        localStorage.removeItem('dataUser');
        dispatch(setToken(null));
        history('/');
        window.location.reload();
    };


    //-----------------------------abrir el menu de navegacion
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    //-----------------------------cerrar el menu
    const handleDrawerClose = () => {
        setOpen(false);
    };




    const arrayMenu = [
        {
            id: 1,
            name: 'Inicio',
            icon: <HomeOutlined style={{ color: ICON_COLOR_BLACK }} />,
            action: handleHome
        },
        {
            id: 2,
            name: 'Servicios',
            icon: <Payment style={{ color: ICON_COLOR_BLACK }} />,
            action: handleServicios
        },
        {
            id: 3,
            name: 'Contacto',
            icon: <Phone style={{ color: ICON_COLOR_BLACK }} />,
            action: handleContacto
        },
    ]

    //funcion para identificar si esta dentro de un dispositivo movil
    const isMobile = () => {
        return isMatch;
    }

    return (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            <Helmet>
                <title>{handleTitle()}</title>
                <meta name="description" content="Incentiva Groups Py" />
                <meta name="keywords" content="Incentiva Groups Py" />
                <meta name="author" content="Incentiva Groups Py" />
                <meta name="theme-color" content="#008f68" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#008f68" />
                <meta name="msapplication-navbutton-color" content="#008f68" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes"></meta>
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="revisit-after" content="1 days" />
                <meta name="language" content="Spanish" />
            </Helmet>
            <CssBaseline />

            {/* <AppBar position="fixed" style={{
                backgroundColor: 'white',
            }}> */}
            <div style={{
                // backgroundColor: '#f8f9fa',
            }}>
                <Toolbar style={{
                    backgroundColor: '#f8f9fa',
                    // backgroundColor: 'blue',
                    // height: 150,
                    height: isMatch ? 100 : 150,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                    {isMatch ? (
                        <Box sx={{ flexGrow: 1 }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <div style={{}}>
                                    <img src={logo} alt="logo" style={{
                                        // width: 250,
                                        height: 200,
                                    }} />
                                    {/* <Typography variant="body1" noWrap style={{ color: "black", fontWeight: 'bold' }}>
                                        Incentiva Groups
                                    </Typography> */}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    marginTop: -50
                                }}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        edge="start"
                                    >
                                        <MenuSharp style={{ color: ICON_COLOR_BLACK }} />
                                    </IconButton>
                                </div>


                            </div>



                        </Box>
                    ) : (

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{
                                        width: 300,
                                        // height: 70,
                                    }}
                                />
                                {/* <div style={{}}>
                                    <Typography variant="body1" noWrap style={{ color: "black", fontWeight: 'bold' }}>
                                        Incentiva Groups
                                    </Typography>
                                </div> */}


                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Button color="success" style={{ color: TEXT_HEADER }} onClick={handleHome}>Inicio</Button>

                                    <Button color="success" style={{ color: TEXT_HEADER }} onClick={handleServicios}>
                                        Servicios
                                    </Button>

                                    <Button color="inherit" style={{ color: TEXT_HEADER }} onClick={handleContacto}>
                                        Contacto
                                    </Button>
                                </Box>

                            </Box>
                        </div>
                    )}
                </Toolbar>
            </div>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: COLOR_BACKGROUND_VERDE_CLARO
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
            >
                <DrawerHeader style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                }}>

                    <IconButton onClick={handleDrawerClose} style={{ color: TEXT_HEADER }} >
                        {theme.direction === 'ltr' ? <ChevronLeft style={{ color: ICON_COLOR_BLACK }} /> : <ChevronRight sstyle={{ color: ICON_COLOR_BLACK }} />}
                    </IconButton>
                    
                    <img src={logo} alt="logo" style={{ height: 120 }} />

                    <div />
                </DrawerHeader>
                <Divider />

                {arrayMenu.map((item, index) => (
                    <List key={item.id} style={{}}>

                        <ListItem onClick={item.action} >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />

                        </ListItem>
                        {index === arrayMenu.length - 1 ? null : <Divider />}
                    </List>
                ))}
            </Drawer>

            <Main open={open} onClick={handleDrawerClose}>
                {/* <DrawerHeader /> */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    background: '#f8f9fa',
                    //agregar fondo de pantalla
                    // backgroundImage: 'linear-gradient(120deg, #daf3ff 0%, #fef1f7 100%)',
                }}>
                    {children}
                </div>
                <Footers handlePhoneWhatsApp={handlePhoneWhatsApp} />
            </Main>
        </div>
    );
}

export default HeaderCustom;