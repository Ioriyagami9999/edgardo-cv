"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

interface TerminalTypewriterProps {
  name: string
  speed?: number
  delay?: number
}

export function TerminalTypewriter({ name, speed = 120, delay = 1000 }: TerminalTypewriterProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayCommand, setDisplayCommand] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const fullCommand = `echo "Desarrollador: ${name} - 2 años en experiencia"`
  const steps = [
    { text: "", delay: delay },
    { text: "e", delay: speed },
    { text: "ec", delay: speed },
    { text: "ech", delay: speed },
    { text: "echo", delay: speed },
    { text: "echo ", delay: speed + 50 },
    { text: 'echo "', delay: speed },
    { text: 'echo "D', delay: speed },
    { text: 'echo "De', delay: speed },
    { text: 'echo "Des', delay: speed },
    { text: 'echo "Desa', delay: speed },
    { text: 'echo "Desar', delay: speed },
    { text: 'echo "Desarr', delay: speed },
    { text: 'echo "Desarro', delay: speed },
    { text: 'echo "Desarroll', delay: speed },
    { text: 'echo "Desarrolla', delay: speed },
    { text: 'echo "Desarrollad', delay: speed },
    { text: 'echo "Desarrollado', delay: speed },
    { text: 'echo "Desarrollador', delay: speed },
    { text: 'echo "Desarrollador:', delay: speed },
    { text: 'echo "Desarrollador: ', delay: speed },
  ]

  // Agregar cada letra del nombre
  for (let i = 0; i < name.length; i++) {
    steps.push({
      text: `echo "Desarrollador: ${name.substring(0, i + 1)}`,
      delay: speed,
    })
  }

  // Agregar la experiencia
  const experienceText = " - 2 años en experiencia"
  for (let i = 0; i < experienceText.length; i++) {
    steps.push({
      text: `echo "Desarrollador: ${name}${experienceText.substring(0, i + 1)}`,
      delay: speed,
    })
  }

  // Cerrar comillas
  steps.push({
    text: `echo "Desarrollador: ${name} - 2 años en experiencia"`,
    delay: speed,
  })

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const currentSteps = steps // Store steps in a local variable
    if (currentStep < currentSteps.length) {
      const timeout = setTimeout(() => {
        setDisplayCommand(currentSteps[currentStep].text)
        setCurrentStep((prev) => prev + 1)
      }, currentSteps[currentStep].delay)

      return () => clearTimeout(timeout)
    } else if (currentStep === currentSteps.length && !showResult) {
      // Simular presionar Enter y mostrar resultado
      const timeout = setTimeout(() => {
        setShowResult(true)
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [currentStep, showResult])

  return (
    <div
      className="bg-gray-900 rounded-lg p-6 font-mono text-sm max-w-2xl mx-auto mb-8 shadow-2xl"
      id="terminal-section"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-gray-300 text-xs">terminal</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2">
        {/* Command being typed */}
        <div className="text-gray-400">
          <span className="text-green-400">user@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
          <span className="text-yellow-400">{displayCommand.includes("echo") ? "echo" : displayCommand}</span>
          {displayCommand.includes("echo") && displayCommand.length > 4 && (
            <span className="text-white"> {displayCommand.substring(5)}</span>
          )}
          {currentStep < steps.length && showCursor && <span className="text-white bg-white animate-pulse">_</span>}
        </div>

        {/* Result after command is complete */}
        {showResult && (
          <div className="text-cyan-400 animate-fade-in">
            <span className="text-cyan-300">Desarrollador:</span>{" "}
            <span className="text-white font-semibold">{name}</span>{" "}
            <span className="text-yellow-300">- 2 años en experiencia</span>
          </div>
        )}

        {/* New prompt after result */}
        {showResult && (
          <div className="text-gray-400 mt-4 animate-fade-in">
            <span className="text-green-400">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ </span>
            <span className="text-white bg-white animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  )
}
