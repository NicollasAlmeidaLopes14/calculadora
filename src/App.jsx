import { useState } from 'react'
import Display from './components/Display.jsx'
import Historico from './components/Historico.jsx'
import Botao from './components/Botao.jsx'
import { somar, subtrair, multiplicar, dividir } from './utils/operacoes.js'

const NUMEROS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']

const OPERADORES = ['+', '-', 'x', '÷']

// Executa a operação indicada entre os dois números.
function calcular(a, b, operador) {
  switch (operador) {
    case '+':
      return somar(a, b)
    case '-':
      return subtrair(a, b)
    case 'x':
      return multiplicar(a, b)
    case '÷':
      return dividir(a, b)
    default:
      // Retorna o segundo número quando o operador não é reconhecido.
      return b
  }
}

export default function App() {
  const [display, setDisplay] = useState('0')
  const [anterior, setAnterior] = useState(null)
  const [operador, setOperador] = useState(null)
  const [novoNumero, setNovoNumero] = useState(true)
  const [historico, setHistorico] = useState([])

  function digitarNumero(n) {
    if (novoNumero) {
      setDisplay(n)
      setNovoNumero(false)
    } else {
      setDisplay(display === '0' ? n : display + n)
    }
  }

  function digitarDecimal() {
    if (novoNumero) {
      setDisplay('0.')
      setNovoNumero(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  function escolherOperador(op) {
    if (display === 'Erro') return
    const atual = Number(display)
    if (anterior !== null && operador && !novoNumero) {
      const resultado = calcularResultado(atual)
      if (resultado === null) return
      setDisplay(String(resultado))
      setAnterior(resultado)
    } else {
      setAnterior(atual)
    }
    setOperador(op)
    setNovoNumero(true)
  }

  function igual() {
    if (anterior === null || !operador) return
    const resultado = calcularResultado(Number(display))
    if (resultado === null) return
    setDisplay(String(resultado))
    setAnterior(null)
    setOperador(null)
    setNovoNumero(true)
  }

  function calcularResultado(atual) {
    try {
      const resultado = calcular(anterior, atual, operador)
      setHistorico((registros) => [
        { anterior, atual, operador, resultado },
        ...registros,
      ].slice(0, 3))
      return resultado
    } catch {
      setDisplay('Erro')
      setAnterior(null)
      setOperador(null)
      setNovoNumero(true)
      return null
    }
  }

  function limpar() {
    setDisplay('0')
    setAnterior(null)
    setOperador(null)
    setNovoNumero(true)
  }

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <Historico registros={historico} />
      <Display valor={display} />
      <div className="teclado">
        <div className="numeros">
          {NUMEROS.map((n) => (
            <Botao key={n} valor={n} onClick={digitarNumero} />
          ))}
          <Botao valor="." onClick={digitarDecimal} />
          <Botao valor="C" onClick={limpar} tipo="limpar" />
          <Botao valor="=" onClick={igual} tipo="igual" />
        </div>
        <div className="operadores">
          {OPERADORES.map((op) => (
            <Botao key={op} valor={op} onClick={escolherOperador} tipo="operador" />
          ))}
        </div>
      </div>
    </div>
  )
}
