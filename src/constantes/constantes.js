import reactImage from "../assets/iconsPortafolioKills/react-2.svg";
import reactSecundaryImage from "../assets/react.svg";
import mysqlImage from "../assets/iconsPortafolioKills/mysql-2.svg";
import nodejsImage from "../assets/iconsPortafolioKills/nodejs-1.svg";
import springImage from "../assets/iconsPortafolioKills/spring-3.svg";
import firebaseImage from "../assets/iconsPortafolioKills/firebase-1.svg";
import javaImage from "../assets/iconsPortafolioKills/java.svg";
import javascriptImage from "../assets/iconsPortafolioKills/javascript-1.svg";
import gitImage from "../assets/iconsPortafolioKills/git-icon.svg";
import gitHubImage from "../assets/iconsPortafolioKills/github-icon-1.svg";
import naturaImage from "../assets/empresas/natura.png";
import indufarImage from "../assets/empresas/indufar.png";
import omaImage from "../assets/empresas/oma.jpg";
import cabalImage from "../assets/empresas/cabal.png";
import animationConsultoria from "../assets/lotties/consultoria.json";
import animationMktdigital from "../assets/lotties/mktdigital.json";
import animationProgramador from "../assets/lotties/programador.json";

export const MessageDev = "Transformando el mundo del Marketing Digital y Desarrollo de Sistemas";

export const Nosotros = {
    "titlePrincipal": "Fundada en 2023, Incentiva Groups es líder en marketing digital y desarrollo de sistemas. Nuestra misión es impulsar el crecimiento y expansión de las empresas en el mundo digital.",
    "titleSecundary": "Nuestra misión es ayudar a las empresas a crecer y expandirse en el mundo digital.",
    "description": "Con un equipo de profesionales altamente capacitados, ofrecemos soluciones innovadoras y creativas para satisfacer las necesidades de nuestros clientes. Nuestros servicios incluyen marketing digital, desarrollo de aplicaciones web y móviles, diseño gráfico y mucho más. En Incentiva Groups, nos esforzamos por brindar un servicio excepcional y resultados sobresalientes en cada proyecto que emprendemos. ¡Únete a nosotros y descubre el poder del marketing digital!"
};

export const porQueElegirnos = {
    experienciaYExpertise: "Nuestro equipo está compuesto por profesionales altamente capacitados y con amplia experiencia en sus respectivos campos.",
    innovacionConstante: "Estamos siempre al tanto de las últimas tendencias y tecnologías emergentes para ofrecer soluciones de vanguardia a nuestros clientes.",
    compromisoConLaExcelencia: "Nos esforzamos por la excelencia en todo lo que hacemos, desde el diseño hasta la implementación y el seguimiento de resultados."
};



export const servicios = [
    {
        nombre: "Marketing Digital",
        imagen: animationMktdigital,
        colorFondo: "#FFC107", // Amarillo
        servicios: [
            "Estrategias de Marketing en Redes Sociales",
            "Optimización de Motores de Búsqueda (SEO)",
            "Publicidad en Línea (SEM)",
            "Marketing de Contenidos"
        ]
    },
    {
        nombre: "Desarrollo de Sistemas",
        imagen: animationProgramador,
        colorFondo: "#2196F3", // Azul
        servicios: [
            "Diseño y Desarrollo de Sitios Web",
            "Aplicaciones Móviles Personalizadas",
            "Sistemas de Gestión de Contenidos (CMS)",
            "Desarrollo de E-commerce"
        ]
    },
    {
        nombre: "Consultoría y Estrategia",
        imagen: animationConsultoria,
        colorFondo: "#4CAF50", // Verde
        servicios: [
            "Análisis de Mercado y Competencia",
            "Planificación Estratégica Digital",
            "Auditorías de Sitios Web y SEO",
            "Capacitación y Talleres"
        ]
    }
];






export const DatasKills = [
    {
        "name": "React JS",
        "image": reactSecundaryImage,
        "id": "react_js"
    },
    {
        "name": "Java",
        "image": javaImage,
        "id": "java"
    },
    {
        "name": "JavaScript",
        "image": javascriptImage,
        "id": "java_script"
    },
    {
        "name": "MySQL",
        "image": mysqlImage,
        "id": "my_sql"
    },
    {
        "name": "Node.js",
        "image": nodejsImage,
        "id": "node_js"
    },
    {
        "name": "Spring Boot",
        "image": springImage,
        "id": "spring_boot"
    },
    {
        "name": "Firebase",
        "image": firebaseImage,
        "id": "firebase"
    },
    {
        "name": "Git",
        "image": gitImage,
        "id": "git"
    },
    {
        "name": "GitHub",
        "image": gitHubImage,
        "id": "git_hub"
    }
];

export const ExperienciaLaboral = [
    {
        "id": "1",
        "name": "Marketing Digital",
        "description": "Desarrollo de aplicaciones web y QA de aplicaciones web.",
        "date": "2020 - 2021",
        "company": "Software Natura Paraguay S.A.",
        "image": naturaImage,
        "code": "natura",
        "tecnologies": [
            {
                "name": "React JS",
                "image": reactImage
            },
            {
                "name": "JavaScript",
                "image": javascriptImage
            },
            {
                "name": "Node.js",
                "image": nodejsImage
            },
            {
                "name": "Firebase",
                "image": firebaseImage
            },
            {
                "name": "Git",
                "image": gitImage
            },
            {
                "name": "GitHub",
                "image": gitHubImage
            }
        ]
    },
    {
        "id": "2",
        "name": "Desarrollador de software",
        "description": "Desarrollo de aplicaciones web y móviles.",
        "date": "2021 - 2022",
        "company": "Indufar CISA",
        "image": indufarImage,
        "code": "indufar",
        "tecnologies": [
            {
                "name": "React JS",
                "image": reactImage
            },
            {
                "name": "Node.js",
                "image": nodejsImage
            },
            {
                "name": "Java",
                "image": javaImage
            },
            {
                "name": "MySQL",
                "image": mysqlImage
            },
            {
                "name": "Spring Boot",
                "image": springImage
            },
            {
                "name": "Git",
                "image": gitImage
            },
            {
                "name": "GitHub",
                "image": gitHubImage
            }
        ]
    },
    {
        "id": "3",
        "name": "Desarrollador de software",
        "description": "Desarrollo de aplicaciones web y móviles.",
        "date": "2022 - 2023",
        "company": "Desarrollos de software OMA S.A.",
        "image": omaImage,
        "code": "oma",
        "tecnologies": [
            {
                "name": "React JS",
                "image": reactImage
            },
            {
                "name": "Node.js",
                "image": nodejsImage
            },
            {
                "name": "MySQL",
                "image": mysqlImage
            },
            {
                "name": "Git",
                "image": gitImage
            },
            {
                "name": "GitHub",
                "image": gitHubImage
            }
        ]
    },
    {
        "id": "4",
        "name": "Desarrollador de software",
        "description": "Desarrollo de aplicaciones web y móviles.",
        "date": "Actualidad - 2023",
        "company": "Cabal Paraguay Ltda.",
        "image": cabalImage,
        "code": "cabal",
        "tecnologies": [
            {
                "name": "React JS",
                "image": reactImage
            },
            {
                "name": "Node.js",
                "image": nodejsImage
            },
            {
                "name": "Java",
                "image": javaImage
            },
            {
                "name": "MySQL",
                "image": mysqlImage
            },
            {
                "name": "Spring Boot",
                "image": springImage
            },
            {
                "name": "Git",
                "image": gitImage
            },
            {
                "name": "GitHub",
                "image": gitHubImage
            }
        ]
    }
];
