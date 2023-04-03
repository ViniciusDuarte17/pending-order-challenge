import { ItemPendente } from "../@types/ItemPendente";
import { NotaType } from "../@types/nota";
import { Pedidotype } from "../@types/pedido";


class PedidosPendentes {

   async identificarPedidosPendentes (pedidos: Pedidotype[], notas: NotaType[]) {

    const pedidosPendentes:ItemPendente[]  = []

    pedidos.forEach((pedido) => {
        notas.forEach((notas) => {
          if (
            notas.número_item === pedido.número_item &&
            notas.quantidade_produto >= Number(pedido.quantidade_produto)
          ) {
            const itemPentende =
              notas.quantidade_produto - Number(pedido.quantidade_produto);
    
            if (itemPentende === 0) {
              return;
            }
    
            const pedidoPendentes = {
              id: notas.id_pedido,
              item_pendente: itemPentende,
            };
            pedidosPendentes.push(pedidoPendentes)
          }
        });
      });

      return pedidosPendentes
    }
}


export default new PedidosPendentes()