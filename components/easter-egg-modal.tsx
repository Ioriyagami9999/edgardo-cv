"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Building2, X, Sparkles, Users, Coffee } from "lucide-react"

interface EasterEggModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EasterEggModal({ isOpen, onClose }: EasterEggModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full animate-in fade-in-0 zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center relative">
          <Button variant="ghost" size="sm" onClick={onClose} className="absolute right-2 top-2 h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
              <Heart className="w-6 h-6 text-red-500 absolute -top-1 -right-1 animate-bounce" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">¡Easter Egg Encontrado! 🎉</CardTitle>
          <CardDescription>Un mensaje especial de agradecimiento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Team Photo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src="/images/team-photo.png"
                alt="Equipo de trabajo - Momentos especiales con colegas"
                className="rounded-lg shadow-lg max-w-full h-auto max-h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Esta foto representa los momentos especiales compartidos con colegas increíbles. Quiero expresar mi
              profundo agradecimiento a quienes han sido fundamentales en mi crecimiento profesional:
            </p>
          </div>

          {/* Empresas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-blue-600" />
              Empresas que impulsaron mi carrera
            </h3>

            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-semibold text-blue-900">Finanova</h4>
                <p className="text-sm text-blue-700">
                  Por impulsar mi carrera y brindarme oportunidades de crecimiento
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <Building2 className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-900">Fertinor</h4>
                <p className="text-sm text-green-700">Por confiar en mi potencial y apoyar mi desarrollo profesional</p>
              </div>
            </div>
          </div>

          {/* Compañeros */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-600" />A mis increíbles compañeros
            </h3>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start space-x-3">
                <Users className="w-8 h-8 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-purple-900 mb-2">Equipo de trabajo</h4>
                  <p className="text-sm text-purple-700 mb-3">
                    A todos mis compañeros que han compartido conocimientos, experiencias y momentos únicos:
                  </p>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Por las sesiones de brainstorming que generaron grandes ideas</li>
                    <li>• Por el apoyo mutuo en los proyectos más desafiantes</li>
                    <li>• Por compartir sus conocimientos y experiencias</li>
                    <li>• Por crear un ambiente de trabajo colaborativo y positivo</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-start space-x-3">
                <Coffee className="w-8 h-8 text-orange-600 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-orange-900 mb-2">Mentores y colegas</h4>
                  <p className="text-sm text-orange-700">
                    A quienes me enseñaron que el éxito se construye en equipo, que cada desafío es una oportunidad de
                    aprendizaje, y que la mejor tecnología es la que se comparte con grandes personas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center border-t pt-4">
            <p className="text-sm text-gray-500 italic mb-2">
              "El éxito no se logra solo. Gracias por ser parte de mi historia profesional." 💙
            </p>
            <p className="text-xs text-gray-400">
              Cada línea de código, cada proyecto completado, cada problema resuelto... lleva un pedacito de todos
              ustedes. ¡Gracias! 🚀
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-700 hover:via-purple-700 hover:to-green-700"
            >
              <Heart className="w-4 h-4 mr-2" />
              ¡Gracias por descubrirlo!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
