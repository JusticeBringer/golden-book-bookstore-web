import { BookType, CdType } from '../util/types';
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
    'Ascultarea'
  ];

  const articlesImage: string[] = [
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg',
    '/books/600_istorioare_Pr_Iosif_Trifa.jpg'
  ];

  // initializeaza articolele zilei
  const books: Array<BookType> = [];

  // parcurge articolele demo
  for (let i = 0; i < booksTitle.length; i++) {
    const book: BookType = {
      id: i,
      title: booksTitle[i],
      author: 'Pr. Iosif Trifa',
      publisher: 'Editura „Oastea Domnului”',
      price: 15,
      description: 'Carte de căpătâi a Oastei Domnului',
      state: 'Nou',
      quantity: 45,
      soldQuantity: 200,
      image: articlesImage[i],
      discount: 0,
      category: 'Literatura Oastei Domnului',
      publishingYear: 2004
    };

    book.title = trimTitle(book.title);
    books.push(book);
  }

  return books;
}

export function getCds(): Array<CdType> {
  const cdsTitle: string[] = [
    'Ce este Oastea Domnului',
    'Alcoolul - duhul diavolului',
    'Trăim vremuri biblice',
    'Fiul cel pierdut',
    'Zaheu',
    '600 istorioare religioase',
    'Corabia lui Noe',
    'Mai lângă Domnul meu',
    'Ascultarea'
  ];

  const cdsImage: string[] = [
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg',
    '/cds/au-inflorit-maslinii_cd.jpg'
  ];

  // initializeaza cd-urile
  const cds: Array<CdType> = [];

  // parcurge articolele demo
  for (let i = 0; i < cdsTitle.length; i++) {
    const cd: CdType = {
      id: i,
      title: cdsTitle[i],
      artists: ['Pr. Marian Mărcuș'],
      publisher: 'Studio „Cântări Nemuritoare”',
      price: 15,
      description: 'Carte de căpătâi a Oastei Domnului',
      state: 'Nou',
      quantity: 45,
      soldQuantity: 200,
      image: cdsImage[i],
      discount: 0,
      category: 'Să cântăm Domnului',
      publishingYear: 2004
    };

    cd.title = trimTitle(cd.title);
    cds.push(cd);
  }

  return cds;
}

export default { getBooks, getCds };
