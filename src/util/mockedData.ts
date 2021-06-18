import { CdType, AuthorsArrayType } from '../util/types';
import { IUser } from '../database/models/user/user.interface';
import { trimTitle } from '../util/helpers';
import { IBook } from '../database/models/book/book.interface';

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

const PR_IOSIF_TRIFA = 'Pr. Iosif Trifa';
const TRAIAN_DORZ = 'Traian Dorz';
const IOAN_MARINI = 'Ioan Marini';
const PR_VASILE_MIHOC = 'Pr. Vasile Mihoc';
const STARE_NOUA = 'New';

const EDITURA_OASTEA_DOMNULUI = 'Editura Oastea Domnului';
const LITERATURA_OASTEI_DOMNULUI = 'Literatura Oastei Domnului';

export const getBooksNew: IBook[] = [
  {
    title: 'Ce este Oastea Domnului',
    author: PR_IOSIF_TRIFA,
    publisher: EDITURA_OASTEA_DOMNULUI,
    price: 15,
    pages: 223,
    description:
      ' ... simţindu-se tot mai mult lipsa acestei cărţi de îndrumare pentru  cei din Oaste  şi pentru cei ce intră în Oaste, am tipărit-o din nou.',
    state: STARE_NOUA,
    quantity: 15,
    soldQuantity: 45,
    image: '/books/ceEsteOasteaDomnului_Pr_Iosif_Trifa.jpg',
    discount: 0,
    category: LITERATURA_OASTEI_DOMNULUI,
    publishingYear: 1998,
    rating: 4.5,
    reviews: ['41224d776a326fb40f000001', '41224d776a326fb40f000002']
  },
  {
    title: 'Hristos - Mărturia mea',
    author: TRAIAN_DORZ,
    publisher: EDITURA_OASTEA_DOMNULUI,
    price: 35,
    pages: 333,
    description:
      ' ... simţindu-se tot mai mult lipsa acestei cărţi de îndrumare pentru  cei din Oaste  şi pentru cei ce intră în Oaste, am tipărit-o din nou.',
    state: STARE_NOUA,
    quantity: 15,
    soldQuantity: 45,
    image: '/books/Hristos_marturia_mea.jpg',
    discount: 0,
    category: LITERATURA_OASTEI_DOMNULUI,
    publishingYear: 1998,
    rating: 4.5,
    reviews: ['41224d776a326fb40f000003', '41224d776a326fb40f000004']
  },
  {
    title: 'Gânduri creștine',
    author: IOAN_MARINI,
    publisher: EDITURA_OASTEA_DOMNULUI,
    price: 10,
    pages: 54,
    description:
      ' ... simţindu-se tot mai mult lipsa acestei cărţi de îndrumare pentru  cei din Oaste  şi pentru cei ce intră în Oaste, am tipărit-o din nou.',
    state: STARE_NOUA,
    quantity: 15,
    soldQuantity: 45,
    image: '/books/ganduri_crestine.jpg',
    discount: 20,
    category: LITERATURA_OASTEI_DOMNULUI,
    publishingYear: 1999,
    rating: 4.5,
    reviews: ['41224d776a326fb40f000005', '41224d776a326fb40f000006']
  },
  {
    title: 'Șapte tâlcuiri biblice despre Maica Domnului',
    author: PR_VASILE_MIHOC,
    publisher: EDITURA_OASTEA_DOMNULUI,
    price: 15,
    pages: 76,
    description:
      ' ... simţindu-se tot mai mult lipsa acestei cărţi de îndrumare pentru  cei din Oaste  şi pentru cei ce intră în Oaste, am tipărit-o din nou.',
    state: STARE_NOUA,
    quantity: 15,
    soldQuantity: 45,
    image: '/books/sapte_talcuiri_biblice_despre_Maica_Domnului.jpg',
    discount: 10,
    category: LITERATURA_OASTEI_DOMNULUI,
    publishingYear: 2013,
    rating: 4.5,
    reviews: ['41224d776a326fb40f000005', '41224d776a326fb40f000006']
  }
];
