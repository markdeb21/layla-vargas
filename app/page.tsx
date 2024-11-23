"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import confetti from 'canvas-confetti'
import { ChevronDown, ChevronUp, GraduationCap, Calendar, User, Book } from 'lucide-react'

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [confettiTriggered, setConfettiTriggered] = useState(false)

  const triggerConfetti = () => {
    if (!confettiTriggered) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFC0CB', '#FFB6C1', '#FF69B4']
      })
      setConfettiTriggered(true)
      setTimeout(() => setConfettiTriggered(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-8 flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-white shadow-xl">
        <CardHeader className="bg-pink-400 text-white">
          <CardTitle className="text-3xl font-bold text-center">Layla Vargas</CardTitle>
          <p className="text-center text-pink-100">Instituto Tecnológico de las Américas (ITLA)</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <User className="text-pink-500" />
              <span className="font-medium">Estudiante ID:</span>
              <Badge variant="secondary" className="bg-pink-100 text-pink-700">2019-8368</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Book className="text-pink-500" />
              <span className="font-medium">Curso:</span>
              <span>Programación III</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="text-pink-500" />
              <span className="font-medium">Módulo:</span>
              <span>5. Herramientas de administración de fuentes</span>
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <User className="text-pink-500" />
                      <span className="font-medium">Docente:</span>
                      <span>Kelyn Tejada Belliard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-pink-500" />
                      <span className="font-medium">Fecha de entrega:</span>
                      <span>Viernes 22 de noviembre de 2024</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" /> Menos información
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" /> Más información
                </>
              )}
            </Button>
            <Button
              onClick={triggerConfetti}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white"
              disabled={confettiTriggered}
            >
              {confettiTriggered ? "¡Felicidades!" : "Celebrar entrega"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}