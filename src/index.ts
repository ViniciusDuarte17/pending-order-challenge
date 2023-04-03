import pedidos from "./Pedidos/pedidos"


const Main = async () => {

   console.log('Estamos na main')

   const pedidosOrdenados = await pedidos.listaDePedidos()

   console.log( pedidosOrdenados)

}

 Main()