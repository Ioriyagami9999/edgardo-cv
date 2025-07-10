"use client"

import { useCallback } from "react"

export function usePdfGenerator() {
  const generatePDF = useCallback(() => {
    try {
      // Ocultar elementos que no queremos en el PDF
      const terminal = document.getElementById("terminal-section")
      const easterEggModal = document.querySelector('[role="dialog"]')
      const stickyHeader = document.querySelector("header")
      const socialLinks = document.querySelectorAll('a[href*="linkedin"], a[href*="github"], a[href*="wa.me"]')

      // Guardar estilos originales
      const originalTerminalDisplay = terminal?.style.display || ""
      const originalHeaderPosition = stickyHeader ? (stickyHeader as HTMLElement).style.position || "" : ""
      const originalSocialDisplay = Array.from(socialLinks).map((link) => (link as HTMLElement).style.display || "")

      // Ocultar elementos no deseados
      if (terminal) terminal.style.display = "none"
      if (stickyHeader) (stickyHeader as HTMLElement).style.position = "relative"
      if (easterEggModal) (easterEggModal as HTMLElement).style.display = "none"
      socialLinks.forEach((link) => {
        ;(link as HTMLElement).style.display = "none"
      })

      // Agregar estilos específicos para impresión
      const printStyles = document.createElement("style")
      printStyles.id = "print-styles"
      printStyles.textContent = `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
          
          #terminal-section {
            display: none !important;
          }
          
          .bg-gradient-to-br {
            background: white !important;
          }
          
          .bg-gray-900, .bg-gray-800 {
            background: #f8f9fa !important;
            color: black !important;
          }
          
          .text-white {
            color: black !important;
          }
          
          .text-gray-300, .text-gray-400 {
            color: #666 !important;
          }
          
          header {
            position: relative !important;
            background: white !important;
            border-bottom: 1px solid #ddd !important;
          }
          
          .shadow-lg, .shadow-2xl {
            box-shadow: none !important;
          }
          
          .hover\\:scale-110, .hover\\:scale-105 {
            transform: none !important;
          }
          
          .animate-pulse, .animate-bounce {
            animation: none !important;
          }
          
          a[href*="linkedin"], a[href*="github"], a[href*="wa.me"] {
            display: none !important;
          }
          
          .cursor-pointer {
            cursor: default !important;
          }
          
          button {
            background: #f8f9fa !important;
            color: black !important;
            border: 1px solid #ddd !important;
          }
          
          .bg-blue-600, .bg-green-600, .bg-purple-600 {
            background: #f8f9fa !important;
            color: black !important;
          }
          
          @page {
            margin: 0.5in;
            size: A4;
          }
        }
      `
      document.head.appendChild(printStyles)

      // Agregar información de contacto visible para el PDF
      const contactInfo = document.createElement("div")
      contactInfo.id = "pdf-contact-info"
      contactInfo.style.cssText = `
        display: none;
        padding: 20px;
        background: #f8f9fa;
        border: 1px solid #ddd;
        margin: 20px 0;
        border-radius: 8px;
      `
      contactInfo.innerHTML = `
        <h3 style="margin: 0 0 10px 0; color: black;">Información de Contacto</h3>
        <p style="margin: 5px 0; color: black;">📧 Email: alan9102martinez@gmail.com</p>
        <p style="margin: 5px 0; color: black;">📱 WhatsApp: 614-464-4561</p>
        <p style="margin: 5px 0; color: black;">📍 Ubicación: Chihuahua, México</p>
        <p style="margin: 5px 0; color: black;">💼 LinkedIn: linkedin.com/in/edgardo-alan-martinez-miramontes-bb0454233</p>
        <p style="margin: 5px 0; color: black;">🔗 GitHub: github.com/Ioriyagami9999</p>
      `

      // Agregar estilos para mostrar la info de contacto solo en impresión
      const contactStyles = document.createElement("style")
      contactStyles.textContent = `
        @media print {
          #pdf-contact-info {
            display: block !important;
          }
        }
      `
      document.head.appendChild(contactStyles)

      // Insertar la información de contacto después del hero section
      const heroSection = document.querySelector("section")
      if (heroSection && heroSection.parentNode) {
        heroSection.parentNode.insertBefore(contactInfo, heroSection.nextSibling)
      }

      // Usar la funcionalidad nativa de impresión del navegador
      setTimeout(() => {
        window.print()

        // Limpiar después de la impresión
        setTimeout(() => {
          // Restaurar estilos originales
          if (terminal) terminal.style.display = originalTerminalDisplay
          if (stickyHeader) (stickyHeader as HTMLElement).style.position = originalHeaderPosition
          socialLinks.forEach((link, index) => {
            ;(link as HTMLElement).style.display = originalSocialDisplay[index]
          })

          // Remover elementos temporales
          const printStylesElement = document.getElementById("print-styles")
          const contactInfoElement = document.getElementById("pdf-contact-info")
          if (printStylesElement) printStylesElement.remove()
          if (contactInfoElement) contactInfoElement.remove()
          if (contactStyles) contactStyles.remove()
        }, 1000)
      }, 500)
    } catch (error) {
      console.error("Error generando PDF:", error)

      // Fallback: crear un archivo de texto con la información
      const fallbackContent = `
CURRICULUM VITAE

Edgardo Alan Martinez Miramontes
Administrador y Desarrollador de Software
2 años en experiencia

INFORMACIÓN DE CONTACTO:
Email: alan9102martinez@gmail.com
WhatsApp: 614-464-4561
Ubicación: Chihuahua, México
LinkedIn: https://www.linkedin.com/in/edgardo-alan-martinez-miramontes-bb0454233
GitHub: https://github.com/Ioriyagami9999

HABILIDADES TÉCNICAS:

Desarrollo Web:
• Python (Django, Pandas)
• PHP (Laravel)
• HTML (Markup & Styling)
• React (Frontend Library)
• Next.js (Full-stack Framework)

Cloud & AWS:
• EC2 (Compute Instances)
• S3 (Object Storage)
• Lambda (Serverless Functions)
• CloudWatch (Monitoring)
• Secret Manager (Security)
• Auto Scaling (Scalability)
• VPN Site to Site (Networking)
• Snapshots (Backup & Recovery)
• Textract (Document Analysis)
• Recognition (Image & Video Analysis)

Sistemas Operativos:
• Windows Server 2019 (Enterprise Server)
• Ubuntu Server (Linux Administration)

Bases de Datos:
• SQL (MariaDB, MySQL, PostgreSQL)
• NoSQL (SQLite, MongoDB, DynamoDB)

Software Empresarial:
• Contpaqi (Sistema Contable)

Seguridad y Videovigilancia:
• DVR Systems (Configuración y administración)
• Cámaras IP (Instalación y configuración)
• Sistemas CCTV (Desarrollo y mantenimiento)
• Video Analytics (Análisis y procesamiento)

ÁREAS DE ESPECIALIZACIÓN:
• Desarrollo Full-Stack
• Administración de Sistemas
• Arquitectura en la Nube

© 2024 Edgardo Alan Martinez Miramontes
      `

      // Crear blob y descargar
      const blob = new Blob([fallbackContent], { type: "text/plain;charset=utf-8" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Edgardo_Alan_Martinez_CV.txt"
      a.style.display = "none"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }, [])

  return { generatePDF }
}
