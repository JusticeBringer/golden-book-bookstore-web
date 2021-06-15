import { BookType, CdType, AuthorsArrayType } from '../util/types';
import { IUser } from '../database/models/users/user.interface';
import { trimTitle } from '../util/helpers';

export function getBooks(): Array<BookType> {
  const booksTitle: string[] = [
    'Ce este Oastea Domnului',
    'Alcoolul - duhul diavolului',
    'Trăim vremuri biblice',
    'Fiul cel pierdut',
    'Zaheu',
    '600 istorioare religioase',
    'Corabia lui Noe',
    'Mai lângă Domnul meu',
    'Ascultarea',
    'Hristos - Mărturia mea',
    'Minune și taină',
    'Gânduri creștine',
    'Hrană pentru familia creștină',
    'Șapte tâlcuiri biblice despre Maica Domnului'
  ];

  const booksAuthors: string[] = [
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Pr. Iosif Trifa',
    'Traian Dorz',
    'Traian Dorz',
    'Ioan Marini',
    'Ioan Marini',
    'Pr. Vasile Mihoc'
  ];

  const booksImages: string[] = [
    '/books/ceEsteOasteaDomnului_Pr_Iosif_Trifa.PNG',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/Hristos_marturia_mea.jpg',
    '/books/minune_si_taina.png',
    '/books/ganduri_crestine.jpg',
    '/books/hrana_pentru_familia_crestina.jpg',
    '/books/sapte_talcuiri_biblice_despre_Maica_Domnului.jpg'
  ];

  // initializeaza articolele zilei
  const books: Array<BookType> = [];

  // parcurge articolele demo
  for (let i = 0; i < booksTitle.length; i++) {
    const book: BookType = {
      id: i,
      title: booksTitle[i],
      author: booksAuthors[i],
      publisher: 'Editura „Oastea Domnului”',
      price: 15,
      pages: 220,
      description:
        ' ... simţindu-se tot mai mult lipsa acestei cărţi de îndrumare pentru  cei din Oaste  şi pentru cei ce intră în Oaste, am tipărit-o din nou.',
      state: 'Nou',
      quantity: 45,
      soldQuantity: 200,
      image: booksImages[i],
      discount: 0,
      category: 'Literatura Oastei Domnului',
      publishingYear: 2004,
      rating: 4.6,
      reviews: ['gjfidjgdjhug', 'ifsdff']
    };

    book.title = trimTitle(book.title);
    books.push(book);
  }

  return books;
}

export function getCds(): Array<CdType> {
  const cdsTitle: string[] = ['Căutând mereu', 'Au înflorit măslinii'];

  const cdsArtists: string[][] = [['Corul Oastei Domnului'], ['Pr. Marian Mărcuș']];

  const cdsImage: string[] = ['/cds/cautand_mereu.jpg', '/cds/au-inflorit-maslinii_cd.jpg'];

  const cdsTracks: string[][] = [
    ['Căutând mereu', 'Preasfântă Născătoare'],
    [
      '01. Un Prieten bun',
      '02. A mea iubire',
      '03. Preasfântă Maică și Fecioară',
      "04. Cât de frumoase sunt a' Tale"
    ]
  ];

  const cdsSamples: string[][] = [
    ['/audio/cautand_mereu_sample.mp3', '/audio/Preasfanta_Nascatoare_sample.mp3'],
    []
  ];

  // initializeaza cd-urile
  const cds: Array<CdType> = [];

  // parcurge articolele demo
  for (let i = 0; i < cdsTitle.length; i++) {
    const cd: CdType = {
      id: i,
      title: cdsTitle[i],
      artists: cdsArtists[i],
      publisher: 'Studio „Cântări Nemuritoare”',
      price: 15,
      tracks: cdsTracks[i],
      description: 'Un album de ascultat pentru liniște, pace în suflet',
      state: 'Nou',
      quantity: 45,
      soldQuantity: 200,
      image: cdsImage[i],
      discount: 0,
      category: 'Să cântăm Domnului',
      publishingYear: 2004,
      rating: 4.0,
      reviews: ['gjfidjgdjhug', 'ifsdff'],
      samples: cdsSamples[i]
    };

    cd.title = trimTitle(cd.title);
    cds.push(cd);
  }

  return cds;
}

export const authors: AuthorsArrayType = [
  {
    name: 'Pr. Iosif Trifa',
    photo: '/authors/pr_Iosif_Trifa.jpg'
  },
  {
    name: 'Traian Dorz',
    photo: '/authors/Traian_Dorz.jpg'
  },
  {
    name: 'Ioan Marini',
    photo: '/authors/Ioan_Marini.jpg'
  },
  {
    name: 'Pr. Vasile Mihoc',
    photo: '/authors/pr_Vasile_Mihoc.jpg'
  }
];

export const getUsers: IUser[] = [
  { email: 'first@gmail.com', isVerifiedEmail: true, password: 'randomHash' },
  { email: 'second@gmail.com', isVerifiedEmail: false, password: 'randomHash2' }
];

export default { getBooks, getCds };
