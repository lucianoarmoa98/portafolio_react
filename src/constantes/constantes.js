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

export const datosAdicionales = {
    "titleMobileDeveloper": "Transforma tu visión en una experiencia móvil cautivadora en iOS y Android. Simplifica tu alcance y destaca en todas partes con nuestras aplicaciones multiplataforma.",
    "titleMarketingDigital": "Potencia tu presencia digital con estrategias innovadoras y resultados tangibles. Desde SEO hasta SEM, maximizamos tu impacto en línea y hacemos que tu marca brille en cada plataforma.",
};



export const servicios = [
    {
        nombre: "Marketing Digital",
        imagen: animationMktdigital,
        code: "marketing_digital",
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
        code: "desarrollo_sistemas",
        servicios: [
            "Diseño y Desarrollo de Sitios Web",
            "Aplicaciones Móviles Personalizadas",
            "Sistemas de Gestión de Contenidos (CMS)",
            // "Desarrollo de E-commerce"
        ]
    },
    {
        nombre: "Consultoría y Estrategia",
        imagen: animationConsultoria,
        code: "consultoria_estrategia",
        servicios: [
            "Análisis de Mercado y Competencia",
            "Planificación Estratégica Digital",
            "Auditorías de Sitios Web y SEO",
            "Capacitación y Talleres"
        ]
    }
];

export const planesMarketingDigital = [
    {
      nombre: "Plan Básico",
      descripcion: "Ideal para pequeñas empresas o startups que buscan establecer su presencia en línea.",
      opciones: [
        "Diseño de sitio web básico",
        "Gestión de una red social",
        "Análisis mensual de métricas básicas"
      ],
      costo: "$500/mes"
    },
    {
      nombre: "Plan Medio",
      descripcion: "Perfecto para empresas en crecimiento que desean ampliar su alcance y atraer más clientes.",
      opciones: [
        "Diseño de sitio web personalizado",
        "Gestión de múltiples redes sociales",
        "Campañas de publicidad en línea",
        "Seguimiento y análisis de métricas avanzadas"
      ],
      costo: "$1000/mes"
    },
    {
      nombre: "Plan Empresas",
      descripcion: "Para empresas consolidadas que buscan una estrategia completa de marketing digital. Contacta a nuestro equipo para obtener un presupuesto personalizado.",
      opciones: [
        "Diseño de sitio web avanzado con funcionalidades personalizadas",
        "Gestión completa de presencia en redes sociales",
        "Publicidad en múltiples plataformas",
        "Análisis detallado de datos y estrategias de optimización continuas"
      ],
      costo: "Contáctanos"
    }
  ];
  

  export const planesDesarrolloSistemas = [
    {
      nombre: "Plan Básico",
      descripcion: "Perfecto para startups o pequeñas empresas que necesitan una presencia en línea básica.",
      opciones: [
        "Sitio web estático básico",
        "Diseño simple y funcionalidades limitadas",
        "Soporte técnico básico"
      ],
      costo: "$800"
    },
    {
      nombre: "Plan Medio",
      descripcion: "Ideal para empresas en crecimiento que requieren funcionalidades más avanzadas y personalizadas.",
      opciones: [
        "Desarrollo de sitio web dinámico",
        "Funcionalidades personalizadas según requerimientos",
        "Soporte técnico prioritario",
        "Integración con sistemas externos",
        "Capacitación para el uso del sitio web",
        "Mantenimiento mensual"
      ],
      costo: "$1500"
    },
    {
      nombre: "Plan Empresas",
      descripcion: "Para empresas establecidas que necesitan soluciones personalizadas y escalables. Contáctanos para obtener un presupuesto detallado.",
      opciones: [
        "Desarrollo de aplicaciones web y móviles",
        "Integraciones avanzadas de sistemas",
        "Soporte técnico premium y mantenimiento continuo",
        "Capacitación y asesoramiento personalizado",,
        "Auditorías de seguridad y rendimiento",
        "Optimización y escalabilidad",
        "Creación de aplicaciones móviles multiplataforma"
      ],
      costo: "Contáctanos"
    }
  ];

  
  export const planesConsultoriaEstrategia = [
    {
      nombre: "Plan Básico",
      descripcion: "Perfecto para startups o pequeñas empresas que necesitan orientación inicial en su estrategia digital.",
      opciones: [
        "Análisis de mercado básico",
        "Estrategia de marketing inicial",
        "Sesiones de consultoría mensuales"
      ],
      costo: "$500/mes"
    },
    {
      nombre: "Plan Medio",
      descripcion: "Ideal para empresas en crecimiento que requieren un enfoque más completo en su estrategia digital.",
      opciones: [
        "Análisis detallado de mercado y competencia",
        "Desarrollo de estrategia digital personalizada",
        "Sesiones de consultoría quincenales"
      ],
      costo: "$1000/mes"
    },
    {
      nombre: "Plan Empresas",
      descripcion: "Para empresas establecidas que buscan una consultoría estratégica integral. Contáctanos para un plan personalizado.",
      opciones: [
        "Auditorías exhaustivas de marketing y estrategias existentes",
        "Desarrollo de estrategias a largo plazo y tácticas de implementación",
        "Sesiones de consultoría personalizadas según las necesidades del cliente"
      ],
      costo: "Contáctanos"
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
