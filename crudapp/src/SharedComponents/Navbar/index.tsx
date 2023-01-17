import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width:800,
    height: 100,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    background:"#396CC5",
    
  
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        links: []
        }
    ],
  },
];

export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

