import React from 'react';
import Head from 'next/head';
import { Box, Button, Container, Divider, Typography, Link as JoyLink } from '@mui/joy';
import Link from 'next/link';
import NavigateNext from '../icons/NavigateNext';

import Logo from './Logo';

const Hero = () => (
  <>
    <Head>
      <title>Civil Intelligent system</title>
    </Head>

    <section>
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
          This is the future of web authentication: single-click sign on, faceid, fingerprint, strong security and is
          virtually unphishable
        </Typography>
        <Box gap={1.5} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
          <Link href={'/auth'} passHref legacyBehavior>
            <Button size={'lg'} component={'a'} sx={{ bgcolor: 'primary.500' }} endDecorator={<NavigateNext />}>
              Give it a try!
            </Button>
          </Link>
        </Box>
      </Container>

      <Divider />

      <Box bgcolor={'background.surface'} py={3}>
        <Container maxWidth={'lg'}>
          <Box display={'flex'} alignItems={'center'} gap={2} mb={1.5}>
            <Typography fontFamily={'display'} level={'h4'} lineHeight={'32px'} fontWeight={'800'}>
              CIS
            </Typography>
            <Divider orientation={'vertical'} />
            <Typography>
              A product of
              <JoyLink href={'https://google.com'}>{'Apex'}</JoyLink>{' '}
            </Typography>
          </Box>
          <Typography level={'body2'}>This website is licenced under the MIT license</Typography>
        </Container>
      </Box>
    </section>
  </>
);

export default Hero;
