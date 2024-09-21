const obras = [
    {
      titulo: "Oppenheimer",
      descricao: "A história de J. Robert Oppenheimer e seu papel crucial no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.",
      genero: "Biografia, Drama, História",
      anoLancamento: 2023,
      principaisAtores: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
      avaliacoes: {
        publico: 8.5,
        criticos: 8.7
      },
      plataforma: "Cinemas, Streaming (previsto para 2024)"
    },
    {
      titulo: "Barbie",
      descricao: "Barbie embarca em uma jornada no mundo real para descobrir o verdadeiro significado de ser perfeita.",
      genero: "Comédia, Fantasia",
      anoLancamento: 2023,
      principaisAtores: ["Margot Robbie", "Ryan Gosling", "Simu Liu"],
      avaliacoes: {
        publico: 7.8,
        criticos: 7.5
      },
      plataforma: "Cinemas, Streaming (previsto para 2024)"
    },
    {
      titulo: "The Bear",
      descricao: "Um jovem chef volta para Chicago para administrar a lanchonete da família após a morte do irmão, enfrentando desafios pessoais e profissionais.",
      genero: "Drama",
      anoLancamento: 2022,
      principaisAtores: ["Jeremy Allen White", "Ayo Edebiri", "Ebon Moss-Bachrach"],
      avaliacoes: {
        publico: 8.4,
        criticos: 8.6
      },
      plataforma: "Star+"
    },
    {
      titulo: "The Last of Us",
      descricao: "Baseada no famoso jogo, a série segue Joel e Ellie enquanto tentam sobreviver em um mundo pós-apocalíptico devastado por uma infecção fúngica.",
      genero: "Ação, Drama, Ficção científica",
      anoLancamento: 2023,
      principaisAtores: ["Pedro Pascal", "Bella Ramsey", "Anna Torv"],
      avaliacoes: {
        publico: 9.1,
        criticos: 8.9
      },
      plataforma: "HBO Max"
    },
    {
      titulo: "Duna: Parte Dois",
      descricao: "Continuação da saga de Paul Atreides, que luta para vingar sua família e salvar seu povo no planeta deserto Arrakis.",
      genero: "Ficção científica, Aventura, Drama",
      anoLancamento: 2024,
      principaisAtores: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
      avaliacoes: {
        publico: "A ser lançado",
        criticos: "A ser lançado"
      },
      plataforma: "Cinemas (previsto), Streaming (em 2025)"
    },
    {
      titulo: "One Piece",
      descricao: "Adaptação live-action do famoso anime, a série segue as aventuras de Monkey D. Luffy e sua tripulação na busca pelo tesouro One Piece.",
      genero: "Aventura, Fantasia",
      anoLancamento: 2023,
      principaisAtores: ["Iñaki Godoy", "Mackenyu", "Emily Rudd"],
      avaliacoes: {
        publico: 8.3,
        criticos: 8.0
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Avatar: O Caminho da Água",
      descricao: "Jake Sully vive com sua nova família em Pandora, mas enfrenta uma nova ameaça que pode destruir tudo o que ama.",
      genero: "Aventura, Ficção científica",
      anoLancamento: 2022,
      principaisAtores: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
      avaliacoes: {
        publico: 7.7,
        criticos: 7.5
      },
      plataforma: "Disney+, Star+"
    },
    {
      titulo: "Guardians of the Galaxy Vol. 3",
      descricao: "Os Guardiões enfrentam um desafio para proteger um dos seus enquanto lidam com a ameaça de um vilão antigo.",
      genero: "Ação, Aventura, Comédia",
      anoLancamento: 2023,
      principaisAtores: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
      avaliacoes: {
        publico: 8.0,
        criticos: 7.8
      },
      plataforma: "Disney+"
    },
    {
      titulo: "John Wick 4: Baba Yaga",
      descricao: "John Wick enfrenta novos inimigos enquanto luta para ganhar sua liberdade, enfrentando assassinos de todos os lados.",
      genero: "Ação, Suspense",
      anoLancamento: 2023,
      principaisAtores: ["Keanu Reeves", "Laurence Fishburne", "Donnie Yen"],
      avaliacoes: {
        publico: 8.4,
        criticos: 8.3
      },
      plataforma: "Cinemas, Streaming (em 2024)"
    },
    {
      titulo: "Stranger Things",
      descricao: "Um grupo de amigos descobre segredos sobrenaturais enquanto enfrenta criaturas de outra dimensão na pequena cidade de Hawkins.",
      genero: "Fantasia, Terror, Suspense",
      anoLancamento: 2016,
      principaisAtores: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
      avaliacoes: {
        publico: 8.7,
        criticos: 8.8
      },
      plataforma: "Netflix"
    },
    {
      titulo: "House of the Dragon",
      descricao: "Prequela de 'Game of Thrones', a série acompanha a história da Casa Targaryen e seus dragões, séculos antes dos eventos da série original.",
      genero: "Fantasia, Drama, Aventura",
      anoLancamento: 2022,
      principaisAtores: ["Paddy Considine", "Matt Smith", "Emma D'Arcy"],
      avaliacoes: {
        publico: 8.6,
        criticos: 8.3
      },
      plataforma: "HBO Max"
    },
    {
      titulo: "The Mandalorian",
      descricao: "Um caçador de recompensas solitário viaja pela galáxia, protegendo uma misteriosa criança com poderes especiais.",
      genero: "Aventura, Ficção científica",
      anoLancamento: 2019,
      principaisAtores: ["Pedro Pascal", "Gina Carano", "Giancarlo Esposito"],
      avaliacoes: {
        publico: 8.8,
        criticos: 8.5
      },
      plataforma: "Disney+"
    },
    {
      titulo: "Homem-Aranha: Através do Aranhaverso",
      descricao: "Miles Morales embarca em uma nova aventura através de diferentes universos enquanto luta ao lado de outras versões do Homem-Aranha.",
      genero: "Animação, Ação, Aventura",
      anoLancamento: 2023,
      principaisAtores: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
      avaliacoes: {
        publico: 9.0,
        criticos: 8.9
      },
      plataforma: "Cinemas, Streaming (em 2024)"
    },
    {
      titulo: "The Witcher",
      descricao: "Geralt de Rívia, um caçador de monstros, enfrenta desafios sobrenaturais enquanto tenta proteger a princesa Ciri.",
      genero: "Fantasia, Aventura",
      anoLancamento: 2019,
      principaisAtores: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
      avaliacoes: {
        publico: 8.2,
        criticos: 7.8
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Succession",
      descricao: "A série acompanha a disputa pelo controle de uma das maiores corporações de mídia, enquanto os membros da família Roy lutam pelo poder.",
      genero: "Drama",
      anoLancamento: 2018,
      principaisAtores: ["Brian Cox", "Jeremy Strong", "Sarah Snook"],
      avaliacoes: {
        publico: 8.9,
        criticos: 9.2
      },
      plataforma: "HBO Max"
    },
    {
      titulo: "Andor",
      descricao: "A série narra a história de Cassian Andor, um dos heróis da Aliança Rebelde, antes dos eventos de 'Rogue One: Uma História Star Wars'.",
      genero: "Aventura, Drama, Ficção científica",
      anoLancamento: 2022,
      principaisAtores: ["Diego Luna", "Stellan Skarsgård", "Genevieve O'Reilly"],
      avaliacoes: {
        publico: 8.4,
        criticos: 8.5
      },
      plataforma: "Disney+"
    },
    {
      titulo: "The Boys",
      descricao: "Um grupo de vigilantes decide lutar contra super-heróis corruptos que abusam de seus poderes para benefício próprio.",
      genero: "Ação, Comédia, Drama",
      anoLancamento: 2019,
      principaisAtores: ["Karl Urban", "Jack Quaid", "Antony Starr"],
      avaliacoes: {
        publico: 8.7,
        criticos: 8.6
      },
      plataforma: "Amazon Prime Video"
    },
    {
      titulo: "Ted Lasso",
      descricao: "Um treinador de futebol americano é contratado para treinar um time de futebol inglês, apesar de sua falta de experiência no esporte.",
      genero: "Comédia, Drama, Esportes",
      anoLancamento: 2020,
      principaisAtores: ["Jason Sudeikis", "Hannah Waddingham", "Brett Goldstein"],
      avaliacoes: {
        publico: 8.8,
        criticos: 8.6
      },
      plataforma: "Apple TV+"
    },
    {
      titulo: "Loki",
      descricao: "Após roubar o Tesseract, Loki é capturado pela TVA, uma organização que monitora a linha do tempo e deve enfrentar as consequências de suas ações.",
      genero: "Ficção científica, Ação, Aventura",
      anoLancamento: 2021,
      principaisAtores: ["Tom Hiddleston", "Owen Wilson", "Sophia Di Martino"],
      avaliacoes: {
        publico: 8.2,
        criticos: 8.1
      },
      plataforma: "Disney+"
    },
    {
      titulo: "Sandman",
      descricao: "Baseada na famosa graphic novel de Neil Gaiman, a série segue Morpheus, o governante do Sonhar, em sua busca para restaurar seu reino.",
      genero: "Fantasia, Drama, Terror",
      anoLancamento: 2022,
      principaisAtores: ["Tom Sturridge", "Boyd Holbrook", "Gwendoline Christie"],
      avaliacoes: {
        publico: 7.9,
        criticos: 8.0
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Invincible",
      descricao: "Mark Grayson, um adolescente, descobre que seu pai é o super-herói mais poderoso do planeta, e ele próprio começa a desenvolver superpoderes.",
      genero: "Animação, Ação, Aventura",
      anoLancamento: 2021,
      principaisAtores: ["Steven Yeun", "J.K. Simmons", "Sandra Oh"],
      avaliacoes: {
        publico: 8.7,
        criticos: 8.5
      },
      plataforma: "Amazon Prime Video"
    },
    {
      titulo: "Severance",
      descricao: "Funcionários de uma empresa têm suas memórias divididas entre trabalho e vida pessoal, criando uma intrigante trama sobre identidade e controle.",
      genero: "Drama, Ficção científica, Suspense",
      anoLancamento: 2022,
      principaisAtores: ["Adam Scott", "Patricia Arquette", "John Turturro"],
      avaliacoes: {
        publico: 8.5,
        criticos: 8.9
      },
      plataforma: "Apple TV+"
    },
    {
      titulo: "Arcane",
      descricao: "Baseada no universo do jogo 'League of Legends', a série explora as origens de personagens icônicos e o conflito entre as cidades de Piltover e Zaun.",
      genero: "Animação, Ação, Fantasia",
      anoLancamento: 2021,
      principaisAtores: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro"],
      avaliacoes: {
        publico: 9.2,
        criticos: 9.0
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Foundation",
      descricao: "Baseada na obra de Isaac Asimov, a série explora a queda de um império galáctico e os esforços de um grupo de cientistas para salvar a civilização.",
      genero: "Ficção científica, Drama",
      anoLancamento: 2021,
      principaisAtores: ["Jared Harris", "Lee Pace", "Lou Llobell"],
      avaliacoes: {
        publico: 7.4,
        criticos: 7.7
      },
      plataforma: "Apple TV+"
    },
    {
      titulo: "Yellowjackets",
      descricao: "Um grupo de adolescentes sobreviventes de um acidente aéreo tenta sobreviver em um ambiente inóspito, enquanto suas versões adultas lidam com os traumas do passado.",
      genero: "Drama, Mistério, Suspense",
      anoLancamento: 2021,
      principaisAtores: ["Melanie Lynskey", "Tawny Cypress", "Christina Ricci"],
      avaliacoes: {
        publico: 8.0,
        criticos: 8.1
      },
      plataforma: "Showtime, Paramount+"
    },
    {
      titulo: "Ahsoka",
      descricao: "A série acompanha Ahsoka Tano, a ex-Jedi, em sua busca por um antigo inimigo e o paradeiro de seu aprendiz desaparecido.",
      genero: "Aventura, Ficção científica, Ação",
      anoLancamento: 2023,
      principaisAtores: ["Rosario Dawson", "Natasha Liu Bordizzo", "Mary Elizabeth Winstead"],
      avaliacoes: {
        publico: 8.1,
        criticos: 7.9
      },
      plataforma: "Disney+"
    },
    {
      titulo: "Wednesday",
      descricao: "Wednesday Addams começa a estudar na Academia Nevermore, onde tenta controlar suas habilidades psíquicas e resolver um mistério sobrenatural.",
      genero: "Comédia, Fantasia, Mistério",
      anoLancamento: 2022,
      principaisAtores: ["Jenna Ortega", "Catherine Zeta-Jones", "Luis Guzmán"],
      avaliacoes: {
        publico: 8.1,
        criticos: 7.8
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Black Mirror",
      descricao: "Uma série de antologia que explora o lado sombrio da tecnologia e suas consequências inesperadas na sociedade moderna.",
      genero: "Ficção científica, Drama, Suspense",
      anoLancamento: 2011,
      principaisAtores: ["Bryce Dallas Howard", "Jon Hamm", "Miley Cyrus"],
      avaliacoes: {
        publico: 8.8,
        criticos: 8.6
      },
      plataforma: "Netflix"
    },
    {
      titulo: "The White Lotus",
      descricao: "Uma sátira social ambientada em um resort de luxo, onde as férias de ricos hóspedes se complicam de maneiras inesperadas.",
      genero: "Comédia, Drama",
      anoLancamento: 2021,
      principaisAtores: ["Jennifer Coolidge", "Murray Bartlett", "Alexandra Daddario"],
      avaliacoes: {
        publico: 7.6,
        criticos: 8.4
      },
      plataforma: "HBO Max"
    },
    {
      titulo: "Euphoria",
      descricao: "A série acompanha um grupo de adolescentes enquanto navegam pelo amor, identidade e o abuso de substâncias em um mundo repleto de redes sociais e pressão social.",
      genero: "Drama",
      anoLancamento: 2019,
      principaisAtores: ["Zendaya", "Hunter Schafer", "Jacob Elordi"],
      avaliacoes: {
        publico: 8.4,
        criticos: 8.3
      },
      plataforma: "HBO Max"
    },
    {
      titulo: "Only Murders in the Building",
      descricao: "Três moradores de um prédio em Nova York, obcecados por podcasts de crimes reais, se unem para resolver um assassinato local.",
      genero: "Comédia, Mistério",
      anoLancamento: 2021,
      principaisAtores: ["Steve Martin", "Martin Short", "Selena Gomez"],
      avaliacoes: {
        publico: 8.1,
        criticos: 8.3
      },
      plataforma: "Hulu, Star+"
    },
    {
      titulo: "Peaky Blinders",
      descricao: "Um drama de época que acompanha a ascensão da família Shelby e sua gangue na Birmingham pós-Primeira Guerra Mundial.",
      genero: "Crime, Drama",
      anoLancamento: 2013,
      principaisAtores: ["Cillian Murphy", "Helen McCrory", "Paul Anderson"],
      avaliacoes: {
        publico: 8.8,
        criticos: 8.6
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Squid Game",
      descricao: "Centenas de pessoas endividadas participam de um jogo mortal com o objetivo de ganhar uma enorme quantia em dinheiro, mas descobrem que o preço pode ser sua própria vida.",
      genero: "Drama, Suspense",
      anoLancamento: 2021,
      principaisAtores: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun"],
      avaliacoes: {
        publico: 8.0,
        criticos: 8.2
      },
      plataforma: "Netflix"
    },
    {
      titulo: "The Umbrella Academy",
      descricao: "Uma família disfuncional de super-heróis se reúne para investigar a morte de seu pai e enfrentar a ameaça iminente de um apocalipse.",
      genero: "Ação, Aventura, Fantasia",
      anoLancamento: 2019,
      principaisAtores: ["Elliot Page", "Tom Hopper", "David Castañeda"],
      avaliacoes: {
        publico: 7.9,
        criticos: 7.7
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Better Call Saul",
      descricao: "Prequela de 'Breaking Bad', a série segue a transformação do advogado Jimmy McGill no inescrupuloso Saul Goodman.",
      genero: "Crime, Drama",
      anoLancamento: 2015,
      principaisAtores: ["Bob Odenkirk", "Jonathan Banks", "Rhea Seehorn"],
      avaliacoes: {
        publico: 8.9,
        criticos: 8.8
      },
      plataforma: "Netflix"
    },
    {
      titulo: "The Crown",
      descricao: "Dramatização da vida da Rainha Elizabeth II, desde sua ascensão ao trono até os eventos que moldaram a monarquia britânica nas décadas seguintes.",
      genero: "Biografia, Drama, História",
      anoLancamento: 2016,
      principaisAtores: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
      avaliacoes: {
        publico: 8.6,
        criticos: 8.7
      },
      plataforma: "Netflix"
    },
    {
      titulo: "The Handmaid's Tale",
      descricao: "Em um futuro distópico, as mulheres são subjugadas e forçadas a procriar para uma elite governante, mas uma serva busca sua liberdade.",
      genero: "Drama, Ficção científica, Suspense",
      anoLancamento: 2017,
      principaisAtores: ["Elisabeth Moss", "Yvonne Strahovski", "Joseph Fiennes"],
      avaliacoes: {
        publico: 8.4,
        criticos: 8.2
      },
      plataforma: "Hulu"
    },
    {
      titulo: "1899",
      descricao: "Os passageiros de um navio a vapor que viaja da Europa para a América se deparam com um mistério sinistro ao encontrarem uma embarcação desaparecida.",
      genero: "Mistério, Drama, Terror",
      anoLancamento: 2022,
      principaisAtores: ["Emily Beecham", "Aneurin Barnard", "Andreas Pietschmann"],
      avaliacoes: {
        publico: 7.7,
        criticos: 7.5
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Vikings: Valhalla",
      descricao: "Ambientada 100 anos após os eventos de 'Vikings', a série explora a ascensão de figuras icônicas como Leif Erikson e a batalha entre cristãos e pagãos.",
      genero: "Ação, Aventura, Drama",
      anoLancamento: 2022,
      principaisAtores: ["Sam Corlett", "Frida Gustavsson", "Leo Suter"],
      avaliacoes: {
        publico: 7.2,
        criticos: 7.1
      },
      plataforma: "Netflix"
    },
    {
      titulo: "Shadow and Bone",
      descricao: "Em um mundo devastado por guerra, uma jovem descobre um poder que pode ser a chave para libertar seu país e enfrenta forças sombrias.",
      genero: "Fantasia, Ação, Drama",
      anoLancamento: 2021,
      principaisAtores: ["Jessie Mei Li", "Ben Barnes", "Archie Renaux"],
      avaliacoes: {
        publico: 7.7,
        criticos: 7.5
      },
      plataforma: "Netflix"
    },
    {
      titulo: "The Morning Show",
      descricao: "Um drama que explora o mundo dos programas matinais de TV, onde uma crise de assédio sexual ameaça derrubar uma rede inteira.",
      genero: "Drama",
      anoLancamento: 2019,
      principaisAtores: ["Jennifer Aniston", "Reese Witherspoon", "Steve Carell"],
      avaliacoes: {
        publico: 8.3,
        criticos: 8.0
      },
      plataforma: "Apple TV+"
    },
    {
      titulo: "Rings of Power",
      descricao: "Ambientada milhares de anos antes dos eventos de 'O Senhor dos Anéis', a série explora a criação dos anéis de poder e a ascensão de Sauron.",
      genero: "Fantasia, Aventura",
      anoLancamento: 2022,
      principaisAtores: ["Morfydd Clark", "Robert Aramayo", "Nazanin Boniadi"],
      avaliacoes: {
        publico: 6.9,
        criticos: 7.3
      },
      plataforma: "Amazon Prime Video"
    },
    {
        titulo: "House of the Dragon",
        descricao: "Prequela de 'Game of Thrones', a série explora a história da Casa Targaryen e os eventos que levaram à guerra civil conhecida como a Dança dos Dragões.",
        genero: "Fantasia, Drama, Aventura",
        anoLancamento: 2022,
        principaisAtores: ["Paddy Considine", "Emma D'Arcy", "Matt Smith"],
        avaliacoes: {
        publico: 8.5,
        criticos: 8.4
        },
        plataforma: "HBO Max"
    },
    {
        titulo: "Succession",
        descricao: "Uma sátira dramática sobre uma poderosa família da mídia que luta pelo controle de seu império multimilionário.",
        genero: "Drama",
        anoLancamento: 2018,
        principaisAtores: ["Brian Cox", "Jeremy Strong", "Sarah Snook"],
        avaliacoes: {
        publico: 8.8,
        criticos: 8.9
        },
        plataforma: "HBO Max"
    },
    {
        titulo: "Stranger Things",
        descricao: "Em uma pequena cidade dos anos 80, um grupo de crianças tenta desvendar o mistério do desaparecimento de seu amigo, levando a uma descoberta sobrenatural.",
        genero: "Ficção científica, Terror, Aventura",
        anoLancamento: 2016,
        principaisAtores: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
        avaliacoes: {
        publico: 8.7,
        criticos: 8.6
        },
        plataforma: "Netflix"
    },
    {
        titulo: "The Mandalorian",
        descricao: "Um caçador de recompensas mandaloriano navega pelos confins da galáxia, longe da autoridade da Nova República, após a queda do Império.",
        genero: "Aventura, Ficção científica, Ação",
        anoLancamento: 2019,
        principaisAtores: ["Pedro Pascal", "Carl Weathers", "Gina Carano"],
        avaliacoes: {
        publico: 8.7,
        criticos: 8.5
        },
        plataforma: "Disney+"
    },
    {
        titulo: "The Boys",
        descricao: "Um grupo de vigilantes combate super-heróis corruptos que abusam de seus poderes, em um mundo onde os 'supers' são celebridades.",
        genero: "Ação, Ficção científica, Comédia",
        anoLancamento: 2019,
        principaisAtores: ["Karl Urban", "Jack Quaid", "Antony Starr"],
        avaliacoes: {
        publico: 8.7,
        criticos: 8.5
        },
        plataforma: "Amazon Prime Video"
    },
    {
        titulo: "Dune",
        descricao: "Baseado no clássico de ficção científica de Frank Herbert, o filme segue Paul Atreides em sua jornada para proteger seu povo no deserto perigoso de Arrakis.",
        genero: "Ficção científica, Aventura, Drama",
        anoLancamento: 2021,
        principaisAtores: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
        avaliacoes: {
        publico: 8.1,
        criticos: 8.0
        },
        plataforma: "HBO Max"
    },
    {
        titulo: "The Witcher",
        descricao: "Geralt de Rívia, um caçador de monstros, luta para encontrar seu lugar em um mundo onde as pessoas muitas vezes são mais perversas do que as bestas.",
        genero: "Fantasia, Ação, Aventura",
        anoLancamento: 2019,
        principaisAtores: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        avaliacoes: {
        publico: 8.2,
        criticos: 7.9
        },
        plataforma: "Netflix"
    },
    {
        titulo: "Money Heist (La Casa de Papel)",
        descricao: "Um grupo de ladrões, liderado pelo Professor, executa assaltos meticulosamente planejados enquanto enfrenta desafios emocionais e estratégicos.",
        genero: "Crime, Drama, Suspense",
        anoLancamento: 2017,
        principaisAtores: ["Álvaro Morte", "Úrsula Corberó", "Pedro Alonso"],
        avaliacoes: {
        publico: 8.2,
        criticos: 8.1
        },
        plataforma: "Netflix"
    },
    {
        titulo: "Narcos",
        descricao: "A série dramatiza a ascensão e queda de cartéis de drogas na Colômbia, focando na vida de Pablo Escobar e na guerra das autoridades contra o narcotráfico.",
        genero: "Crime, Drama, Biografia",
        anoLancamento: 2015,
        principaisAtores: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"],
        avaliacoes: {
        publico: 8.8,
        criticos: 8.7
        },
        plataforma: "Netflix"
    },
    {
        titulo: "The Expanse",
        descricao: "Num futuro onde a humanidade colonizou o Sistema Solar, uma conspiração ameaça a paz entre a Terra, Marte e os asteroides.",
        genero: "Ficção científica, Drama, Suspense",
        anoLancamento: 2015,
        principaisAtores: ["Steven Strait", "Dominique Tipper", "Wes Chatham"],
        avaliacoes: {
        publico: 8.5,
        criticos: 8.4
        },
        plataforma: "Amazon Prime Video"
    },
    {
        titulo: "Station Eleven",
        descricao: "Uma adaptação do romance homônimo, a série segue sobreviventes de uma pandemia que destruiu grande parte da civilização, explorando temas de arte, comunidade e perda.",
        genero: "Ficção científica, Drama, Mistério",
        anoLancamento: 2021,
        principaisAtores: ["Mackenzie Davis", "Himesh Patel", "Matilda Lawler"],
        avaliacoes: {
        publico: 7.6,
        criticos: 8.2
        },
        plataforma: "HBO Max"
    },
    {
        titulo: "The Falcon and the Winter Soldier",
        descricao: "Após os eventos de 'Vingadores: Ultimato', Sam Wilson e Bucky Barnes embarcam em uma jornada global para enfrentar um grupo terrorista e encontrar seu lugar no mundo.",
        genero: "Ação, Aventura, Drama",
        anoLancamento: 2021,
        principaisAtores: ["Anthony Mackie", "Sebastian Stan", "Wyatt Russell"],
        avaliacoes: {
        publico: 7.3,
        criticos: 7.4
        },
        plataforma: "Disney+"
    },
    {
        titulo: "Westworld",
        descricao: "Em um parque temático futurista habitado por androides, os visitantes vivem fantasias selvagens até que a linha entre homem e máquina começa a desaparecer.",
        genero: "Ficção científica, Drama, Suspense",
        anoLancamento: 2016,
        principaisAtores: ["Evan Rachel Wood", "Thandie Newton", "Jeffrey Wright"],
        avaliacoes: {
        publico: 8.6,
        criticos: 8.5
        },
        plataforma: "HBO Max"
    },
    {
        titulo: "The Wheel of Time",
        descricao: "Baseada nos livros de Robert Jordan, a série segue a jornada de cinco jovens destinados a lutar contra uma poderosa força do mal.",
        genero: "Fantasia, Aventura, Drama",
        anoLancamento: 2021,
        principaisAtores: ["Rosamund Pike", "Daniel Henney", "Zoë Robins"],
        avaliacoes: {
        publico: 7.4,
        criticos: 7.2
        },
        plataforma: "Amazon Prime Video"
    },
    {
        titulo: "Pachinko",
        descricao: "A saga de uma família coreana que emigra para o Japão e enfrenta décadas de luta e adaptação cultural ao longo do século XX.",
        genero: "Drama, História",
        anoLancamento: 2022,
        principaisAtores: ["Youn Yuh-jung", "Lee Min-ho", "Jin Ha"],
        avaliacoes: {
        publico: 8.4,
        criticos: 8.8
        },
        plataforma: "Apple TV+"
    },
    {
        titulo: "Loki",
        descricao: "A série acompanha as aventuras do deus da trapaça, Loki, após ele roubar o Tesseract e começar a causar distúrbios nas linhas temporais.",
        genero: "Ação, Aventura, Ficção científica",
        anoLancamento: 2021,
        principaisAtores: ["Tom Hiddleston", "Owen Wilson", "Sophia Di Martino"],
        avaliacoes: {
        publico: 8.2,
        criticos: 8.0
        },
        plataforma: "Disney+"
    },
    {
        titulo: "Midnight Mass",
        descricao: "Quando um misterioso sacerdote chega a uma ilha isolada, eventos sobrenaturais começam a ocorrer, testando a fé e os limites dos habitantes.",
        genero: "Terror, Drama, Suspense",
        anoLancamento: 2021,
        principaisAtores: ["Zach Gilford", "Hamish Linklater", "Kate Siegel"],
        avaliacoes: {
        publico: 7.7,
        criticos: 8.2
        },
        plataforma: "Netflix"
    },
    {
        titulo: "Mare of Easttown",
        descricao: "Uma detetive de uma pequena cidade na Pensilvânia investiga um assassinato enquanto lida com sua vida pessoal em colapso.",
        genero: "Drama, Crime, Mistério",
        anoLancamento: 2021,
        principaisAtores: ["Kate Winslet", "Julianne Nicholson", "Evan Peters"],
        avaliacoes: {
        publico: 8.5,
        criticos: 8.9
        },
        plataforma: "HBO Max"
    },
    {
        titulo: "Ted Lasso",
        descricao: "Um treinador de futebol americano vai para a Inglaterra treinar um time de futebol (soccer), mesmo sem experiência, conquistando corações com seu otimismo.",
        genero: "Comédia, Drama, Esporte",
        anoLancamento: 2020,
        principaisAtores: ["Jason Sudeikis", "Hannah Waddingham", "Brett Goldstein"],
        avaliacoes: {
        publico: 8.8,
        criticos: 8.9
        },
        plataforma: "Apple TV+"
    },
    {
        titulo: "The Underground Railroad",
        descricao: "Uma adaptação do livro vencedor do Pulitzer, a série segue Cora, uma escrava em fuga, enquanto ela descobre uma rede secreta para escapar da escravidão no sul dos EUA.",
        genero: "Drama, História",
        anoLancamento: 2021,
        principaisAtores: ["Thuso Mbedu", "Chase W. Dillon", "Joel Edgerton"],
        avaliacoes: {
        publico: 7.4,
        criticos: 8.7
        },
        plataforma: "Amazon Prime Video"
    },
    {
        titulo: "Snowpiercer",
        descricao: "Em um mundo congelado, os últimos remanescentes da humanidade vivem em um trem em movimento contínuo, onde a desigualdade social gera revoltas.",
        genero: "Ficção científica, Drama, Suspense",
        anoLancamento: 2020,
        principaisAtores: ["Jennifer Connelly", "Daveed Diggs", "Mickey Sumner"],
        avaliacoes: {
        publico: 6.9,
        criticos: 7.3
        },
        plataforma: "Netflix"
    },
    {
        titulo: "The Serpent",
        descricao: "Baseada na história real de Charles Sobhraj, um criminoso que manipulava e assassinava mochileiros na 'Trilha Hippie' dos anos 70.",
        genero: "Crime, Drama, Suspense",
        anoLancamento: 2021,
        principaisAtores: ["Tahar Rahim", "Jenna Coleman", "Billy Howle"],
        avaliacoes: {
        publico: 7.6,
        criticos: 7.9
        },
        plataforma: "Netflix"
    },
    {
        titulo: "The Great",
        descricao: "Uma sátira sobre o reinado de Catarina, a Grande, explorando sua ascensão ao poder na Rússia e seus esforços para reformar o império.",
        genero: "Comédia, Drama, História",
        anoLancamento: 2020,
        principaisAtores: ["Elle Fanning", "Nicholas Hoult", "Phoebe Fox"],
        avaliacoes: {
        publico: 8.2,
        criticos: 8.4
        },
        plataforma: "Hulu"
    },
    {
        titulo: "Dr. Death",
        descricao: "Baseado em fatos reais, a série conta a história de um cirurgião que causou sérios danos a seus pacientes devido à incompetência e possível malícia.",
        genero: "Crime, Drama, Suspense",
        anoLancamento: 2021,
        principaisAtores: ["Joshua Jackson", "Alec Baldwin", "Christian Slater"],
        avaliacoes: {
        publico: 7.7,
        criticos: 7.8
        },
        plataforma: "Peacock"
    },
    {
        titulo: "Sweet Tooth",
        descricao: "Após um evento apocalíptico, crianças híbridas nascem parte humanas, parte animais. Um garoto híbrido chamado Gus embarca numa jornada para descobrir seu passado.",
        genero: "Fantasia, Drama, Aventura",
        anoLancamento: 2021,
        principaisAtores: ["Christian Convery", "Nonso Anozie", "Adeel Akhtar"],
        avaliacoes: {
        publico: 7.8,
        criticos: 7.7
        },
        plataforma: "Netflix"
    },
    {
        titulo: "Lupin",
        descricao: "Assane Diop, inspirado pelo famoso ladrão Arsène Lupin, usa suas habilidades para vingar seu pai de uma injustiça cometida por uma família rica.",
        genero: "Crime, Ação, Drama",
        anoLancamento: 2021,
        principaisAtores: ["Omar Sy", "Ludivine Sagnier", "Clotilde Hesme"],
        avaliacoes: {
        publico: 7.5,
        criticos: 7.7
        },
        plataforma: "Netflix"
    }
];

    
       
  