import { ItemPendente } from "../@types/ItemPendente";
import { NotaType } from "../@types/nota";
import { Pedidotype } from "../@types/pedido";


class PedidosPendentes {

   async identificarPedidosPendentes (pedidos: Pedidotype[], notas: NotaType[]) {

    const pedidosPendentes:ItemPendente[]  = []

    pedidos.forEach((pedido) => {
        notas.forEach((nota) => {
          if (
            nota.número_item === pedido.número_item &&
            nota.quantidade_produto >= Number(pedido.quantidade_produto)
          ) {
            const itemPentende =
              nota.quantidade_produto - Number(pedido.quantidade_produto);
    
            if (itemPentende === 0) {
              return;
            }

            const valorUnitario = pedido.valor_unitário_produto.replace(",", ".");
            const valorTotalPedido = Number(valorUnitario) * pedido.número_item
    
            const pedidoPendentes = {
              id: nota.id_pedido,
              numeroItem: nota.número_item,
              valorTotalPedido: valorTotalPedido.toFixed(2).toString().replace('.', ','),
              ValorTotalDeItemPentende: (itemPentende * Number(valorUnitario)).toFixed(2).toString().replace('.', ','),
              produtoPendente: itemPentende
            };

            pedidosPendentes.push(pedidoPendentes)
          }
        });
      });

      return pedidosPendentes
    }
}

export default new PedidosPendentes()