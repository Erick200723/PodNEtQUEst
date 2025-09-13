# Netcast

### Descrição
Um app estilo netflix que possa centralizar diferentes episódios por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os eps podcasts em sesões de categorias 
    - [Fitness, Saúde, humor, esportes ]
- Filtra episódios pelo nome de podcast

### Como
- Listar os eps podcasts em sesões de categorias 

### Como vou implementar:

GET: retorna lista de episódios

response:
    
```js
[
    {
        podcastName: "flow",
        episode: "SEREMOS EXTINTOS PELA INTELIGÊNCIA ARTIFICIAL?",
        videoId:"g-1ZLqvRvrg",
        cover:  "https://i.ytimg.com/vi/g-1ZLqvRvrg/maxresdefault.jpg",
        link: "https://youtu.be/g-1ZLqvRvrg?si=YpDR-1DTsBAFO8ru",
        category: ["ciência", "tecnolongia"]
    },
]
```


GET: retorna lista de episódios baseado em um parametro