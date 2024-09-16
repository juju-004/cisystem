'use client';

import React from 'react';
import { Box, Button, Container, Divider, Typography, Link as JoyLink } from '@mui/joy';
import NavigateNext from '../icons/NavigateNext';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemeSelector: 'media'
});

import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <NavBar />
        <main
          id="app"
          className="d-flex bg-slate-800 flex-column w-full items-center justify-center h-screen"
          data-testid="layout">
          <Box
            sx={{
              display: 'flex',

              flex: 1,
              width: '100%'
            }}
            bgcolor={'background.surface'}
            className="text-center flex-1 w-full">
            <Container
              maxWidth={'sm'}
              sx={{
                textAlign: 'center',
                mt: '56px',
                py: 12,
                minHeight: 'calc(100vh - 240px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1
              }}>
              <Typography level={'h1'} mb={2}>
                Civil <span style={{ color: 'var(--joy-palette-primary-400)' }}>Intel</span>
                ligent System
              </Typography>
              <Typography mb={2}>
                This is the future of web authentication: single-click sign on, faceid, fingerprint, strong security and
                is virtually unphishable
              </Typography>
              <Box gap={1.5} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                <Link href="/api/auth/login">
                  <Button size={'lg'} component={'a'} sx={{ bgcolor: 'primary.500' }} endDecorator={<NavigateNext />}>
                    Give it a try!
                  </Button>
                </Link>
              </Box>
            </Container>
          </Box>
          <Divider sx={{ blockSize: '0.1px' }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%'
            }}
            bgcolor={'background.surface'}
            className="dark:bg-purple-700"
            py={3}>
            <Container maxWidth={'lg'}>
              <Box display={'flex'} alignItems={'center'} gap={2} mb={1.5}>
                <Typography fontFamily={'display'} level={'h4'} lineHeight={'32px'} fontWeight={'800'}>
                  C<span style={{ color: 'var(--joy-palette-primary-400)' }}>I</span>S
                </Typography>
                <Divider orientation={'vertical'} />
                <Typography>-2024. All rights reserved</Typography>
              </Box>
              <Typography sx={{ opacity: 0.7 }}>This website is licenced under the MIT license</Typography>
            </Container>
          </Box>
        </main>
      </CssVarsProvider>
    </>
  );
}
