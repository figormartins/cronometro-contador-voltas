import React from 'react'

const MostraTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0' + segundos : segundos

  return (
    <div className='tempo'>
      <span>{`${minutosStr} : ${segundosStr}`}</span><br />
      Tempo médio por volta
    </div>
  )
}

export default MostraTempo