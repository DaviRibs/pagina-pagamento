import { useState } from "react"; // Importa o hook useState do React para gerenciar estados.
import BackCard from "./components/BackCard"; // Componente para a parte traseira do cartão.
import CardFront from "./components/FrontCard"; // Componente para a parte frontal do cartão.
import { ToastContainer, toast } from 'react-toastify';
import instance from "./api/instance";

export default function App() {
  // Estados para armazenar informações do cartão e do pagamento.
  const [nome, setNome] = useState(""); // Estado para o nome do titular do cartão.
  const [numero, setNumero] = useState(""); // Estado para o número do cartão.
  const [mes, setMes] = useState(0); // Estado para o mês de expiração do cartão.
  const [ano, setAno] = useState(0); // Estado para o ano de expiração do cartão.
  const [cvv, setCvv] = useState(0); // Estado para o código de segurança (CVV).
  const [senha, setSenha] = useState(""); // Estado para a senha do cartão.
   
  function formatNumero(event) {
    let numero = event.target.value; // Corrigindo o acesso ao evento
    let numeroFormatado = numero.replace(/\D/g, ''); // Remove tudo que não for número
    numeroFormatado = numeroFormatado.substring(0, 16); // Limita a 16 dígitos
    numeroFormatado = numeroFormatado.replace(/(\d{4})/g, '$1 ').trim(); // Adiciona espaço a cada 4 dígitos
    setNumero(numeroFormatado); // Atualiza estado
}

  
  // Função chamada ao clicar no botão PAGAR.
  async function pagar() {
    if(!nome || !numero || !mes || !ano || !cvv || !senha){
    return toast.error("Preencha todos os campos")
    }

    if(numero.replace(/\s/g, '').length !==16){
      return toast.error("Número do cartão inválido")

    }
    if(cvv.length !==3){
      return toast.error("CVV inválido")
    }
    if(ano.length !==2){
      return toast.error("Ano de expiração inválida")
    }
    if(mes > 12 || mes < 1){
      return toast.error("Data de expiração inválida")
    }
    if(senha.length < 4){
      return toast.error("Senha inválida")

    }

    try {
      const reponse = await instance.post("/creditcards", {
      name: nome,
      number: numero.replace(/\s/g, ''),
      expiration: `${mes}/${ano}`,
      cvv: cvv,
      password: senha
      })
      
      return toast.success("Pagamento realizado com sucesso")

    } catch (error) {
      return toast.error("Erro ao processar o pagamento")
      
    }
  }

  return (
    <div className="w-full h-screen flex">
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      theme="colored"
      
      />
      {/* Seção da esquerda para exibir a parte visual do cartão */}
      <div className="w-[40%] relative h-full bg-[#271540]">
        <div className="absolute top-10 left-50">
          <CardFront nome={nome} numero={numero}/> {/* Componente que renderiza a frente do cartão */}
        </div>
        <div className="absolute top-95 left-80">
          <BackCard cvv={cvv}/> {/* Componente que renderiza o verso do cartão */}
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
              onChange={(event) => formatNumero(event)} // Atualiza o estado `numero`. 
              value={numero}
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
