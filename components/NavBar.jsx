'use  client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, Sheet, IconButton, useColorScheme, Tooltip, Container } from '@mui/joy';
import DarkMode from '../icons/DarkMode';
import LightMode from '../icons/LightMode';
import Roc from '../icons/RocketLaunch';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { mode, setMode } = useColorScheme();

  return (
    <Sheet
      variant={'outlined'}
      sx={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        p: 1.5,
        zIndex: 100,
        borderWidth: '0 0 1px 0',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        '--Card-radius': 0
      }}>
      <Container
        maxWidth={'lg'}
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
        {/* <Link href={'/'} style={{ display: 'flex' }}>
          <Image src={icon} alt={'Home'} width={32} />
        </Link>
        <BrandingText brand={'Civil Intelligent System'} />

        <Box flexGrow={1} /> */}
        {/* <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
        <DropdownToggle nav caret id="profileDropDown">
          <img
            src={user.picture}
            alt="Profile"
            className="nav-user-profile rounded-circle"
            width="50"
            height="50"
            decode="async"
            data-testid="navbar-picture-desktop"
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header data-testid="navbar-user-desktop">
            {user.name}
          </DropdownItem>
          <DropdownItem className="dropdown-profile" tag="span">
            <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
              Profile
            </PageLink>
          </DropdownItem>
          <DropdownItem id="qsLogoutBtn">
            <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
              Log out
            </AnchorLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown> */}
        <span className="items-center gap-2">
          <Roc /> <span className="font-bold">CIS</span>
        </span>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title={`Turn ${mode === 'light' ? 'off' : 'on'} the lights`} variant={'soft'} arrow>
          <IconButton
            size={'sm'}
            variant={'outlined'}
            onClick={() => mounted && setMode(mode === 'light' ? 'dark' : 'light')}>
            {!mounted ? <LightMode /> : mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Tooltip>
      </Container>
    </Sheet>
  );
};

export default NavBar;
