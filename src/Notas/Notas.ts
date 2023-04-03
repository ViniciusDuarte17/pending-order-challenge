import { NotaType } from "../@types/nota";
import { Pedidotype } from "../@types/pedido";
import { LerArquivos } from "../utils/LerArquivos";

class Notas {
  async listaDeNotas(pedidos: Pedidotype[]): Promise<NotaType[]> {
    const arquivoemJson = new LerArquivos();

    const caminhoNotas = "Teste back/Teste/Notas";

    const notas = (await arquivoemJson.lerAquivos(caminhoNotas)) as NotaType[];

    const notasValida = [] as NotaType[];

    notas.forEach((nota) => {
      const pedido = pedidos.find(
        (pedido) => pedido.número_item === nota.número_item
      );

      if (!pedido) {
        throw new Error(
          `O número do item ${nota.número_item} não existe nos pedidos.`
        );
      }
      if (
        typeof nota.id_pedido !== "number" ||
        typeof nota.número_item !== "number" ||
        typeof nota.quantidade_produto !== "number"
      ) {
        throw new Error(
          `O valor de alguma propriedade não corresponde ao tipo descrito.`
        );
      }

      notasValida.push(nota);
    });

    return notasValida;
  }
}

export default new Notas();
