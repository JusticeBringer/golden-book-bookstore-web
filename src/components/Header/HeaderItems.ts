export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export const HEADER_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Acasă',
    children: [
      {
        label: 'Acasă1',
        subLabel: 'Acasă1.1',
        href: '#'
      },
      {
        label: 'Acasă2',
        subLabel: 'Acasă2.1',
        href: '#'
      }
    ]
  },
  {
    label: 'Blog',
    children: [
      {
        label: 'Prezentare1',
        subLabel: 'Prezentare1.1',
        href: '#'
      },
      {
        label: 'Prezentare2',
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
