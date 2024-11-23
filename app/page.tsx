"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import confetti from 'canvas-confetti'

// feature/final-touches

const useGlassCard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return { position, opacity, handleMouseMove, handleMouseLeave }
}

export default function Component() {
  const mainCard = useGlassCard()
  const [confettiTriggered, setConfettiTriggered] = useState(false)

  useEffect(() => {
    if (confettiTriggered) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
      setConfettiTriggered(false)
    }
  }, [confettiTriggered])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 p-8 flex items-center justify-center">
      <Card 
        className="w-full max-w-2xl backdrop-blur-md bg-white/30 border-none shadow-lg relative overflow-hidden"
        onMouseMove={mainCard.handleMouseMove}
        onMouseLeave={mainCard.handleMouseLeave}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 opacity-30 transition-opacity duration-300"
          style={{
            opacity: mainCard.opacity,
            background: `radial-gradient(circle at ${mainCard.position.x}px ${mainCard.position.y}px, rgba(255,255,255,0.2), transparent 50%)`,
          }}
        />
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold text-center text-white mb-4">Layla Vargas</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Instituto Tecnológico de las Américas (ITLA)</CardTitle>
            </CardHeader>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white">Programación III</CardTitle>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white">2019-8368</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-white">Módulo 5. Herramientas de administración de fuentes.</CardTitle>
            </CardHeader>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white">Docente: Kelyn Tejada Belliard</CardTitle>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white">Fecha: 22/11/2024</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <Button 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => setConfettiTriggered(true)}
          >
            ¡Celebrar!
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}