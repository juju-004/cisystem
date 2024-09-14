'use  client';

import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

import { Box, Chip, Typography, Sheet, IconButton, useColorScheme, Tooltip, Button } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DarkMode from '../icons/DarkMode';
import LightMode from '../icons/LightMode';
import GitHubIcon from '../icons/RocketLaunch';

const BrandingText = ({ brand, isBeta }) => {
  const { brand, isBeta = true } = props;
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Typography
      level={'h6'}
      position={'relative'}
      height={28}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}>
      {brand}
      {isBeta && (
        <Chip
          size={'sm'}
          color={'warning'}
          variant={'soft'}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            '--Chip-minHeight': 16,
            '--Chip-paddingInline': '.4rem',
            textTransform: 'uppercase',
            // Spaces at the end of the line doesn't play well with multiline backquoted strings,
            // so we'll just concatenate several together here
            transform:
              `translateX(${mouseOver ? 'calc(100% + .25rem)' : '55%'}) ` +
              `translateY(${mouseOver ? '5px' : '-8%'}) ` +
              `rotate(${mouseOver ? 0 : 30}deg)`,
            transition: 'transform .2s ease-in-out'
          }}>
          {/* Use textTransform to make this uppercase for better accessibility */}
          Cis
        </Chip>
      )}
    </Typography>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand>
          <Link href={'/'} style={{ display: 'flex' }}>
            <Image src={icon} alt={'Home'} width={32} />
          </Link>
          <BrandingText brand={'Civil Intelligent System'} />
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-none d-md-block" navbar>
            {!isLoading && !user && (
              <NavItem id="qsLoginBtn">
                <AnchorLink href="/api/auth/login" className="" tabIndex={0} testId="navbar-login-desktop">
                  <Button
                    size={'sm'}
                    variant={'outlined'}
                    component={'a'}
                    startDecorator={<GitHubIcon />}
                    target={'_blank'}
                    rel={'noreferrer noopener'}>
                    Login
                  </Button>
                </AnchorLink>
              </NavItem>
            )}
            {user && (
              <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
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
              </UncontrolledDropdown>
            )}
          </Nav>
          {!isLoading && !user && (
            <Nav className="d-md-none" navbar>
              <AnchorLink href="/api/auth/login" tabIndex={0} testId="navbar-login-mobile">
                <Button
                  size={'sm'}
                  variant={'outlined'}
                  component={'a'}
                  startDecorator={<GitHubIcon />}
                  target={'_blank'}
                  rel={'noreferrer noopener'}>
                  Login
                </Button>
              </AnchorLink>
              <Tooltip title={`Turn ${mode === 'light' ? 'off' : 'on'} the lights`} variant={'soft'} arrow>
                <IconButton
                  size={'sm'}
                  variant={'outlined'}
                  onClick={() => mounted && setMode(mode === 'light' ? 'dark' : 'light')}>
                  {!mounted ? <LightMode /> : mode === 'light' ? <DarkMode /> : <LightMode />}
                </IconButton>
              </Tooltip>
            </Nav>
          )}
          {user && (
            <Nav id="nav-mobile" className="d-md-none justify-content-between" navbar data-testid="navbar-menu-mobile">
              <NavItem>
                <span className="user-info">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile d-inline-block rounded-circle mr-3"
                    width="50"
                    height="50"
                    decode="async"
                    data-testid="navbar-picture-mobile"
                  />
                  <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                    {user.name}
                  </h6>
                </span>
              </NavItem>
              <NavItem>
                <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
                  Profile
                </PageLink>
              </NavItem>
              <NavItem id="qsLogoutBtn">
                <AnchorLink
                  href="/api/auth/logout"
                  className="btn btn-link p-0"
                  icon="power-off"
                  testId="navbar-logout-mobile">
                  <Button
                    size={'sm'}
                    variant={'outlined'}
                    component={'a'}
                    startDecorator={<GitHubIcon />}
                    target={'_blank'}
                    rel={'noreferrer noopener'}>
                    Log out
                  </Button>
                </AnchorLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
