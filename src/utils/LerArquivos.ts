import * as fs from "fs";
import * as path from "path";

export class LerArquivos {
  async lerAquivos(caminhoDoArquivo: string): Promise<object[]> {
    const arquivoJson = [];

    async function lerTodoArquivos(folderPath: string): Promise<string> {
      const nomeArquivos = await fs.promises.readdir(folderPath);
      let conteudoDeTodoArquivo: string = "";

      for (const arquivoNome of nomeArquivos) {
        const caminhoDoArquivo = path.join(folderPath, arquivoNome);
        const conteudoDoArquivo = await fs.promises.readFile(
          caminhoDoArquivo,
          "utf8"
        );
        conteudoDeTodoArquivo += conteudoDoArquivo;
      }

      return conteudoDeTodoArquivo;
    }

    try {
      const trasformaArquivoTextoParaJson = await lerTodoArquivos(
        caminhoDoArquivo
      );
      const arquivoEmJson: object[] = trasformaArquivoTextoParaJson
        .split("\n")
        .map((str) => str.trim())
        .filter((str) => str.length > 0)
        .map((str) => {
          try {
            return JSON.parse(str);
          } catch (e) {
            // Removendo obj nulos
            return null;
          }
        })
        .filter((obj) => obj !== null);

      arquivoJson.push(arquivoEmJson);
    } catch (error) {
      console.log(error);
    }

    return arquivoJson.flat();
  }
}
