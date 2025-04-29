import { useState } from "react"; // Importa o hook useState do React para gerenciar estados.
import BackCard from "./components/BackCard"; // Componente para a parte traseira do cartão.
import CardFront from "./components/FrontCard"; // Componente para a parte frontal do cartão.

export default function App() {
  // Estados para armazenar informações do cartão e do pagamento.
  const [nome, setNome] = useState(""); // Estado para o nome do titular do cartão.
  const [numero, setNumero] = useState(""); // Estado para o número do cartão.
  const [mes, setMes] = useState(0); // Estado para o mês de expiração do cartão.
  const [ano, setAno] = useState(0); // Estado para o ano de expiração do cartão.
  const [cvv, setCvv] = useState(0); // Estado para o código de segurança (CVV).
  const [senha, setSenha] = useState(""); // Estado para a senha do cartão.

  // Função chamada ao clicar no botão PAGAR.
  function pagar() {
    console.log(nome); // Exibe o nome no console.
    console.log(numero); // Exibe o número do cartão no console.
    console.log(mes); // Exibe o mês de expiração no console.
    console.log(ano); // Exibe o ano de expiração no console.
    console.log(cvv); // Exibe o CVV no console.
    console.log(senha); // Exibe a senha no console.
  }

  return (
    <div className="w-full h-screen flex">
      {/* Seção da esquerda para exibir a parte visual do cartão */}
      <div className="w-[40%] relative h-full bg-[#271540]">
        <div className="absolute top-10 left-50">
          <CardFront /> {/* Componente que renderiza a frente do cartão */}
        </div>
        <div className="absolute top-95 left-80">
          <BackCard /> {/* Componente que renderiza o verso do cartão */}
        </div>
      </div>

      {/* Seção da direita para o formulário de pagamento */}
      <div className="w-[60%] h-full flex items-end p-[40px] flex-col">
        <h1 className="text-[45px] w-[70%] h-[150px] font-bold">
          Preencha os campos para concluir o pagamento
        </h1>

        {/* Div para organizar os campos do formulário */}
        <div className="w-[65%] h-auto min-h-[200px] flex flex-col gap-4">
          {/* Campo Nome no Cartão */}
          <div className="w-full flex flex-col">
            <label htmlFor="nome" className="text-[20px]">
              Nome no cartão
            </label>
            <input
              onChange={(event) => setNome(event.target.value)} // Atualiza o estado `nome`.
              type="text"
              className="w-full h-[40px] rounded-md bg-[#D9D9D9]"
            />
          </div>

          {/* Campo Número do Cartão */}
          <div className="w-full flex flex-col">
            <label htmlFor="numero" className="text-[20px]">
              Número do cartão
            </label>
            <input
              onChange={(event) => setNumero(event.target.value)} // Atualiza o estado `numero`.
              type="text"
              className="w-full h-[40px] rounded-md bg-[#D9D9D9]"
            />
          </div>

          {/* Campo Data de Expiração */}
          <div className="flex">
            <div className="w-[70%] flex flex-col">
              <label htmlFor="" className="text-[20px]">
                Data de expiração
              </label>
              <div className="w-full flex gap-2">
                <input
                  type="number"
                  onChange={(event) => setMes(event.target.value)} // Atualiza o estado `mes`.
                  placeholder="MM"
                  className="w-[50%] pl-2 h-[40px] rounded-md bg-[#D9D9D9]"
                />
                <input
                  type="number"
                  onChange={(event) => setAno(event.target.value)} // Atualiza o estado `ano`.
                  placeholder="AA"
                  className="w-[50%] pl-2 h-[40px] rounded-md bg-[#D9D9D9]"
                />
              </div>
            </div>

            {/* Campo CVV */}
            <div className="w-[30%] pl-2 flex flex-col">
              <label htmlFor="" className="text-[20px]">
                CVV
              </label>
              <input
                onChange={(event) => setCvv(event.target.value)} // Atualiza o estado `cvv`.
                type="number"
                className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2"
              />
            </div>
          </div>

          {/* Campo Senha do Cartão */}
          <div className="w-full flex flex-col">
            <label htmlFor="" className="text-[20px]">
              Senha do cartão
            </label>
            <input
              onChange={(event) => setSenha(event.target.value)} // Atualiza o estado `senha`.
              type="password"
              className="w-full h-[40px] rounded-md pl-2 bg-[#D9D9D9]"
            />
          </div>

          {/* Botão PAGAR */}
          <button
            onClick={pagar} // Chama a função `pagar` ao clicar.
            className="w-full h-[50px] rounded-md bg-[#271540] text-white font-bold"
          >
            PAGAR
          </button>
        </div>
      </div>
    </div>
  );
}
