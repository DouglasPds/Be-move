# <center>Página inicial da aplicação Be-move</center>

![Be-move-inicial](https://user-images.githubusercontent.com/49247431/109667599-1206cb00-7b4f-11eb-9e98-f0e22f9050b6.png)

## Pode ser acessado em [Be-move](https://be-move.vercel.app/)

## Tecnologias

O projeto foi criado utilizando as seguintes tecnologias:
- Next.js com o `create-next-app`
- ReactJS
- Typescript
- context API
- js-cookie

## Começando

Para rodar o projeto, após fazer o clone, instale as dependências usando 
```bash 
yarn
```
e então execute o comando 
```bash
yarn dev
``` 
para iniciar o servidor.

E acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Funcionalidades

Funciona como um pomodoro tendo uma contagem regressiva, onde você fica um tempo com foco na sua produtividade. Mas o seu diferencial está nos exercícios para subir de nível. 

Onde a cada finalização de um ciclo de foco, um exercício aparece para ser realizado contendo uma quantidade de xp, e podendo ser de dois tipos para o corpo e para os olhos.

### Após encerrado o ciclo.
![Ciclo encerrado](https://user-images.githubusercontent.com/49247431/109668999-737b6980-7b50-11eb-9669-9e942030c9b6.png)

Aparece os dois botões de falhei e completei, ao clicar em falhei ele reinicia o contador e você não ganha o xp.

Ao clicar em completei, você ganha o xp e é reiniciado o contador, e se você atingir a quantidade de xp necessária para passar para o próximo nível, a próxima tela é mostrada.

---

### Quando atingido o próximo nível.
![Subindo-de-nivel](https://user-images.githubusercontent.com/49247431/109669009-770ef080-7b50-11eb-82db-c368b5f30d95.png)

#### 🚀 Projeto iniciado durante a Next Level Week 4.




