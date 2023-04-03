import { Pedidotype } from "../@types/pedido";
import { LerArquivos } from "../utils/LerArquivos";

class Pedidos {
  async listaDePedidos(): Promise<Pedidotype[]> {
    const arquivoEmjson = new LerArquivos();

    const caminhoPedido = "Teste back/Teste/Pedidos";

    const pedidos = (await arquivoEmjson.lerAquivos(
      caminhoPedido
    )) as Pedidotype[];

    const newPedidos = pedidos.filter((pedido, index, self) => {
      if (typeof pedido.número_item !== "number") {
        throw new Error(
          "O valor do 'número_item' não corresponde ao tipo descrito"
        );
      }

      if (pedido.número_item === null) {
        throw new Error("A propriedade 'número_item não pode ser null");
      }

      return (
        index ===
        self.findIndex(
          (pedidoAtual) => pedidoAtual.número_item === pedido.número_item
        )
      );
    });

    const pedidosEmOrdemCrescente = newPedidos.sort(
      (a, b) => a.número_item - b.número_item
    );

    return pedidosEmOrdemCrescente;
  }
}

export default new Pedidos();
