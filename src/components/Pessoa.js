function Pessoa({ nome, idade, profissao, imagem }) {
  return (
    <div>
      <img src={imagem} alt={nome} />
      <h1>Nome: {nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa;