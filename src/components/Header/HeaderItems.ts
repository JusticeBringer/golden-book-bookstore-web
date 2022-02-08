export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export const HEADER_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Legal',
    children: [
      {
        label: 'GDPR',
        subLabel: 'Prezentare1.1',
        href: '#'
      },
      {
        label: 'Termeni și condiții',
        subLabel: 'Prezentare2.1',
        href: '#'
      }
    ]
  },
  {
    label: 'Contact',
    href: '#'
  }
];

export default HEADER_NAV_ITEMS;
