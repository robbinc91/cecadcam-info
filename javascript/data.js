// Language translations
const translations = {
    en: {
        mission_subtitle: "Our mission is to provide high-quality undergraduate and postgraduate education and to apply our research to solving scientific-technical problems",
        mission_learn_more: "Learn More About Our Programs",
        programs_subtitle: "Comprehensive education in CAD/CAM technologies and engineering excellence",
        programs_undergraduate: "Undergraduate Studies",
        programs_postgraduate: "Postgraduate Studies",
        nav_about_menu: "About",
        nav_research_menu: "Research",
        nav_results_menu: "Results",
        nav_about_menu: "About",
        nav_research_menu: "Research",
        nav_results_menu: "Results",
        nav_publications: "Publications",
        nav_events: "Event Participation",
        publications_title: "Publications",
        events_title: "Event Participation",
        research_group_I: "Research Group I",
        research_group_II: "Research Group II",
        research_group_III: "Research Group III",
        journal_articles: "Journal Articles",
        book_chapters: "Book Chapters",
        scopus_indexed: "SCOPUS Indexed",
        publications_2025: "2025 Publications",
        event_participation: "Event Participation",
        conferences_2025: "2025 Conferences",
        presentations_count: "Presentations",
        conference_details: "Conference Details",
        presentation_authors: "Authors",
        robin_director: "Director of the Study Center",
        robin_specialty: "B.Sc. in Computer Science",
        main_title: "CAD/CAM Study Center",
        nav_about: "About",
        nav_mission: "Mission",
        nav_programs: "Programs",
        nav_team: "Team",
        nav_research: "Research",
        nav_projects: "Projects",
        nav_collaborations: "Collaborations",
        hero_title: "COMPUTER-AIDED DESIGN AND MANUFACTURING",
        hero_subtitle: "A leading Study Center with 40 years of experience developing engineering research projects that impact the university, the region, and the nation",
        hero_btn: "Learn More",
        about_title: "About Us",
        about_text1: "The CAD/CAM Study Center at the University of Holguín is the first and only center of its kind within Cuba's Ministry of Higher Education. Founded in 1985 as a research group, it became an official center in 1989.",
        about_text2: "Our initial mission was the development of mechanical engineering software for clients in national and international markets, including Colombia, Mexico, Spain, and Switzerland.",
        about_text3: "Today, we continue to be pioneers in engineering research and education, with a focus on CAD/CAM/CAE technologies.",
        mission_title: "Our Mission",
        mission_text: "Our mission is to provide high-quality undergraduate and postgraduate education and to apply our research to solving scientific-technical problems, all through a strong university-community partnership and a team of experts with solid scientific training in CAD/CAM/CAE technologies.",
        programs_title: "Academic Programs",
        programs_undergraduate: "Undergraduate Studies",
        programs_mechanical: "Mechanical Engineering",
        programs_civil: "Civil Engineering",
        programs_electrical: "Electrical Engineering",
        programs_postgraduate: "Postgraduate Studies",
        programs_masters: "Master's in CAD/CAM (Recognized for Excellence)",
        programs_phd: "PhD programs participation",
        programs_engineering: "Engineering Development (UHo)",
        programs_business: "Business Management (UHo)",
        programs_industrial: "Industrial Technology and Processes (UMatanzas)",
        team_title: "Our Team",
        research_title: "Research Conception",
        research_digital: "Digital Models",
        research_digital_text: "Numerical simulations, mathematical modeling, predictive analysis, and proactive risk management",
        research_physical: "Physical Models",
        research_physical_text: "Prototyping and testing of physical models for validation and improvement of designs",
        research_cyber: "Cyber-Physical Systems",
        research_cyber_text: "Integration of computational and physical components for advanced engineering solutions",
        experience_title: "Our Experience",
        experience_machinery: "Machinery Sector",
        experience_infrastructure: "Infrastructure Sector",
        experience_health: "Health Sector",
        experience_machinery_title: "Land Leveler for Rice Fields",
        experience_machinery_text: "Development of specialized machinery for agricultural applications, improving efficiency and productivity in rice cultivation.",
        experience_infrastructure_title: "Infrastructure Projects",
        experience_infrastructure_text: "Application of CAD/CAM technologies in the design and construction of infrastructure projects, ensuring precision and durability.",
        experience_health_title: "Healthcare Solutions",
        experience_health_text: "Development of medical devices and surgical models using advanced manufacturing techniques to improve patient care.",
        projects_title: "Research Projects",
        project1_title: "Disruptive Tools for Teaching Engineering",
        project1_desc: "Focused on Energy, the Environment, and Occupational Safety and Health: A View from the STEM Approach",
        project1_program: "Sectorial Program: Higher Education and Sustainable Development",
        project1_period: "2024-2026",
        project2_title: "Contributions to the Sustainability of Power Generator Sets",
        project2_desc: "Comprehensive diagnosis of the operation and maintenance process, defining failure causes, and developing maintenance policies",
        project2_program: "Territorial Program: Energy",
        project2_period: "2023-2024",
        project3_title: "Tropicalization of Wind Turbines",
        project3_desc: "Maintenance of cooling systems in wind turbines, CAE simulation of temperature behavior, and maintenance policy development",
        project3_program: "Territorial Program: Energy",
        project3_period: "2021-2023",
        project4_title: "Cuban Self-Ballasted Support",
        project4_desc: "Self-ballasted photovoltaic park installations for roofs or ground surfaces, with adjustable mounting design and safety accessories",
        project4_program: "Scientific Technical Service",
        project4_period: "2023-2024",
        project5_title: "Controller for the Computer-Assisted Operation and Maintenance of the Mayarí Power Plant",
        project5_desc: "Development of intelligent control systems for power plant operation and maintenance optimization",
        project5_program: "Territorial Program: Energy Transformation of Holguín Province",
        project5_period: "2025-2028",
        project6_title: "Vulnerability of Mining Sites to Subsidence Based on INSAR Technology",
        project6_desc: "Analysis and monitoring of mining areas using Interferometric Synthetic Aperture Radar technology",
        project6_program: "National Program: Basic and Natural Sciences",
        project6_period: "2021-2023",
        project7_title: "Geomatics-BIM Integration for Improving Project Management and Construction Control",
        project7_desc: "Integration of geomatics and Building Information Modeling for enhanced project management",
        project7_program: "Sectorial Program: Development of Systems and Technologies for Investment Optimization",
        project7_period: "2021-2025",
        project8_title: "Improvement of the CCA-6000 (CCA-5000M) Sugarcane Harvester",
        project8_desc: "Enhancement of sugarcane harvesting machinery for improved efficiency and productivity",
        project8_program: "Territorial Program: Industry in Cuba",
        project8_period: "2025-2028",
        project9_title: "Increasing the Structural and Energy Resilience of Houses with Lightweight Roofs",
        project9_desc: "Enhancing resistance of lightweight roof structures against extreme wind impacts",
        project9_program: "Sectorial Program: Integrated Disaster Risk Reduction in Cuba",
        project9_period: "2025-2028",
        project10_title: "Impact of Monumental Heritage on Tourism Development in Municipalities of Holguín",
        project10_desc: "Analysis of heritage sites' contribution to sustainable tourism development in the region",
        project10_program: "Territorial Program: Holguín, a Smart and Sustainable Tourist Destination",
        project10_period: "2025-2028",
        project11_title: "Transformation of Surgical Practice through Additive Manufacturing",
        project11_desc: "Incorporation of 3D printing technology in the production of surgical models for pediatric hospital",
        project11_program: "Collaboration Project: Research in Science and Technology for Human Development",
        project11_period: "2023-2025",
        project12_title: "Early Prediction of Motor Progression in Spinocerebellar Ataxias Using AI",
        project12_desc: "Development of artificial intelligence tools for early prediction of motor progression in neurological disorders",
        project12_program: "National Program: Neurosciences and Neurotechnology",
        project12_period: "2024-2026",
        collaborations_title: "International Collaborations",
        footer_about: "About Us",
        footer_about_text: "CAD/CAM Study Center at the University of Holguín, pioneering engineering research and education for over 40 years.",
        footer_links: "Quick Links",
        footer_about_link: "About Us",
        footer_programs_link: "Programs",
        footer_research_link: "Research",
        footer_projects_link: "Projects",
        footer_contact: "Contact",
        footer_follow: "Follow Us",
        footer_rights: "All Rights Reserved.",
        robin_bio: "Dr. Robin Cabeza-Ruiz is a distinguished expert in Computer Science with over 20 years of experience...",
        generic_bio: "A dedicated member of the CAD/CAM Study Center team, contributing to research and development."
    },
    es: {
        mission_subtitle: "Nuestra misión es ofrecer una educación de pregrado y posgrado de alta calidad y aplicar nuestra investigación para resolver problemas científico-técnicos",
        mission_learn_more: "Conozca Más Sobre Nuestros Programas",
        programs_subtitle: "Formación integral en tecnologías CAD/CAM y excelencia en ingeniería",
        programs_undergraduate: "Estudios de Pregrado",
        programs_postgraduate: "Estudios de Posgrado",
        nav_about_menu: "Acerca de",
        nav_research_menu: "Investigación",
        nav_results_menu: "Resultados",
        nav_about_menu: "Acerca de",
        nav_research_menu: "Investigación",
        nav_results_menu: "Resultados",
        nav_publications: "Publicaciones",
        nav_events: "Participación en Eventos",
        publications_title: "Publicaciones",
        events_title: "Participación en Eventos",
        research_group_I: "Grupo de Investigación I",
        research_group_II: "Grupo de Investigación II",
        research_group_III: "Grupo de Investigación III",
        journal_articles: "Artículos de Revista",
        book_chapters: "Capítulos de Libro",
        scopus_indexed: "Indexado en SCOPUS",
        publications_2025: "Publicaciones 2025",
        event_participation: "Participación en Eventos",
        conferences_2025: "Conferencias 2025",
        presentations_count: "Presentaciones",
        conference_details: "Detalles de la Conferencia",
        presentation_authors: "Autores",
        robin_director: "Director del Centro de Estudios",
        robin_specialty: "Lic. en Ciencias de la Computación",
        main_title: "Centro de Estudios CAD/CAM",
        nav_about: "Acerca de",
        nav_mission: "Misión",
        nav_programs: "Programas",
        nav_team: "Equipo",
        nav_research: "Investigación",
        nav_projects: "Proyectos",
        nav_collaborations: "Colaboraciones",
        hero_title: "DISEÑO Y FABRICACIÓN ASISTIDOS POR COMPUTADORA",
        hero_subtitle: "Un Centro de Estudios líder con 40 años de experiencia desarrollando proyectos de investigación en ingeniería que impactan la universidad, la región y la nación",
        hero_btn: "Más Información",
        about_title: "Acerca de Nosotros",
        about_text1: "El Centro de Estudios CAD/CAM de la Universidad de Holguín es el primer y único centro de su tipo dentro del Ministerio de Educación Superior de Cuba. Fundado en 1985 como grupo de investigación, se convirtió en un centro oficial en 1989.",
        about_text2: "Nuestra misión inicial fue el desarrollo de software de ingeniería mecánica para clientes en mercados nacionales e internacionales, incluyendo Colombia, México, España y Suiza.",
        about_text3: "Hoy, continuamos siendo pioneros en investigación y educación en ingeniería, con un enfoque en tecnologías CAD/CAM/CAE.",
        mission_title: "Nuestra Misión",
        mission_text: "Nuestra misión es proporcionar educación de pregrado y posgrado de alta calidad y aplicar nuestra investigación a la resolución de problemas científico-técnicos, todo a través de una sólida asociación universidad-comunidad y un equipo de expertos con formación científica sólida en tecnologías CAD/CAM/CAE.",
        programs_title: "Programas Académicos",
        programs_undergraduate: "Estudios de Pregrado",
        programs_mechanical: "Ingeniería Mecánica",
        programs_civil: "Ingeniería Civil",
        programs_electrical: "Ingeniería Eléctrica",
        programs_postgraduate: "Estudios de Posgrado",
        programs_masters: "Maestría en CAD/CAM (Reconocida por su Excelencia)",
        programs_phd: "Participación en programas de Doctorado",
        programs_engineering: "Desarrollo de Ingeniería (UHo)",
        programs_business: "Gestión de Empresas (UHo)",
        programs_industrial: "Tecnología y Procesos Industriales (UMatanzas)",
        team_title: "Nuestro Equipo",
        research_title: "Concepción de la Investigación",
        research_digital: "Modelos Digitales",
        research_digital_text: "Simulaciones numéricas, modelado matemático, análisis predictivo y gestión proactiva de riesgos",
        research_physical: "Modelos Físicos",
        research_physical_text: "Prototipado y prueba de modelos físicos para validación y mejora de diseños",
        research_cyber: "Sistemas Ciber-Físicos",
        research_cyber_text: "Integración de componentes computacionales y físicos para soluciones de ingeniería avanzadas",
        experience_title: "Nuestra Experiencia",
        experience_machinery: "Sector de Maquinaria",
        experience_infrastructure: "Sector de Infraestructura",
        experience_health: "Sector de la Salud",
        experience_machinery_title: "Niveladora de Tierra para Arrozales",
        experience_machinery_text: "Desarrollo de maquinaria especializada para aplicaciones agrícolas, mejorando la eficiencia y productividad en el cultivo de arroz.",
        experience_infrastructure_title: "Proyectos de Infraestructura",
        experience_infrastructure_text: "Aplicación de tecnologías CAD/CAM en el diseño y construcción de proyectos de infraestructura, garantizando precisión y durabilidad.",
        experience_health_title: "Soluciones de Salud",
        experience_health_text: "Desarrollo de dispositivos médicos y modelos quirúrgicos utilizando técnicas de fabricación avanzadas para mejorar la atención al paciente.",
        projects_title: "Proyectos de Investigación",
        project1_title: "Herramientas Disruptivas para la Enseñanza de la Ingeniería",
        project1_desc: "Enfocadas en Energía, el Medio Ambiente y la Seguridad y Salud Ocupacional: Una Visión desde el Enfoque STEM",
        project1_program: "Programa Sectorial: Educación Superior y Desarrollo Sostenible",
        project1_period: "2024-2026",
        project2_title: "Contribuciones a la Sostenibilidad de Grupos Electrógenos",
        project2_desc: "Diagnóstico integral del proceso de operación y mantenimiento, definición de causas de fallos y desarrollo de políticas de mantenimiento",
        project2_program: "Programa Territorial: Energía",
        project2_period: "2023-2024",
        project3_title: "Tropicalización de Aerogeneradores",
        project3_desc: "Mantenimiento de sistemas de enfriamiento en aerogeneradores, simulación CAE del comportamiento de temperaturas y desarrollo de políticas de mantenimiento",
        project3_program: "Programa Territorial: Energía",
        project3_period: "2021-2023",
        project4_title: "Soporte Autobalanceado Cubano",
        project4_desc: "Instalaciones de parques fotovoltaicos autobalanceados para techos o superficies terrestres, con diseño de montaje ajustable y accesorios de seguridad",
        project4_program: "Servicio Científico Técnico",
        project4_period: "2023-2024",
        project5_title: "Controlador para la Operación y Mantenimiento Asistido por Computadora de la Planta de Energía de Mayarí",
        project5_desc: "Desarrollo de sistemas de control inteligentes para la optimización de la operación y mantenimiento de la planta de energía",
        project5_program: "Programa Territorial: Transformación Energética de la Provincia Holguín",
        project5_period: "2025-2028",
        project6_title: "Vulnerabilidad de Sitios Mineros a la Subsidencia Basada en el Uso de Tecnología INSAR",
        project6_desc: "Análisis y monitoreo de áreas mineras utilizando tecnología de Radar de Apertura Sintética Interferométrico",
        project6_program: "Programa Nacional: Ciencias Básicas y Naturales",
        project6_period: "2021-2023",
        project7_title: "Integración Geomática-BIM para Mejorar la Gestión de Proyectos y Control de Construcción",
        project7_desc: "Integración de geomática y Modelado de Información de Edificios para una gestión de proyectos mejorada",
        project7_program: "Programa Sectorial: Desarrollo de Sistemas y Tecnologías para la Optimización de las Inversiones",
        project7_period: "2021-2025",
        project8_title: "Mejora de la Cosechadora de Caña de Azúcar CCA-6000 (CCA-5000M)",
        project8_desc: "Mejoramiento de maquinaria de cosecha de caña de azúcar para mayor eficiencia y productividad",
        project8_program: "Programa Territorial: Industria en Cuba",
        project8_period: "2025-2028",
        project9_title: "Aumento de la Resiliencia Estructural y Energética de Viviendas con Techos Ligeros",
        project9_desc: "Mejora de la resistencia de estructuras de techos ligeros contra impactos de vientos extremos",
        project9_program: "Programa Sectorial: Reducción Integrada del Riesgo de Desastres en Cuba",
        project9_period: "2025-2028",
        project10_title: "Impacto del Patrimonio Monumental en el Desarrollo Turístico en Municipios de Holguín",
        project10_desc: "Análisis de la contribución de sitios patrimoniales al desarrollo turístico sostenible en la región",
        project10_program: "Programa Territorial: Holguín, un Destino Turístico Inteligente y Sostenible",
        project10_period: "2025-2028",
        project11_title: "Transformación de la Práctica Quirúrgica a través de la Fabricación Aditiva",
        project11_desc: "Incorporación de tecnología de impresión 3D en la producción de modelos quirúrgicos para hospital pediátrico",
        project11_program: "Proyecto de Colaboración: Investigación en Ciencia y Tecnología para el Desarrollo Humano",
        project11_period: "2023-2025",
        project12_title: "Predicción Temprana de la Progresión Motora en Ataxias Espinocerebelosas Usando IA",
        project12_desc: "Desarrollo de herramientas de inteligencia artificial para la predicción temprana de la progresión motora en trastornos neurológicos",
        project12_program: "Programa Nacional: Neurociencias y Neurotecnología",
        project12_period: "2024-2026",
        collaborations_title: "Colaboraciones Internacionales",
        footer_about: "Acerca de",
        footer_about_text: "Centro de Estudios CAD/CAM de la Universidad de Holguín, pioneros en investigación y educación en ingeniería por más de 40 años.",
        footer_links: "Enlaces Rápidos",
        footer_about_link: "Acerca de",
        footer_programs_link: "Programas",
        footer_research_link: "Investigación",
        footer_projects_link: "Proyectos",
        footer_contact: "Contacto",
        footer_follow: "Síguenos",
        footer_rights: "Todos los Derechos Reservados.",
        robin_bio: "El Dr. Robin Cabeza-Ruiz es un distinguido experto en Ciencias de la Computación...",
        generic_bio: "Un miembro dedicado del equipo del Centro de Estudios CAD/CAM."
    },
    ru: {
        mission_subtitle: "Наша миссия — предоставлять высококачественное образование на уровне бакалавриата и магистратуры и применять наши исследования для решения научно-технических проблем",
        mission_learn_more: "Узнать больше о наших программах",
        programs_subtitle: "Комплексное обучение технологиям CAD/CAM и инженерному мастерству",
        programs_undergraduate: "Бакалавриат",
        programs_postgraduate: "Магистратура",
        nav_about_menu: "О нас",
        nav_research_menu: "Исследования",
        nav_results_menu: "Результаты",
        nav_about_menu: "О нас",
        nav_research_menu: "Исследования",
        nav_results_menu: "Результаты",
        nav_publications: "Публикации",
        nav_events: "Участие в Мероприятиях",
        publications_title: "Публикации",
        events_title: "Участие в Мероприятиях",
        research_group_I: "Исследовательская группа I",
        research_group_II: "Исследовательская группа II",
        research_group_III: "Исследовательская группа III",
        journal_articles: "Статьи в Журналах",
        book_chapters: "Главы в Книгах",
        scopus_indexed: "Индексировано в SCOPUS",
        publications_2025: "Публикации 2025",
        event_participation: "Участие в Мероприятиях",
        conferences_2025: "Конференции 2025",
        presentations_count: "Доклады",
        conference_details: "Детали Конференции",
        presentation_authors: "Авторы",
        robin_director: "Director of the Study Center",
        robin_specialty: "B.Sc. in Computer Science",
        main_title: "Учебный центр CAD/CAM",
        nav_about: "О нас",
        nav_mission: "Миссия",
        nav_programs: "Программы",
        nav_team: "Команда",
        nav_research: "Исследования",
        nav_projects: "Проекты",
        nav_collaborations: "Сотрудничество",
        hero_title: "КОМПЬЮТЕРНОЕ ПРОЕКТИРОВАНИЕ И КОМПЬЮТЕРНОЕ УПРАВЛЕНИЕ ПРОИЗВОДСТВОМ",
        hero_subtitle: "Ведущий учебный центр с 40-летним опытом разработки инженерных исследовательских проектов, влияющих на университет, регион и страну",
        hero_btn: "Узнать больше",
        about_title: "О нас",
        about_text1: "Центр исследований CAD/CAM Университета Ольгина является первым и единственным центром своего рода в рамках Министерства высшего образования Кубы. Основанный в 1985 году как исследовательская группа, он стал официальным центром в 1989 году.",
        about_text2: "Нашей первоначальной миссией было разработка программного обеспечения для машиностроения для клиентов на национальных и международных рынках, включая Колумбию, Мексику, Испанию и Швейцарию.",
        about_text3: "Сегодня мы продолжаем быть пионерами в инженерных исследованиях и образовании, с фокусом на технологии CAD/CAM/CAE.",
        mission_title: "Наша миссия",
        mission_text: "Наша миссия - предоставлять высококачественное образование на уровне бакалавриата и магистратуры и применять наши исследования для решения научно-технических проблем, все через прочное партнерство между университетом и сообществом и команду экспертов с солидной научной подготовкой в технологиях CAD/CAM/CAE.",
        programs_title: "Академические программы",
        programs_undergraduate: "Программы бакалавриата",
        programs_mechanical: "Машиностроение",
        programs_civil: "Строительство",
        programs_electrical: "Электротехника",
        programs_postgraduate: "Программы магистратуры и аспирантуры",
        programs_masters: "Магистратура по CAD/CAM (Признана за превосходство)",
        programs_phd: "Участие в программах PhD",
        programs_engineering: "Разработка инженерии (UHo)",
        programs_business: "Управление бизнесом (UHo)",
        programs_industrial: "Промышленные технологии и процессы (UMatanzas)",
        team_title: "Наша команда",
        research_title: "Концепция исследований",
        research_digital: "Цифровые модели",
        research_digital_text: "Численное моделирование, математическое моделирование, прогнозный анализ и проактивное управление рисками",
        research_physical: "Физические модели",
        research_physical_text: "Прототипирование и тестирование физических моделей для валидации и улучшения дизайна",
        research_cyber: "Кибер-физические системы",
        research_cyber_text: "Интеграция вычислительных и физических компонентов для передовых инженерных решений",
        experience_title: "Наш опыт",
        experience_machinery: "Машиностроительный сектор",
        experience_infrastructure: "Инфраструктурный сектор",
        experience_health: "Сектор здравоохранения",
        experience_machinery_title: "Выравниватель земли для рисовых полей",
        experience_machinery_text: "Разработка специализированной техники для сельскохозяйственных применений, улучшение эффективности и производительности в выращивании риса.",
        experience_infrastructure_title: "Инфраструктурные проекты",
        experience_infrastructure_text: "Применение технологий CAD/CAM в проектировании и строительстве инфраструктурных проектов, обеспечивая точность и долговечность.",
        experience_health_title: "Решения для здравоохранения",
        experience_health_text: "Разработка медицинских устройств и хирургических моделей с использованием передовых производственных техник для улучшения ухода за пациентами.",
        projects_title: "Исследовательские проекты",
        project1_title: "Инновационные инструменты для преподавания инженерии",
        project1_desc: "Сфокусированные на энергетике, окружающей среде и охране труда и здоровья: Взгляд с точки зрения STEM",
        project1_program: "Секторная программа: Высшее образование и устойчивое развитие",
        project1_period: "2024-2026",
        project2_title: "Вклад в устойчивость дизельных электростанций",
        project2_desc: "Комплексная диагностика процесса эксплуатации и технического обслуживания, определение причин отказов и разработка политик технического обслуживания",
        project2_program: "Территориальная программа: Энергетика",
        project2_period: "2023-2024",
        project3_title: "Тропикализация ветряных турбин",
        project3_desc: "Техническое обслуживание систем охлаждения в ветряных турбинах, CAE-моделирование поведения температур и разработка политик технического обслуживания",
        project3_program: "Территориальная программа: Энергетика",
        project3_period: "2021-2023",
        project4_title: "Кубинский самобалансирующий опорный элемент",
        project4_desc: "Самобалансирующиеся установки фотоэлектрических парков для крыш или наземных поверхностей, с регулируемым дизайном монтажа и аксессуарами безопасности",
        project4_program: "Научно-техническая служба",
        project4_period: "2023-2024",
        project5_title: "Контроллер для компьютеризированной эксплуатации и обслуживания электростанции Майари",
        project5_desc: "Разработка интеллектуальных систем управления для оптимизации эксплуатации и обслуживания электростанции",
        project5_program: "Территориальная программа: Энергетическая трансформация провинции Ольгин",
        project5_period: "2025-2028",
        project6_title: "Уязвимость горнодобывающих участков к оседанию на основе технологии INSAR",
        project6_desc: "Анализ и мониторинг горнодобывающих районов с использованием технологии интерферометрического радиолокационного зондирования с синтетической апертурой",
        project6_program: "Национальная программа: Фундаментальные и естественные науки",
        project6_period: "2021-2023",
        project7_title: "Интеграция геоматики и BIM для улучшения управления проектами и контроля строительства",
        project7_desc: "Интеграция геоматики и информационного моделирования зданий для улучшенного управления проектами",
        project7_program: "Секторная программа: Разработка систем и технологий для оптимизации инвестиций",
        project7_period: "2021-2025",
        project8_title: "Улучшение сахарного комбайна CCA-6000 (CCA-5000M)",
        project8_desc: "Модернизация сахарного комбайна для повышения эффективности и производительности",
        project8_program: "Территориальная программа: Промышленность на Кубе",
        project8_period: "2025-2028",
        project9_title: "Повышение структурной и энергетической устойчивости домов с легкими крышами",
        project9_desc: "Усиление сопротивления легких кровельных конструкций воздействию экстремальных ветров",
        project9_program: "Секторная программа: Интегрированное снижение риска бедствий на Кубе",
        project9_period: "2025-2028",
        project10_title: "Влияние монументального наследия на развитие туризма в муниципалитетах Ольгина",
        project10_desc: "Анализ вклада объектов наследия в устойчивое развитие туризма в регионе",
        project10_program: "Территориальная программа: Ольгин, умный и устойчивый туристический центр",
        project10_period: "2025-2028",
        project11_title: "Трансформация хирургической практики через аддитивное производство",
        project11_desc: "Внедрение технологии 3D-печати в производство хирургических моделей для детской больницы",
        project11_program: "Проект сотрудничества: Исследования в области науки и технологий для человеческого развития",
        project11_period: "2023-2025",
        project12_title: "Раннее прогнозирование прогрессирования моторики при спиноцеребеллярных атаксиях с использованием ИИ",
        project12_desc: "Разработка инструментов искусственного интеллекта для раннего прогнозирования прогрессирования моторики при неврологических расстройствах",
        project12_program: "Национальная программа: Нейронауки и нейротехнологии",
        project12_period: "2024-2026",
        collaborations_title: "Международное сотрудничество",
        footer_about: "О нас",
        footer_about_text: "Центр исследований CAD/CAM Университета Ольгина, пионеры в инженерных исследованиях и образовании более 40 лет.",
        footer_links: "Быстрые ссылки",
        footer_about_link: "О нас",
        footer_programs_link: "Программы",
        footer_research_link: "Исследования",
        footer_projects_link: "Проекты",
        footer_contact: "Контакты",
        footer_follow: "Подписывайтесь",
        footer_rights: "Все права защищены.",
        robin_bio: "Д-р Робин Кабеса-Руис - выдающийся эксперт...",
        generic_bio: "Преданный своему делу сотрудник Центра исследований CAD/CAM."
    },
    zh: {
        mission_subtitle: "我们的使命是提供高质量的本科和研究生教育，并运用我们的研究解决科学技术问题",
        mission_learn_more: "了解更多关于我们的课程",
        programs_subtitle: "CAD/CAM 技术与工程卓越性的综合教育",
        programs_undergraduate: "本科课程",
        programs_postgraduate: "研究生课程",
        nav_about_menu: "关于我们",
        nav_research_menu: "研究",
        nav_results_menu: "成果",
        nav_about_menu: "关于我们",
        nav_research_menu: "研究",
        nav_results_menu: "成果",
        nav_publications: "出版物",
        nav_events: "活动参与",
        publications_title: "出版物",
        events_title: "活动参与",
        research_group_I: "研究小组 I",
        research_group_II: "研究小组 II",
        research_group_III: "研究小组 III",
        journal_articles: "期刊文章",
        book_chapters: "书籍章节",
        scopus_indexed: "SCOPUS 收录",
        publications_2025: "2025年出版物",
        event_participation: "活动参与",
        conferences_2025: "2025年会议",
        presentations_count: "报告次数",
        conference_details: "会议详情",
        presentation_authors: "作者",
        robin_director: "Director of the Study Center",
        robin_specialty: "B.Sc. in Computer Science",
        main_title: "CAD/CAM 研究中心",
        nav_about: "关于我们",
        nav_mission: "使命",
        nav_programs: "项目",
        nav_team: "团队",
        nav_research: "研究",
        nav_projects: "项目",
        nav_collaborations: "合作",
        hero_title: "计算机辅助设计与计算机辅助制造",
        hero_subtitle: "拥有40年经验的领先研究中心，开发影响大学、地区和国家的工程项目",
        hero_btn: "了解更多",
        about_title: "关于我们",
        about_text1: "奥尔金大学的CAD/CAM研究中心是古巴高等教育部内首个也是唯一一个此类中心。成立于1985年，最初是一个研究小组，于1989年成为正式中心。",
        about_text2: "我们最初的使命是为国内外市场的客户开发机械工程软件，包括哥伦比亚、墨西哥、西班牙和瑞士。",
        about_text3: "今天，我们继续成为工程研究和教育的先驱，专注于CAD/CAM/CAE技术。",
        mission_title: "我们的使命",
        mission_text: "我们的使命是提供高质量的本科和研究生教育，并将我们的研究应用于解决科学技术问题，所有这些都通过强大的大学-社区伙伴关系和一支在CAD/CAM/CAE技术方面具有扎实科学培训的专家团队来实现。",
        programs_title: "学术项目",
        programs_undergraduate: "本科学习",
        programs_mechanical: "机械工程",
        programs_civil: "土木工程",
        programs_electrical: "电气工程",
        programs_postgraduate: "研究生学习",
        programs_masters: "CAD/CAM硕士（以卓越著称）",
        programs_phd: "博士项目参与",
        programs_engineering: "工程发展（UHo）",
        programs_business: "企业管理（UHo）",
        programs_industrial: "工业技术与流程（UMatanzas）",
        team_title: "我们的团队",
        research_title: "研究概念",
        research_digital: "数字模型",
        research_digital_text: "数值模拟、数学建模、预测分析和主动风险管理",
        research_physical: "物理模型",
        research_physical_text: "物理模型的原型制作和测试，用于验证和改进设计",
        research_cyber: "赛博物理系统",
        research_cyber_text: "计算和物理组件的集成，用于先进的工程解决方案",
        experience_title: "我们的经验",
        experience_machinery: "机械部门",
        experience_infrastructure: "基础设施部门",
        experience_health: "卫生部门",
        experience_machinery_title: "稻田平地机",
        experience_machinery_text: "为农业应用开发专用机械，提高水稻种植的效率和生产力。",
        experience_infrastructure_title: "基础设施项目",
        experience_infrastructure_text: "在基础设施项目的设计和施工中应用CAD/CAM技术，确保精度和耐久性。",
        experience_health_title: "医疗解决方案",
        experience_health_text: "使用先进制造技术开发医疗设备和手术模型，以改善患者护理。",
        projects_title: "研究项目",
        project1_title: "工程教学的颠覆性工具",
        project1_desc: "专注于能源、环境和职业安全与健康：从STEM方法的视角",
        project1_program: "部门计划：高等教育和可持续发展",
        project1_period: "2024-2026",
        project2_title: "对发电机组可持续性的贡献",
        project2_desc: "全面诊断操作和维护过程，确定故障原因，并制定维护政策",
        project2_program: "地区计划：能源",
        project2_period: "2023-2024",
        project3_title: "风力涡轮机的热带化",
        project3_desc: "风力涡轮机冷却系统的维护，温度行为的CAE模拟，以及维护政策的制定",
        project3_program: "地区计划：能源",
        project3_period: "2021-2023",
        project4_title: "古巴自平衡支撑",
        project4_desc: "用于屋顶或地面的自平衡光伏公园装置，具有可调节的安装设计和安全配件",
        project4_program: "科学技术服务",
        project4_period: "2023-2024",
        project5_title: "马亚里发电厂计算机辅助运行和维护控制器",
        project5_desc: "开发用于发电厂运行和维护优化的智能控制系统",
        project5_program: "地区计划：奥尔金省能源转型",
        project5_period: "2025-2028",
        project6_title: "基于INSAR技术的矿区沉降脆弱性研究",
        project6_desc: "使用干涉合成孔径雷达技术分析和监测矿区",
        project6_program: "国家计划：基础和自然科学",
        project6_period: "2021-2023",
        project7_title: "地理信息-BIM集成以改善项目管理和施工控制",
        project7_desc: "集成地理信息和建筑信息建模以增强项目管理",
        project7_program: "部门计划：投资优化系统和技术开发",
        project7_period: "2021-2025",
        project8_title: "CCA-6000（CCA-5000M）甘蔗收割机改进",
        project8_desc: "改进甘蔗收割机械以提高效率和生产力",
        project8_program: "地区计划：古巴工业",
        project8_period: "2025-2028",
        project9_title: "提高轻质屋顶房屋的结构和能源抗风能力",
        project9_desc: "增强轻质屋顶结构对极端风影响的抵抗力",
        project9_program: "部门计划：古巴综合灾害风险减少",
        project9_period: "2025-2028",
        project10_title: "奥尔金市镇纪念碑遗产对旅游发展的影响",
        project10_desc: "分析遗产地对区域可持续旅游发展的贡献",
        project10_program: "地区计划：奥尔金，智能可持续旅游目的地",
        project10_period: "2025-2028",
        project11_title: "通过增材制造转变外科实践",
        project11_desc: "在儿童医院手术模型生产中引入3D打印技术",
        project11_program: "合作项目：人类发展科学技术研究",
        project11_period: "2023-2025",
        project12_title: "使用人工智能工具早期预测脊髓小脑性共济失调的运动进展",
        project12_desc: "开发人工智能工具用于早期预测神经系统疾病的运动进展",
        project12_program: "国家计划：神经科学和神经技术",
        project12_period: "2024-2026",
        collaborations_title: "国际合作",
        footer_about: "关于我们",
        footer_about_text: "奥尔金大学的CAD/CAM研究中心，40多年来在工程研究和教育方面处于领先地位。",
        footer_links: "快速链接",
        footer_about_link: "关于我们",
        footer_programs_link: "项目",
        footer_research_link: "研究",
        footer_projects_link: "项目",
        footer_contact: "联系方式",
        footer_follow: "关注我们",
        footer_rights: "版权所有。",
        robin_bio: "Robin Cabeza-Ruiz 博士是...",
        generic_bio: "CAD/CAM 研究中心团队的一名尽职成员。"
    }
};

const iconsAndRefs = {
    email: { icon: "fas fa-envelope", text: "Email" },
    linkedin: { icon: "fab fa-linkedin", text: "LinkedIn" },
    googleScholar: { icon: "fas fa-graduation-cap", text: "Google Scholar" },
    portfolio: { icon: "fas fa-code", text: "Portfolio" },
    github: { icon: "fab fa-github", text: "Github" }
};

const teamMembers = [
    {
        id: "robin-cabeza-ruiz",
        name: "Robin Cabeza-Ruiz, PhD.",
        image: "images/team/robin_cabeza_ruiz.png",
        roles: [
            { text: "Director of the Study Center", translateKey: "robin_director" },
            { text: "B.Sc. in Computer Science", translateKey: "robin_specialty" }
        ],
        bioKey: "robin_bio",
        contact: {
            email: "robbinc91@gmail.com",
            linkedin: "https://www.linkedin.com/in/robin-cabeza-ruiz-50575b113/",
            googleScholar: "https://scholar.google.com/citations?user=MAtFl38AAAAJ&hl",
            portfolio: "https://robbinc91.github.io/",
            github: "https://github.com/robbinc91"
        },
        interests: ["CAD/CAM", "Artificial Intelligence", "Educational Technology"],
        publications: [
            "Cabeza-Ruiz, R.; Velázquez-Pérez, L.; González-Dalmau, E.; Linares-Barranco, A.; Pérez-Rodríguez, R. Deep Learning-Based Assessment of Brainstem Volume Changes in Spinocerebellar Ataxia Type 2 (SCA2): A Study on Patients and Preclinical Subjects. Sensors 2025, 25, 6009. https://doi.org/10.3390/s25196009",
            "Cabeza-Ruiz, R., Velázquez-Pérez, L., Linares-Barranco, A., Pérez-Rodríguez, R. (2025). Automated Thalamic Nuclei Segmentation from Brain T1-W MRI Using Convolutional Neural Networks. In: Torres, Y., Beltrán, A.M., Felix, M., Peralta, E., Larios Marín, D.F. (eds) A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85. Springer, Cham. https://doi.org/10.1007/978-3-031-99987-1_43",
            "Cabeza-Ruiz, R., Velázquez-Pérez, L., Pérez-Rodríguez, R. et al. ConvNets for automatic detection of polyglutamine SCAs from brain MRIs: state of the art applications. Med Biol Eng Comput 61, 1–24 (2023). https://doi.org/10.1007/s11517-022-02714-w",
            "Cabeza-Ruiz, R., Velázquez-Pérez, L., Linares-Barranco, A., & Pérez-Rodríguez, R. (2022). Convolutional Neural Networks for Segmenting Cerebellar Fissures from Magnetic Resonance Imaging. Sensors, 22(4), 1345. https://doi.org/10.3390/s22041345",
            "Cabeza-Ruiz, R., Velázquez-Pérez, L., Pérez-Rodríguez, R. (2021). Convolutional Neural Networks as Support Tools for Spinocerebellar Ataxia Detection from Magnetic Resonances. In: Hernández Heredia, Y., Milián Núñez, V., Ruiz Shulcloper, J. (eds) Progress in Artificial Intelligence and Pattern Recognition. IWAIPR 2021. Lecture Notes in Computer Science(), vol 13055. Springer, Cham. https://doi.org/10.1007/978-3-030-89691-1_11"
        ]
    },
    {
        id: "roberto-perez-rodriguez",
        name: "Roberto Pérez Rodríguez, PhD.",
        image: "images/team/roberto_perez_rodriguez.png",
        roles: [
            { text: "Mechanical Engineer" },
            { text: "Cuban Academy of Sciences" },
            { text: "Line Coordinator in the Doctoral Program \"Development of Engineering\"" }
        ],
        bioKey: "generic_bio",
        contact: { email: "roberto.perez@uho.edu.cu" },
        interests: ["Manufacturing", "Engineering Education"],
        publications: []
    },
    {
        id: "yorley-arbella-feliciano",
        name: "Yorley Arbella-Feliciano, PhD.",
        image: "images/team/yorley_arbella_feliciano.png",
        roles: [
            { text: "Mechanical Engineer" },
            { text: "Coordinator of the Master's Program in CAD/CAM" }
        ],
        bioKey: "generic_bio",
        contact: { email: "yorley.arbella@uho.edu.cu" },
        interests: ["CAD/CAM", "Mechanical Design"],
        publications: []
    },
    {
        id: "rolando-esteban-simeon-monet",
        name: "Rolando Esteban Simeón-Monet, PhD.",
        image: "images/team/rolando_esteban_simeon.png",
        roles: [
            { text: "Mechanical Engineer" }
        ],
        bioKey: "generic_bio",
        contact: { email: "rolando.simeon@uho.edu.cu" },
        interests: ["Mechanical Engineering"],
        publications: []
    },
    {
        id: "luis-wilfredo-hernandez-gonzalez",
        name: "Luis Wilfredo Hernández-González, PhD.",
        image: null,
        roles: [
            { text: "Mechanical Engineer" }
        ],
        bioKey: "generic_bio",
        contact: { email: "luis.wilfredo@uho.edu.cu" },
        interests: ["Mechanical Engineering"],
        publications: []
    },
    {
        id: "roberto-andres-estrada-cingualbres",
        name: "Roberto Andrés Estrada-Cingualbres, PhD.",
        image: "images/team/roberto_andres_estrada.png",
        roles: [
            { text: "Aeronautical Engineer" }
        ],
        bioKey: "generic_bio",
        contact: { email: "roberto.estrada@uho.edu.cu" },
        interests: ["Aeronautics", "Engineering"],
        publications: []
    },
    {
        id: "luis-enrique-acosta-gonzalez",
        name: "Luis Enrique Acosta-González, PhD.",
        image: "images/team/luis_enrique_acosta.png",
        roles: [
            { text: "Civil Engineer" }
        ],
        bioKey: "generic_bio",
        contact: { email: "luis.acosta@uho.edu.cu" },
        interests: ["Civil Engineering"],
        publications: []
    },
    {
        id: "anabel-reyes-ramirez",
        name: "Anabel Reyes-Ramírez, PhD.",
        image: "images/team/anabel_reyes_ramirez.png",
        roles: [
            { text: "Civil Engineer" }
        ],
        bioKey: "generic_bio",
        contact: { email: "anabel.reyes@uho.edu.cu" },
        interests: ["Civil Engineering"],
        publications: []
    },
    {
        id: "libys-martha-zuniga-igarza",
        name: "Libys Martha Zúñiga Igarza, PhD.",
        image: null,
        roles: [
            { text: "Architect" }
        ],
        bioKey: "generic_bio",
        contact: { email: "libys.zuniga@uho.edu.cu" },
        interests: ["Architecture"],
        publications: []
    },
    {
        id: "odet-lopez-batista",
        name: "Odet López Batista, M.Sc.",
        image: null,
        roles: [
            { text: "B.Sc. Mathematics" }
        ],
        bioKey: "generic_bio",
        contact: { email: "odet.lopez@uho.edu.cu" },
        interests: ["Mathematics"],
        publications: []
    },
    {
        id: "luis-guillermo-rodriguez-velazquez",
        name: "Luis Guillermo Rodríguez Velázquez, M.Sc.",
        image: null,
        roles: [
            { text: "Mechanical Engineer" },
            { text: "PhD Student, \"Development of Engineering\" Program" }
        ],
        bioKey: "generic_bio",
        contact: { email: "luis.rodriguez@uho.edu.cu" },
        interests: ["Mechanical Engineering"],
        publications: []
    },
    {
        id: "adrian-de-la-luz-alvarez",
        name: "Adrián de la Luz Álvarez",
        image: null,
        roles: [
            { text: "Civil Engineer" },
            { text: "PhD Student, \"Development of Engineering\" Program" }
        ],
        bioKey: "generic_bio",
        contact: { email: "adrian.luz@uho.edu.cu" },
        interests: ["Civil Engineering"],
        publications: []
    },
    {
        id: "carlos-luis-martinez-fernandez",
        name: "Carlos Luis Martínez Fernández",
        image: null,
        roles: [
            { text: "Civil Engineer" },
            { text: "PhD Student, \"Development of Engineering\" Program" }
        ],
        bioKey: "generic_bio",
        contact: { email: "carlos.martinez@uho.edu.cu" },
        interests: ["Civil Engineering"],
        publications: []
    }
];

const projects = [
    {
        id: 1,
        image: "images/projects/01.png",
        titleKey: "project1_title",
        descKey: "project1_desc",
        programKey: "project1_program",
        periodKey: "project1_period"
    },
    {
        id: 2,
        image: "images/projects/02.png",
        titleKey: "project2_title",
        descKey: "project2_desc",
        programKey: "project2_program",
        periodKey: "project2_period"
    },
    {
        id: 3,
        image: "images/projects/03.png",
        titleKey: "project3_title",
        descKey: "project3_desc",
        programKey: "project3_program",
        periodKey: "project3_period"
    },
    {
        id: 4,
        image: "images/projects/04.png",
        titleKey: "project4_title",
        descKey: "project4_desc",
        programKey: "project4_program",
        periodKey: "project4_period"
    },
    {
        id: 5,
        image: "images/projects/05.png",
        titleKey: "project5_title",
        descKey: "project5_desc",
        programKey: "project5_program",
        periodKey: "project5_period"
    },
    {
        id: 6,
        image: "images/projects/06.png",
        titleKey: "project6_title",
        descKey: "project6_desc",
        programKey: "project6_program",
        periodKey: "project6_period"
    },
    {
        id: 7,
        image: "images/projects/07.png",
        titleKey: "project7_title",
        descKey: "project7_desc",
        programKey: "project7_program",
        periodKey: "project7_period"
    },
    {
        id: 8,
        image: "images/projects/08.png",
        titleKey: "project8_title",
        descKey: "project8_desc",
        programKey: "project8_program",
        periodKey: "project8_period"
    },
    {
        id: 9,
        image: "images/projects/09.png",
        titleKey: "project9_title",
        descKey: "project9_desc",
        programKey: "project9_program",
        periodKey: "project9_period"
    },
    {
        id: 10,
        image: "images/projects/10.png",
        titleKey: "project10_title",
        descKey: "project10_desc",
        programKey: "project10_program",
        periodKey: "project10_period"
    },
    {
        id: 11,
        image: "images/projects/11.png",
        titleKey: "project11_title",
        descKey: "project11_desc",
        programKey: "project11_program",
        periodKey: "project11_period"
    },
    {
        id: 12,
        image: "images/projects/12.png",
        titleKey: "project12_title",
        descKey: "project12_desc",
        programKey: "project12_program",
        periodKey: "project12_period"
    }
];


// COMPLETE PUBLICATIONS 2025 - ALL 24 PUBLICATIONS
const publications2025 = {
    groupI: [
        {
            title: "Intelligent predictive maintenance: a bibliometric approach through the SCOPUS database",
            authors: "Torres-Sainz, R; de-Zayas-Pérez, M. R; Trinchet-Varela, C. A; Pérez-Vallejo, L. M. y Pérez Rodríguez, R.",
            journal: "Bibliotecas. Anales de Investigacion",
            volume: "21(1), 1-15",
            doi: "http://revistas.bnjm.sld.cu/index.php/BAI/article/view/958",
            scopus: true,
            type: "journal"
        },
        {
            title: "Deep Learning-Based Assessment of Brainstem Volume Changes in Spinocerebellar Ataxia Type 2 (SCA2): A Study on Patients and Preclinical Subjects",
            authors: "Cabeza-Ruiz, R., Velázquez-Pérez, L., González-Dalmau, E., Linares-Barranco, A., Pérez-Rodríguez, R.",
            journal: "Sensors",
            volume: "25(19), 6009",
            doi: "https://doi.org/10.3390/s25196009",
            scopus: true,
            type: "journal"
        },
        {
            title: "Process approach in the configuration of a construction project for the conservation of the Weenhayek native people",
            authors: "Rojas-Molina JM, Zúñiga-Igarza LM, Pérez-Campdesuñer R, Alexander Sánchez-Rodríguez, Gelmar García-Vidal, Rodobaldo Martínez-Vivar",
            journal: "Journal of Infrastructure, Policy and Development",
            volume: "9(1): 10588",
            doi: "https://doi.org/10.24294/jipd10588",
            scopus: true,
            type: "journal"
        },
        {
            title: "Displacements study of a dam using low-cost GNSS receivers, high precision leveling and Finite Element Model",
            authors: "Rosendo Romero-Andrade, Manuel Edwiges Trejo-Soto, Luis Enrique Acosta-González, Daniel Hernández-Andrade, Karan Nayak, Vivian Hernández-Columble, Richard Serrano-Agila; Yedid Guadalupe Zambrano-Medina",
            journal: "Advances in Geodesy and Geoinformation",
            volume: "Vol. 73, no. 2, article no. e55, 2024",
            doi: "https://doi.org/10.24425/agg.2024.150684",
            scopus: true,
            type: "journal"
        }
    ],
    groupII: [
        {
            title: "Determinación de subsidencia del terreno mediante tecnología InSAR. Caso de estudio: Vía San Antonio-San Vicente",
            authors: "Peralta-Delgado, Jaime Adrián; Acosta-González, Luis Enrique; Vega-Ponce, Emil Cristhian; Herrera-Blanco, Walkis; Pacheco-Gil, Henry Antonio",
            journal: "Min. Geol.",
            volume: "vol.41, no.1, p.51-67",
            doi: "",
            scopus: false,
            type: "journal"
        }
    ],
    groupIII: [
        {
            title: "Validez de un procedimiento para la gestión del riesgo económico en inversiones constructivas, Cuba",
            authors: "Dotres Z., Gregorio Garciandia M., Norma Sánchez P., Libys M., Zúñiga I., Reyner Pérez C., y Juan Marco Roja M.",
            journal: "Revista Científica Esteli",
            volume: "14, 53, Enero-marzo, pp 112-129",
            doi: "https://doi.org/10.5377/esteli.v14i53.20330",
            scopus: false,
            type: "journal"
        },
        {
            title: "Educación Económica con Enfoque Profesional del Trabajador Competente a Directivos",
            authors: "Guerra, Y.; Dotres, S.; Zúñiga, L.; Ramírez, D.",
            journal: "Revista Científica Mundo Recursivo",
            volume: "8(1), 1-20",
            doi: "https://www.atlantic.edu.ec/ojs/index.php/mundor/article/view/233/336",
            scopus: false,
            type: "journal"
        },
        {
            title: "El Proceso de Formación Profesional desde el Desarrollo de Competencias para la Gestión de Riesgos en Empresas Constructoras",
            authors: "Ramírez. D.; Dotres, S.; Zúñiga, L.; Guerra, Y.",
            journal: "Revista Científica Mundo Recursivo",
            volume: "8(1), 21-43",
            doi: "https://www.atlantic.edu.ec/ojs/index.php/mundor/article/view/234",
            scopus: false,
            type: "journal"
        },
        {
            title: "Resultados: Educación Ambiental con Enfoque Profesional en la Unidad Educativa Tiguino, Coca de Orellana. Ecuador",
            authors: "Rodríguez, N.; Zúñiga, L.; Cruz, M.; Dotres, S.",
            journal: "Revista Científica Mundo Recursivo",
            volume: "8(1), 44-66",
            doi: "https://www.atlantic.edu.ec/ojs/index.php/mundor/article/view/236/338",
            scopus: false,
            type: "journal"
        }
    ],
    bookChapters: [
        {
            title: "Optimization of the parameters for the cutting regime in the sustainable turning of AISI 316L steel, based on the NSAG-II and NSAG-III multi-criteria work scheme",
            authors: "José Antonio Yarza Acuña, Hioxanis Castillo Pantoja, Alexis Cordovés García, Roberto Pérez Rodríguez, Ricardo Lorenzo Avila Rondon",
            book: "The International Journal of Advanced Manufacturing Technology",
            doi: "https://doi.org/10.1007/s00170-025-16358-1",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Toxicological Evaluation of Anti-Inflammatory Biological Active Compound Based-On Mirabilis Jalapa",
            authors: "de Cádiz Agüero, A.T.G., Fernández, K.E.G., Rodríguez, A.M., Rojas, P.A.D., Pérez-Rodríguez, R., Testé, I.S.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3031-99987-1_5",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "The Integration of CAD/CAM/CAE Tools into the Engineering Curriculum",
            authors: "Ramírez, A.R., Martin, R.L., Lopéz, M.H.R., Pérez-Rodríguez, R.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3031-99987-1_6",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Behavior of a Ceramic Tool in the Dry Machining of a Ti6Al7Nb Alloy and 316L Steel",
            authors: "del Risco-Alfonso, R., Pérez-Rodriguez, R., del Carmen Zambrano-Robledo, P., Quiza, R., Rivas-Santana, M.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_7",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Simulation of Wind Loads in a Self-ballasted Photovoltaic System by Means of CFD",
            authors: "Simeón-Monet, R.E., Borrero-Neninger, J.C., Simeón-Pérez, R.E.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_8",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "A Framework to Support the Integration of Technical Collector Networks into the Conceptual Design of Urban Development Projects",
            authors: "Benítez-Díaz, O., Pérez-Rodriguez, R., Zúñiga-Igarza, L.M., Peralta-Alvarez, M.E.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_9",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Application of Nanotechnology in the Obtaining and Characterization of Aluminum Briquettes",
            authors: "Morales, E.R., Medina, E.E.N., Feliciano, Y.A., Rodriguez, R.P., Pérez, J.R.H.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_10",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Calculation of a Short Span Lifting Beam 'Plate Style' for Boiler Drum Lifting in Thermoelectric Company",
            authors: "Dubras, H.C., Pazos, F.J.C., Cingualores, R.A.E., Llanes, R.V., Brito, L.A.C.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_15",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "A STEM Approach to Content Analysis Based on Abstracts from Scopus: The Case of Biomarkers",
            authors: "Cruz-Ramírez, M., Pérez-Rodriguez, R., Velázquez-Pérez, L.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_35",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Quenching of the AISI D2 Steel with Air Centrifugation Cooling: Microstructure, Hardness, and Wear Resistance Analysis",
            authors: "Gurri Villafruela, G., Domínguez, A.G., Feliciano, Y.A., Rodriguez, R.P., Morales, E.R.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_39",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Development of Educational 4.0 Environments Through the Dynamic Integration of Natural (Human) and Artificial Intelligences",
            authors: "Lorenzo, R., Sagula, J.E., Zayas-Figueras, E.E., Quishpe-Solano, R., Pérez-Rodriguez, R.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_40",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Estimation of Gaps Associated with Risk Factors in the Total Cost of Construction Investments",
            authors: "Zúñiga, S.D., Paz, N.S., Mirón, G.G., Molina, J.M.R., Zúñiga-Igarza, L.M., Campdesuñer, R.F.P.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_41",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Specific Energy Consumption During the Melting of Recycled Aluminum Briquettes as a Function of Geometry and Its Distribution in the Furnace",
            authors: "Morales, E.R., medina, E.E.N., Feliciano, Y.A., Rodríguez, R.P., Pérez, J.R.H.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_42",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Automated Thalamic Nuclei Segmentation from Brain T1-W MRI Using Convolutional Neural Networks",
            authors: "Cabeza-Ruiz, R., Velázquez-Pérez, L., Linares-Barranco, A., Pérez-Rodríguez, R.",
            book: "A Cross-Disciplinary Exploration of STEM. STEMEPS 2024. Springer Proceedings in Materials, vol 85",
            doi: "https://doi.org/10.1007/978-3-031-99987-1_43",
            scopus: true,
            type: "book chapter"
        },
        {
            title: "Thermal Behavior Analysis in Wind Turbines Using Statistical Methods and Artificial Intelligence Techniques",
            authors: "Leandro L. Lorente-Leyva, Roberto Pérez-Rodríguez, Yorley Arbella-Feliciano and Diego H. Peluffo-Ordóñez",
            book: "Springer",
            doi: "https://doi.org/10.1007/978-3-032-07175-0_5",
            scopus: true,
            type: "book chapter"
        }
    ]
};

// COMPLETE EVENTS 2025 - ALL 54 PRESENTATIONS
const events2025 = [
    {
        name: "Conferencia Científica Internacional de la Universidad de Holguín",
        date: "April 2025",
        location: "University of Holguín, Cuba",
        presentations: 23,
        isbn: "ISBN 978-959-7263-99-9",
        papers: [
            {
                title: "Diagnóstico del Estado Actual de La Metodología BIM en la Gestión de Proyectos en Empresas de la construcción de Holguín",
                authors: ["Luis Enrique Acosta González", "Anabel Reyes Ramírez", "Liset Estopiñan Mulet"]
            },
            {
                title: "Detección de Interferencias en el Modelo 3D de una Edificación mediante el Software BIM Navisworks",
                authors: ["Anabel Reyes Ramírez", "Luis Enrique Acosta González", "Amalia Margarita La O Martínez"]
            },
            {
                title: "Aplicación de la Tecnología INSAR para la Obtención de Modelos Digitales de Elevación (MDE)",
                authors: ["Anabel Reyes Ramírez", "Luis Enrique Acosta González", "Antonio David Molina Ramírez"]
            },
            {
                title: "Modelación Geométrica de Edificaciones Patrimoniales con Empleo de Topografía de Alta Definición",
                authors: ["Juan Antonio Mulet Naranjo", "Anabel Reyes Ramírez", "Ernesto Emilio Aguilar Leyva"]
            },
            {
                title: "Contribución de La Topografía de Alta Definición al Diagnóstico del Estado Geométrico de Elementos Constructivos",
                authors: ["Ernesto Emilio Aguilar Leyva", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Análisis bibliométrico sobre la modelación ionosférica derivada de observaciones GNSS",
                authors: ["Ernesto Emilio Aguilar Leyva", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Monitoreo de la actividad geodinámica local reciente con empleo del sistema global de navegación por satélite (GNSS)",
                authors: ["Ernesto Emilio Aguilar Leyva", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Análisis resistivo de tipologías de estructuras soportes de cubiertas ligeras con empleo de herramientas computacionales",
                authors: ["Carlos Luis Martínez Fernández", "Roberto Andrés Estrada Cingüalbres", "Anabel Reyes Ramírez"]
            },
            {
                title: "Evaluación computacional de escenarios de riesgo ante fuertes vientos para edificaciones con cubiertas ligeras",
                authors: ["Liliana Angulo Batista", "Anabel Reyes Ramírez", "Roberto Andrés Estrada Cingüalbres"]
            },
            {
                title: "Base de Datos de los monumentos en el municipio Holguín",
                authors: ["Robin Cabeza Ruiz", "Anabel Reyes Ramírez", "Yorley Arbella Feliciano"]
            },
            {
                title: "Resiliencia y economía circular. ¿Cómo enfrentarla?",
                authors: ["Libys Martha Zúñiga Igarza", "Silvia Dotres Zúñiga", "Jorge Luis Rodríguez Gomez"]
            },
            {
                title: "Evaluación del flujo informativo en el proceso constructivo de una obra constructiva",
                authors: ["Darlana Liz Hernández Sondón", "Irma Clara Sondón González", "Libys Marta Zúñiga Igarza"]
            },
            {
                title: "Formación de la competencia profesional trabajos básicos de ingeniería. Fundamentos teóricos",
                authors: ["Roberto Miguel Rodríguez Benítez", "Miguel Alejandro Cruz Cabezas", "Libys Martha Zúñiga Igarza"]
            },
            {
                title: "Gestión ambiental de playas turísticas basada en capacidad de carga. Costa norte de Holguín",
                authors: ["Jorge Luis Rodríguez Gómez", "Libys Martha Zúñiga Igarza", "Ridel Rodríguez Paneque"]
            },
            {
                title: "Competencias laborales y uso de las TIC en la Empresa Inmobiliaria del turismo, Holguín",
                authors: ["Jorge Luis Rodríguez Gómez", "Freddy Rafael Sarmiento Torres", "Libys Martha Zúñiga Igarza"]
            },
            {
                title: "Modelación matemática del comportamiento termodinámico de la PCHE Mayarí",
                authors: ["Robin Cabeza Ruiz", "Roberto Johan Sierra Pérez", "Yorley Arbella Feliciano"]
            },
            {
                title: "Gestión del proyecto Diseño autómata para la PCHE Mayarí",
                authors: ["Lizandra Salazar Pérez", "Roberto Pérez Rodríguez", "Yorley Arbella Feliciano"]
            },
            {
                title: "Modelación geométrica de las Zonas técnicas de la PCHE Mayarí",
                authors: ["Robin Cabeza Ruiz", "Roberto Johan Sierra Pérez", "Yorley Arbella Feliciano"]
            },
            {
                title: "Simulación numérica del comportamiento de la humedad relativa de la PCHE Mayarí",
                authors: ["Roberto Pérez Rodríguez", "Robin Cabeza Ruiz", "Lizandra Salazar Pérez"]
            },
            {
                title: "Deep learning-based assessment of brainstem volume changes in spinocerebellar ataxia type 2 (SCA2): a study on patients and preclinical subjects",
                authors: ["Robin Cabeza Ruiz", "Luis C. Velázquez Pérez", "Alejandro Linares-Barranco", "Roberto Pérez-Rodríguez"]
            },
            {
                title: "Smartphone-based tool for remote capture of the SARA test in patients with SCA2",
                authors: ["Rafael Mario Carballosa Hernández", "Roberto Pérez-Rodríguez", "Luis C. Velázquez Pérez", "Julio César Rodríguez Díaz"]
            },
            {
                title: "Identification of kinematic variables in the heel-shin-knee test in patients with spinocerebellar ataxia type 2 (SCA2) using smartphones",
                authors: ["Odet Lopez-Batista", "Luis Velázquez Pérez", "Roberto Rodríguez-Labrada", "Julio César Rodríguez-Díaz", "Roberto Pérez-Rodríguez"]
            },
            {
                title: "Determination of kinematic variables from the rapid alternating movement test in patients with spinocerebellar ataxia type 2 (SCA2) based-on smartphone",
                authors: ["Alfredo Vega Ramírez", "Luis Velázquez Pérez", "Roberto Rodríguez-Labrada", "Julio César Rodríguez-Díaz", "Roberto Pérez-Rodríguez"]
            }
        ]
    },
    {
        name: "FORMER. IV Simposio de Género y Energía renovable y 1era Convención Internacional de Energía y nuevas tecnologías e Innovación para el Desarrollo Sostenible ENERGY-TID",
        date: "May 2025",
        location: "Cuba",
        presentations: 9,
        papers: [
            {
                title: "Herramienta para la evaluación de vulnerabilidad en la gestión del diseño de cubiertas ligeras",
                authors: ["Anabel Reyes Ramírez", "Libys Martha Zúñiga Igarza", "Raul Emilio Cruz García"]
            },
            {
                title: "Diseño de plataforma basada en SIG para el monitoreo de la SCA2 en Holguín",
                authors: ["Anabel Reyes Ramírez", "Luis Enrique Acosta González", "Ernesto Emilio Aguilar Leyva"]
            },
            {
                title: "Controlador automático para la operación del sistema de ventilación de la PCHE Mayarí",
                authors: ["Erlan Vega Quiala", "Lizandra Salazar Pérez", "Yorley Arbella Feliciano"]
            },
            {
                title: "Simulación numérica del comportamiento de la humedad relativa de la PCHE Mayarí",
                authors: ["Yorley Arbella Feliciano", "Lizandra Salazar Pérez", "Roberto Johan Sierra Pérez"]
            },
            {
                title: "Quantitative analysis of rapid alternating movements in SCA2 using video processing and AI algorithms: pipeline for automated measurement of biomechanical parameters",
                authors: ["Alfredo Vega Ramírez", "Luis Velázquez Pérez", "Roberto Rodríguez-Labrada", "Julio César Rodríguez-Díaz", "Roberto Pérez Rodríguez"]
            },
            {
                title: "The brain MRI segmentation using the atlas framework focused on the SCA2 diagnosis: a rapid review",
                authors: ["Lis Mariela Segura Vargas", "Robin Cabeza Ruiz", "Luis Velázquez Pérez", "Roberto Pérez Rodríguez"]
            },
            {
                title: "Early detection of motor impairment in SCA2 with AI: quantitative analysis of trajectories and corrections in the heel-knee-shin test",
                authors: ["Odet Lopez Batista", "Luis Velázquez Pérez", "Roberto Rodríguez-Labrada", "Julio César Rodríguez-Díaz", "Roberto Pérez Rodríguez"]
            },
            {
                title: "Using MBSE to model the kinematic variables of gait and posture in patients with SCA2",
                authors: ["Roberto Pérez Rodríguez", "Roberto Rodríguez Labrada", "Luis Velázquez Pérez"]
            },
            {
                title: "Data-mix module enhances the use of multi-modal imaging data for thalamic nuclei segmentation",
                authors: ["Robin Cabeza Ruiz", "Luis Velázquez Pérez", "Evelio González Dalmau", "Roberto Pérez Rodríguez"]
            }
        ]
    },
    {
        name: "EXPOCIENCIA",
        date: "May 2025",
        location: "Cuba",
        presentations: 2,
        papers: [
            {
                title: "Experiencias en la Utilización de Modelos Computacionales en la Gestión de Riesgo Ante Desastres",
                authors: ["Anabel Reyes Ramírez"],
                workshop: "Taller: Metas y resultados con valor agregado por la ciencia, tecnología e innovación"
            },
            {
                title: "Herramientas de IA para la segmentación de imágenes de resonancia magnética",
                authors: ["Robin Cabeza Ruiz"],
                workshop: "Taller: Inteligencia Artificial y Futuro compartido: la tecnología al servicio de la sociedad"
            }
        ]
    },
    {
        name: "XI Congreso de Agrimensura. Hotel Habana Libre. Ciudad de la Habana, Cuba",
        date: "September 2025",
        location: "Havana, Cuba",
        presentations: 3,
        papers: [
            {
                title: "Empleo de topografía de alta definición para la modelación geométrica de edificaciones patrimoniales",
                authors: ["Anabel Reyes Ramírez", "Ernesto Emilio Aguilar Leyva", "Juan Antonio Mulet Naranjo", "Luis Enrique Acosta González"]
            },
            {
                title: "Diagnóstico del estado geométrico de la torre del faro 'Punta Lucrecia' con empleo de topografía de alta definición",
                authors: ["Ernesto Emilio Aguilar Leyva", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Diagnóstico del estado actual de la metodología BIM en la gestión de proyectos en empresas de la construcción de Holguín",
                authors: ["Luis Enrique Acosta González", "Liset Estopiñan Mulet", "Anabel Reyes Ramírez"]
            }
        ]
    },
    {
        name: "15o Congreso Internacional en Competitividad Organizacional, RILCO Yucatán, México",
        date: "October 2025",
        location: "Yucatán, Mexico",
        presentations: 6,
        papers: [
            {
                title: "Integración de la metodología BIM en el sistema presupuestario cubano para el sector de la construcción",
                authors: ["Eugenio David Carbonell Charchabal", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Procedimiento para el diagnóstico de patologías en edificaciones patrimoniales mediante la integración de tecnologías VANT-BIM",
                authors: ["Anabel Reyes Ramírez", "Eyllen Nufiez Correa", "Luis Enrique Acosta González"]
            },
            {
                title: "Gestión de riesgo ante fuertes vientos en entornos urbanos mediante simulaciones computacionales",
                authors: ["Liliana Angulo Batista", "Anabel Reyes Ramírez", "Roberto Estrada Cingüalbres"]
            },
            {
                title: "Mejoras en la gestión de edificaciones patrimoniales mediante el empleo de modelos geométricos tridimensionales",
                authors: ["Juan Antonio Mulet Naranjo", "Anabel Reyes Ramírez", "Ernesto Emilio Aguilar Leyva"]
            },
            {
                title: "Aplicación de la topografía de alta definición al diagnóstico del estado geométrico de elementos constructivos",
                authors: ["Ernesto Emilio Aguilar Leyva", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Aplicación de los sistemas de información geográfica en apoyo a la movilidad urbana en Holguín, Cuba",
                authors: ["Miguel Enrique Mouso Gómez", "Libys Martha Zúñiga Igarza", "Anabel Reyes Ramírez"]
            }
        ]
    },
    {
        name: "XII Jornadas de I+D+i, IX Jornadas de doctorado ISI & 4th International Workshop on STEM Escuela Politécnica Superior de Sevilla, España",
        date: "October 2025",
        location: "Seville, Spain",
        presentations: 6,
        papers: [
            {
                title: "Herramienta computacional para la evaluación de vulnerabilidad en el diseño de cubiertas ligeras ante fuertes vientos",
                authors: ["Anabel Reyes Ramírez", "Roberto Pérez Rodríguez", "Roberto Estrada Cingüalbres", "Libys Martha Zúñiga Igarza"]
            },
            {
                title: "¿Por qué colapsan las cubiertas ligeras ante el impacto de los vientos extremos?",
                authors: ["Carlos Luis Martínez Fernández", "Roberto Andrés Estrada Cingüalbres", "Anabel Reyes Ramírez"]
            },
            {
                title: "Empleo de topografía de alta definición para el diagnóstico del estado geométrico del faro 'Punta Lucrecia' en Holguín, Cuba",
                authors: ["Ernesto Emilio Aguilar Leyva", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Improvement of coastal tourism development planning based on process reengineering",
                authors: ["Rodríguez Gómez, Jorge Luis", "Libys Martha Zúñiga Igarza", "Ridel Rodríguez Paneque"]
            },
            {
                title: "La segmentación de imágenes por resonancia magnética cerebral utilizando el enfoque de atlas centrado en el diagnóstico de SCA2: Una Revisión Rápida",
                authors: ["Robin Cabeza Ruiz", "Roberto Pérez Rodríguez", "Luis Velázquez Pérez"]
            },
            {
                title: "Brainstem Segmentation in 3D MRI using Quaternion-Valued CNNs",
                authors: ["Robin Cabeza Ruiz", "Roberto Pérez Rodríguez", "Luis Velázquez Pérez"]
            }
        ]
    },
    {
        name: "VIII Jornada Internacional de la Ingeniería Civil en Cuba",
        date: "October 2025",
        location: "Cuba",
        presentations: 5,
        keynotes: 2,
        papers: [
            {
                title: "Consideraciones para el diseño de una herramienta basada en SIG (Sistema de Información Geográfica) en apoyo al Sistema de Salud Público en Holguín",
                authors: ["Anabel Reyes Ramírez", "Ernesto Emilio Aguilar Leyva", "Luis Enrique Acosta González"]
            },
            {
                title: "Diagnóstico del estado geométrico de la torre del Faro 'Punta Lucrecia' con empleo de topografía de alta definición",
                authors: ["Ernesto Emilio Aguilar Leyva", "Anabel Reyes Ramírez", "Luis Enrique Acosta González"]
            },
            {
                title: "Aplicación de la topografía de alta definición en la modelación geométrica de edificaciones patrimoniales",
                authors: ["Anabel Reyes Ramírez", "Ernesto Emilio Aguilar Leyva", "Juan Antonio Mulet Naranjo", "Luis Enrique Acosta González"]
            },
            {
                title: "Análisis de resistencia de tipologías de estructuras soportes de cubiertas ligeras con empleo de herramientas computacionales",
                authors: ["Carlos Luis Martínez Fernández", "Roberto Andrés Estrada Cingüalbres", "Anabel Reyes Ramírez"]
            },
            {
                title: "Uso de la Interferometría de Radar de apertura sintética INSAR para la Obtención de Modelos Digitales de Elevación (MDE)",
                authors: ["Luis Enrique Acosta González", "Antonio David Molina Ramírez", "Anabel Reyes Ramírez"]
            }
        ],
        keynotes: [
            {
                title: "La ingeniería civil en la era digital, claves para una Construcción 4.0",
                author: "Anabel Reyes Ramírez",
                type: "Conferencia magistral"
            },
            {
                title: "Sostenibilidad desde un enfoque de la resiliencia fisico-espacial de las estructuras construidas y el efecto del viento",
                author: "Libys Martha Zúñiga Igarza",
                type: "Conferencia magistral"
            }
        ]
    },
    {
        name: "VIII Simposio Internacional sobre Sistemas electromecánicos SISEM Universidad Antonio Nariño, Colombia",
        date: "November 2025",
        location: "Colombia",
        presentations: 1,
        papers: [
            {
                title: "Diseño Inteligente en la Era 4.0: Los sistemas CAD/CAM/CAE y la IA revolucionando la creación de productos",
                authors: ["Roberto Pérez Rodríguez"]
            }
        ]
    }
];