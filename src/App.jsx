import BackCard from "./components/BackCard";
import CardFront from "./components/FrontCard";

export default function App(){
  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative h-full bg-[#271540]">
          <div className="absolute top-10 left-60">
            <CardFront />
          </div>
          <div className="absolute top-[450px] left-[420px]">
            <BackCard />
          </div>
      </div>
      <div className="w-[60%] h-full flex items-end p-[40px] flex-col">
          <h1 className="text-[45px] w-[60%] h-[150px] font-bold">Preencha os campos para concluir o pagamento</h1>
          <div className="w-[65%] h-auto min-h-[200px] flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <label htmlFor="nome" className="text-[20px]">Nome no cartão</label>
              <input type="text" className="w-full h-[40px] rounded-md bg-[#D9D9D9]" />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="numero" className="text-[20px]">Número do cartão</label>
              <input type="text" className="w-full h-[40px] rounded-md bg-[#D9D9D9]" />
            </div>
            <div className="flex">
              <div className="w-[70%] flex flex-col">
                <label htmlFor="" className="text-[20px]">Data de expiração</label>
                <div className="w-full flex gap-2">
                  <input
                    type="number"
                    placeholder="MM"
                    className="w-[50%] pl-2 h-[40px] rounded-md bg-[#D9D9D9]"/>
                  <input
                    type="number"
                    placeholder="AA"
                    className="w-[50%] pl-2 h-[40px] rounded-md bg-[#D9D9D9]"/>
                </div>
              </div>
              <div className="w-[30%] pl-2 flex flex-col">
                <label htmlFor="" className="text-[20px]">CVV</label>
                <input
                  type="number"
                  className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2" />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Senha do cartão</label>
              <input
                type="password"
                className="w-full h-[40px] rounded-md pl-2 bg-[#D9D9D9]" 
                />
            </div>
            <button 
          className="w-full h-[50px] rounded-md bg-[#271540]
           text-white font-bold">Pagar</button>
          </div>
      </div>
    </div>
  )
}