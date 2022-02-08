export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  onToggle?: () => void;
  isOpen?: boolean;
};

export const HEADER_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  }
];

export default HEADER_NAV_ITEMS;
