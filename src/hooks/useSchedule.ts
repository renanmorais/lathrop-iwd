const schedule = [
  {
    start: "07:40",
    end: "08:30",
    speeches: [
      {
        room: "Arena",
        topic: "Credenciamento + Café da manhã",
      },
    ],
  },
  {
    start: "08:30",
    end: "08:55",
    speeches: [
      {
        room: "Arena",
        topic: "Abertura + Hora da foto",
      },
    ],
  },
  // {
  //   start: "08:45",
  //   end: "08:50",
  //   speeches: [
  //     {
  //       room: "Arena",
  //       topic: "HUG Goiás - Karol Fernandes",
  //     },
  //   ],
  // },
  {
    start: "08:55",
    end: "09:50",
    speeches: [
      {
        room: "Arena",
        topic: "GenAI Serverless: Gemini no Cloud Run",
        speaker_id: 4,
      },
    ],
  },
  {
    speeches: [
      {
        room: "Auditorio",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Mika Fran e Flora Cavalcante",
            speaker_id: 12,
            start: "10:00",
            end: "10:30",
          },
          {
            topic: "Karolline Fernandes",
            speaker_id: 22,
            start: "10:30",
            end: "11:00",
          },
        ],
      },
      {
        room: "Miniauditorio",
        topic: "Aline Ayres",
        speakers: [
          {
            speaker_id: 5,
            start: "10:00",
            end: "11:00",
          },
        ],
      },
      {
        room: "Coworking 1",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Fernanda Bufon",
            speaker_id: 19,
            start: "10:00",
            end: "10:30",
          },
          {
            topic: "Vanessa Mota",
            speaker_id: 8,
            start: "10:30",
            end: "11:00",
          },
        ],
      },
      {
        room: "Workshop",
        topic: "Thielle Cathia",
        speakers: [
          {
            speaker_id: 24,
            start: "10:00",
            end: "11:00",
          },
        ],
      },
      {
        room: "Mentoria",
        topic: "Claudia Malta Santos (Desenvolvimento)",
        speakers: [
          {
            topic: "Desenvolvimento",
            speaker_id: 38,
            start: "10:00",
            end: "11:00",
          },
        ],
      },
    ],
  },
  {
    speeches: [
      {
        room: "Auditorio",
        topic: "Sulamita Dantas",
        speakers: [
          {
            speaker_id: 3,
            start: "11:00",
            end: "12:00",
          },
        ],
      },
      {
        room: "Miniauditorio",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Ana Ribeiro",
            speaker_id: 28,
            start: "11:00",
            end: "11:30",
          },
          {
            topic: "Brena Paiva",
            speaker_id: 7,
            start: "11:30",
            end: "12:00",
          },
        ],
      },
      {
        room: "Coworking 1",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Francielly de Moraes",
            speaker_id: 30,
            start: "11:00",
            end: "11:30",
          },
          {
            topic: "Vanessa Sousa",
            speaker_id: 26,
            start: "11:30",
            end: "12:00",
          },
        ],
      },
      {
        room: "Workshop",
        topic: "Anna e só",
        speakers: [
          {
            speaker_id: 14,
            start: "11:00",
            end: "12:00",
          },
        ],
      },
      {
        room: "Mentoria",
        topic:
          "Sanmya Thatila Borges de Noronha e Angela Grochenisk de Lima Leal (UX/AGILIDADE)",
        speakers: [
          {
            topic: "UX/AGILIDADE",
            speaker_id: 32,
            start: "11:00",
            end: "12:00",
          },
        ],
      },
    ],
  },
  {
    start: "12:00",
    end: "13:00",
    speeches: [
      {
        room: "",
        topic: "Almoço",
      },
    ],
  },
  {
    speeches: [
      {
        room: "Auditorio",
        topic: "Maria Luize",
        speakers: [
          {
            speaker_id: 6,
            start: "13:05",
            end: "14:05",
          },
        ],
      },
      {
        room: "Miniauditorio",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Bruna Michelly",
            speaker_id: 9,
            start: "13:05",
            end: "13:35",
          },
          {
            topic: "Catarine Sales",
            speaker_id: 15,
            start: "13:35",
            end: "14:05",
          },
        ],
      },
      {
        room: "Coworking 1",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic:
              "Larissa Vieira Rabelo e Claudia Malta Santos",
            speaker_id: 35,
            start: "13:05",
            end: "13:35",
          },
          {
            topic: "Geovana Correia",
            speaker_id: 18,
            start: "13:35",
            end: "14:05",
          },
        ],
      },
      {
        room: "Mentoria",
        topic: "Paola Rodrigues Santos e Barbara Silva Cabral (CIBER/INFRA)",
        speakers: [
          {
            topic: "CYBER/INFRA",
            speaker_id: 33,
            start: "13:05",
            end: "14:05",
          },
        ],
      },
    ],
  },
  {
    speeches: [
      {
        room: "Auditorio",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Mariana Lemes",
            speaker_id: 23,
            start: "14:05",
            end: "14:35",
          },
          {
            topic: "Vanessa Marques",
            speaker_id: 27,
            start: "14:35",
            end: "15:05",
          },
        ],
      },
      {
        room: "Miniauditorio",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Christianne Pimenta",
            speaker_id: 17,
            start: "14:05",
            end: "14:35",
          },
          {
            topic: "Nina Soraya",
            speaker_id: 25,
            start: "14:35",
            end: "15:05",
          },
        ],
      },
      {
        room: "Coworking 1",
        topic: "Dupla",
        speaker_id: 0,
        speakers: [
          {
            topic: "Suellen Bastos",
            speaker_id: 31,
            start: "14:05",
            end: "14:35",
          },
          {
            topic: "Anny Ribeiro",
            speaker_id: 16,
            start: "14:35",
            end: "15:05",
          },
        ],
      },
      {
        room: "Workshop",
        topic: "Larissa Rosa",
        speakers: [
          {
            speaker_id: 21,
            start: "14:05",
            end: "15:05",
          },
        ],
      },
      {
        room: "Mentoria",
        topic: "Jaqueline Damacena Duarte e Camila Maestrelli Leobons (IA)",
        speakers: [
          {
            topic: "IA",
            speaker_id: 34,
            start: "14:05",
            end: "15:05",
          },
        ],
      },
    ],
  },
  {
    start: "15:05",
    end: "15:50",
    speeches: [
      {
        room: "",
        topic: "Coffee Break",
      },
    ],
  },
  {
    speeches: [
      {
        room: "Auditorio",
        topic: "Atekkita Dev",
        speakers: [
          {
            speaker_id: 1,
            start: "15:55",
            end: "16:55",
          },
        ],
      },
      // {
      //   room: "Miniauditorio",
      //   topic: "Globo",
      //   speakers: [
      //     {
      //       speaker_id: 0,
      //       start: "15:55",
      //       end: "16:55",
      //     },
      //   ],
      // },
      {
        room: "Coworking 1",
        topic:
          "Jaqueline e Welma - Mulheres que Fazem: Construindo o Futuro Econômico de Goiás (MulheresGo)",
        speakers: [
          {
            topic:
              "[Jaqueline e Welma] Mulheres que Fazem: Construindo o Futuro Econômico de Goiás (MulheresGo)",
            speaker_id: 0,
            start: "15:55",
            end: "16:25",
          },
        ],
      },
    ],
  },
  {
    start: "16:55",
    end: "17:50",
    speeches: [
      {
        room: "Arena",
        topic:
          "Empreendendo  um futuro melhor: Desafios e lições da minha jornada",
        speaker_id: 2,
      },
    ],
  },
  {
    start: "17:50",
    end: "18:10",
    speeches: [
      {
        room: "Arena",
        topic:
          "Sorteios + Hora da foto: 'Inimigxs do fim' + Palestrantes e organização + Encerramento",
        speaker_id: 0,
      },
    ],
  },
];

export default schedule;
