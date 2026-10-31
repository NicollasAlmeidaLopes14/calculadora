export default function Historico({ registros }) {
  return (
    <section className="historico" aria-label="Histórico das últimas operações">
      {registros.length === 0 ? (
        <p className="historico-vazio">Nenhuma operação ainda</p>
      ) : (
        <ul className="historico-lista">
          {registros.map((registro, indice) => (
            <li key={indice}>
              {registro.anterior} {registro.operador} {registro.atual} = {registro.resultado}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
