import * as fs from "fs";
import Notas from "./Notas/Notas";
import pedidos from "./Pedidos/Pedidos";
import PedidosPendentes from "./PedidosPendentes/PedidosPendentes";

const Main = async () => {

  const pedidosOrdenados = await pedidos.listaDePedidos();

  const notasValidas = await Notas.listaDeNotas(pedidosOrdenados);

  const pedidosPendentes = await PedidosPendentes.identificarPedidosPendentes(pedidosOrdenados,notasValidas)

  // Geração de listagem de pedidos pendentes

  const listaDePedidosPendentes = JSON.stringify(pedidosPendentes)

  const filePath = 'Teste back/pedidos pendentes.txt';

  fs.writeFileSync(filePath, listaDePedidosPendentes, { flag: 'w' });

  console.log('Geração de pedidos pendentes ocorreu tudo certo!')
};

Main();