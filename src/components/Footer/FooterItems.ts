import { IconType } from 'react-icons';
import { FaHome, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

type FooterItem = {
  label: string;
  href: string;
  icon: IconType;
};

export const FOOTER_ITEMS: Array<FooterItem> = [
  {
    label: 'Home',
    href: '/',
    icon: FaHome
  },
  // {
  //   label: 'Cărți',
  //   href: '/catalog/books',
  //   icon: FaBookOpen
  // },
  // {
  //   label: 'CD-uri',
  //   href: '/catalog/cds',
  //   icon: FaCompactDisc
  // },
  {
    label: 'Cart',
    href: '/cart',
    icon: FaShoppingCart
  },
  {
    label: 'My account',
    href: '/profile',
    icon: FaUserCircle
  }
];

export default FOOTER_ITEMS;
