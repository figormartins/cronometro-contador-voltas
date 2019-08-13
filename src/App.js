import React, { useState, useEffect } from 'react'
import './styles.css'
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Botao from './Botao'

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [tempo, setTempo] = useState(0)
  const [correndo, setCorrendo] = useState(false)

  useEffect(() => {
    let timer = null

    if (correndo) {
      timer = setInterval(() => {
        setTempo(antigo => antigo + 1)
      }, 1000)
    }

    return () => {
      if (timer)
        clearInterval(timer)
    }

  }, [correndo])

  const toggleCorrendo = () => {
    setCorrendo(!correndo)
  }
  const incrementa = () => {
    if (correndo)
      setNumVoltas(numVoltas + 1)
  }
  const decrementa = () => {
    if (numVoltas > 0)
      setNumVoltas(numVoltas - 1)
  }
  const reiniciar = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div>
      <MostraVoltas voltas={numVoltas} />
      <div>
        <Botao texto='+' className='maior' onClick={incrementa} />
        <Botao texto='-' className='maior' onClick={decrementa} />
      </div>
      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo / numVoltas)} />
      }
      <Botao onClick={toggleCorrendo} texto={ correndo ? 'Pausar' : 'Iniciar'} />
      <Botao onClick={reiniciar} texto='Reiniciar' />
    </div>
  )
}

export default App
