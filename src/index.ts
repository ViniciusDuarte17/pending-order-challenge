import Notas from "./Notas/Notas";
import pedidos from "./Pedidos/Pedidos";

const Main = async () => {

  const pedidosOrdenados = await pedidos.listaDePedidos();

  const notasValidas = await Notas.listaDeNotas(pedidosOrdenados);

  console.log("pedidosOrdenados", pedidosOrdenados);
  console.log('notasValidas', notasValidas);
};

Main();