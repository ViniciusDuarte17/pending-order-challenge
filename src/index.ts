import Notas from "./Notas/Notas";
import pedidos from "./Pedidos/Pedidos";
import PedidosPendentes from "./PedidosPendentes/PedidosPendentes";

const Main = async () => {

  const pedidosOrdenados = await pedidos.listaDePedidos();

  const notasValidas = await Notas.listaDeNotas(pedidosOrdenados);

  const pedidosPendentes = await PedidosPendentes.identificarPedidosPendentes(pedidosOrdenados,notasValidas)

  console.log('pedidosPendentes', pedidosPendentes);
};

Main();