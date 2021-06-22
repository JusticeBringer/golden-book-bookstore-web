import { IconType } from 'react-icons';
import { FaHome, FaBookOpen, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

type FooterItem = {
  label: string;
  href: string;
  icon: IconType;
};

export const FOOTER_ITEMS: Array<FooterItem> = [
  {
    label: 'Acasă',
    href: '/',
    icon: FaHome
  },
  {
    label: 'Cărți',
    href: '/catalog/books',
    icon: FaBookOpen
  },
  // {
  //   label: 'CD-uri',
  //   href: '/catalog/cds',
  //   icon: FaCompactDisc
  // },
  {
    label: 'Coș',
    href: '/cart',
    icon: FaShoppingCart
  },
  {
    label: 'Contul meu',
    href: '/profile',
    icon: FaUserCircle
  }
];

export default FOOTER_ITEMS;
