"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TerminalTypewriter } from "@/components/terminal-typewriter"
import { EasterEggModal } from "@/components/easter-egg-modal"
import { usePdfGenerator } from "@/hooks/use-pdf-generator"
import {
  Code2,
  Database,
  Cloud,
  Server,
  Globe,
  Download,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Layers,
  Shield,
  Monitor,
  ExternalLink,
  Camera,
  Printer,
  MessageCircle,
  Phone,
  Calendar,
  FileText,
} from "lucide-react"

export default function Portfolio() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const { generatePDF } = usePdfGenerator()

  const handleAvatarClick = () => {
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)

    // Easter egg se activa después de 5 clics
    if (newClickCount >= 5) {
      setShowEasterEgg(true)
      setClickCount(0) // Reset counter
    }
  }

  const handleDownloadCV = async () => {
    setIsGeneratingPDF(true)
    try {
      await generatePDF()
    } catch (error) {
      console.error("Error al generar PDF:", error)
    } finally {
      // Restaurar estado después de un delay para dar tiempo a la impresión
      setTimeout(() => {
        setIsGeneratingPDF(false)
      }, 2000)
    }
  }

  const skills = {
    "Desarrollo Web": {
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: "Python", detail: "Django, Pandas" },
        { name: "PHP", detail: "Laravel" },
        { name: "HTML", detail: "Markup & Styling" },
        { name: "React", detail: "Frontend Library" },
        { name: "Next.js", detail: "Full-stack Framework" },
      ],
    },
    "Cloud & AWS": {
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: "EC2", detail: "Compute Instances" },
        { name: "S3", detail: "Object Storage" },
        { name: "Lambda", detail: "Serverless Functions" },
        { name: "CloudWatch", detail: "Monitoring" },
        { name: "Secret Manager", detail: "Security" },
        { name: "Auto Scaling", detail: "Scalability" },
        { name: "VPN Site to Site", detail: "Networking" },
        { name: "Snapshots", detail: "Backup & Recovery" },
        { name: "Textract", detail: "Document Analysis" },
        { name: "Recognition", detail: "Image & Video Analysis" },
      ],
    },
    "Sistemas Operativos": {
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: "Windows Server 2019", detail: "Enterprise Server" },
        { name: "Ubuntu Server", detail: "Linux Administration" },
      ],
    },
    "Bases de Datos": {
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "SQL", detail: "MariaDB, MySQL, PostgreSQL" },
        { name: "NoSQL", detail: "SQLite, MongoDB, DynamoDB" },
      ],
    },
    "Software Empresarial": {
      icon: <Monitor className="w-6 h-6" />,
      items: [{ name: "Contpaqi", detail: "Sistema Contable" }],
    },
    "Seguridad y Videovigilancia": {
      icon: <Camera className="w-6 h-6" />,
      items: [
        { name: "DVR Systems", detail: "Configuración y administración" },
        { name: "Cámaras IP", detail: "Instalación y configuración" },
        { name: "Sistemas CCTV", detail: "Desarrollo y mantenimiento" },
        { name: "Video Analytics", detail: "Análisis y procesamiento" },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" id="portfolio-content">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Edgardo Alan Martinez</h1>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Contacto
            </Button>
            <Button size="sm" onClick={handleDownloadCV} disabled={isGeneratingPDF}>
              {isGeneratingPDF ? (
                <Printer className="w-4 h-4 mr-2 animate-pulse" />
              ) : (
                <Download className="w-4 h-4 mr-2" />
              )}
              {isGeneratingPDF ? "Preparando..." : "Descargar CV"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Typewriter */}
          <TerminalTypewriter name="Edgardo Alan Martinez Miramontes" speed={100} delay={800} />

          {/* Avatar con Easter Egg */}
          <div
            className={`w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              clickCount > 0 ? "animate-pulse" : ""
            }`}
            onClick={handleAvatarClick}
            title={clickCount > 0 ? `${5 - clickCount} clics más para el easter egg...` : "¿Hay algo oculto aquí? 🤔"}
          >
            EAM
            {clickCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                {clickCount}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block text-blue-600 text-3xl md:text-4xl">Administrador y Desarrollador de Software</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Especialista en desarrollo full-stack, administración de sistemas y servicios en la nube. 2 años de
            experiencia en múltiples tecnologías y plataformas empresariales.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Github className="w-5 h-5 mr-2" />
                <a
                  href="https://github.com/Ioriyagami9999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Ver Proyectos
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadCV} disabled={isGeneratingPDF}>
                {isGeneratingPDF ? (
                  <Printer className="w-5 h-5 mr-2 animate-pulse" />
                ) : (
                  <Download className="w-5 h-5 mr-2" />
                )}
                {isGeneratingPDF ? "Preparando..." : "Descargar CV"}
              </Button>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/edgardo-alan-martinez-miramontes-bb0454233"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Ioriyagami9999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/526144644561"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="WhatsApp: 614-464-4561"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="mailto:alan9102martinez@gmail.com"
                className="group flex items-center justify-center w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Información de contacto visible */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="font-medium">614-464-4561</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-600" />
                  <span className="font-medium">alan9102martinez@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Habilidades de Programación</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiencia comprobada en desarrollo de software, administración de sistemas y tecnologías en la nube
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, data]) => (
            <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{data.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <CardDescription>
                      {data.items.length} tecnología{data.items.length > 1 ? "s" : ""}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.items.map((skill, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          Avanzado
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{skill.detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos más importantes que he desarrollado, demostrando mis habilidades en desarrollo
            full-stack y administración de sistemas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sistema de Facturas */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <img
                src="https://api.screenshotmachine.com/?key=demo&url=https://v0-estructura-de-proyecto.vercel.app/&dimension=400x192"
                alt="Previsualización del Sistema de Facturas"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=192&width=400&text=Sistema+de+Facturas"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Sistema de Facturas</h3>
                <p className="text-blue-100 text-sm mt-1">Aplicación Web Completa</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Sistema completo de gestión de facturas desarrollado con tecnologías modernas. Incluye funcionalidades
                  de creación, edición, visualización y gestión de facturas empresariales.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-blue-600" />
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      TypeScript
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      Tailwind CSS
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Características Principales</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      Gestión completa de facturas
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      Interfaz moderna y responsive
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      Validación de datos en tiempo real
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      Exportación de documentos
                    </li>
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open("https://v0-estructura-de-proyecto.vercel.app/", "_blank")}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open("https://github.com/Ioriyagami9999", "_blank")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Documentación
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Control de Citas */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <img
                src="https://api.screenshotmachine.com/?key=demo&url=https://github.com/Ioriyagami9999/control_de_citas&dimension=400x192"
                alt="Previsualización del Control de Citas"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=192&width=400&text=Control+de+Citas"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Control de Citas</h3>
                <p className="text-green-100 text-sm mt-1">Sistema de Gestión</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Aplicación para la gestión y control de citas médicas o profesionales. Permite programar, modificar y
                  hacer seguimiento de citas de manera eficiente.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-green-600" />
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      Django
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      SQLite
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      HTML/CSS
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Características Principales</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      Programación de citas
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      Gestión de pacientes/clientes
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      Calendario interactivo
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      Reportes y estadísticas
                    </li>
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open("https://github.com/Ioriyagami9999/control_de_citas", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver Código
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() =>
                      window.open("https://github.com/Ioriyagami9999/control_de_citas/blob/main/README.md", "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentación
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sistema Punto de Venta */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <img
                src="https://api.screenshotmachine.com/?key=demo&url=https://v0-venta-punto-de-venta.vercel.app/&dimension=400x192"
                alt="Previsualización del Sistema Punto de Venta"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=192&width=400&text=Sistema+POS"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Sistema Punto de Venta</h3>
                <p className="text-red-100 text-sm mt-1">POS Completo</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Sistema completo de punto de venta con funcionalidades de escaneo de códigos de barras, gestión de
                  inventario, procesamiento de ventas y generación de reportes.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-red-600" />
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      TypeScript
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      Tailwind CSS
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Características Principales</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                      Escaneo de códigos de barras
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                      Gestión de inventario en tiempo real
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                      Procesamiento de ventas con IVA
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                      Dashboard con métricas de ventas
                    </li>
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-red-600 hover:bg-red-700"
                    onClick={() => window.open("https://v0-venta-punto-de-venta.vercel.app/", "_blank")}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open("https://github.com/Ioriyagami9999", "_blank")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Documentación
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ajedrez Online */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <img
                src="https://api.screenshotmachine.com/?key=demo&url=https://v0-anonymous-chess-game.vercel.app/&dimension=400x192"
                alt="Previsualización del Ajedrez Online"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=192&width=400&text=Ajedrez+Online"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Ajedrez Online</h3>
                <p className="text-purple-100 text-sm mt-1">Juego Multijugador</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-lg">♔</span>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Aplicación de ajedrez online con funcionalidades multijugador. Permite crear salas privadas, unirse a
                  partidas existentes y jugar tanto en modo local como en línea.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-purple-600" />
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      WebSockets
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      Tailwind CSS
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Características Principales</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      Modo multijugador online
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      Creación de salas privadas
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      Juego local para dos jugadores
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      Interfaz moderna y responsive
                    </li>
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.open("https://v0-anonymous-chess-game.vercel.app/", "_blank")}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Jugar Ahora
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open("https://github.com/Ioriyagami9999", "_blank")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Documentación
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Interesado en ver más proyectos? Visita mi perfil de GitHub para explorar mi trabajo completo.
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://github.com/Ioriyagami9999", "_blank")}
            className="border-gray-300 hover:border-gray-400"
          >
            <Github className="w-5 h-5 mr-2" />
            Ver Todos los Proyectos
          </Button>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Especialización</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo Full-Stack</h3>
              <p className="text-gray-600">Experiencia en desarrollo web completo con Python, PHP, React y Next.js</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Administración de Sistemas</h3>
              <p className="text-gray-600">Gestión de servidores Windows y Linux, configuración y mantenimiento</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Arquitectura en la Nube</h3>
              <p className="text-gray-600">Diseño e implementación de soluciones escalables en AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para colaborar?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos y oportunidades. Contactemos para discutir cómo puedo contribuir a tu
            equipo.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://wa.me/526144644561", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800"
              onClick={handleDownloadCV}
              disabled={isGeneratingPDF}
            >
              {isGeneratingPDF ? (
                <Printer className="w-5 h-5 mr-2 animate-pulse" />
              ) : (
                <Download className="w-5 h-5 mr-2" />
              )}
              {isGeneratingPDF ? "Preparando..." : "Descargar CV"}
            </Button>
          </div>
          <div className="text-gray-400 text-sm">
            <p className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>614-464-4561</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Información Personal */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Edgardo Alan Martinez</h3>
              <p className="text-gray-400 mb-4">
                Administrador y Desarrollador de Software especializado en tecnologías web y cloud computing.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/edgardo-alan-martinez-miramontes-bb0454233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Ioriyagami9999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/526144644561"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#habilidades"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Habilidades
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleDownloadCV()
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar CV
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  alan9102martinez@gmail.com
                </p>
                <p className="text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  614-464-4561
                </p>
                <p className="text-gray-400 flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Chihuahua, México
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 w-full"
                  onClick={() => window.open("https://wa.me/526144644561", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Edgardo Alan Martinez Miramontes. Desarrollado con Next.js y Tailwind CSS.</p>
          </div>
        </div>
      </footer>

      {/* Easter Egg Modal */}
      <EasterEggModal isOpen={showEasterEgg} onClose={() => setShowEasterEgg(false)} />
    </div>
  )
}
