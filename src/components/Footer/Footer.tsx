import Image from 'next/image';
import {Box, Flex, Link, Text} from 'theme-ui';
import { Container } from '../Container';

export default function Footer() {
  return (
    <footer>
      <Box sx={{ backgroundColor: 'black', height: 250 }}>
        <Container>
          <Flex sx={{ justifyContent: 'center' }}>
            <Box>
              <Flex
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 5,
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Image
                    width={149}
                    height={51}
                    src="/images/logo_white.svg"
                    alt="logo"
                  />
                </Box>
                <Text
                  sx={{ color: 'white', mb: 4, fontSize: 12 }}
                  variant="caption"
                >
                  Copyright &#169; 2022 Versux All rights reserved.
                </Text>

                <Box>
                  <nav>
                    <ul
                      sx={{
                        display: 'flex',
                        listStyle: 'none',
                        color: 'white',
                        ml: 0,
                        pl: 0,
                      }}
                    >
                      <li sx={{ mr: 4 }}>
                          <Link href="/">Home</Link>
                      </li>
                      <li sx={{ mr: 4 }}>
                          <Link href="/privacy">Privacy</Link>
                      </li>
                    </ul>
                  </nav>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </footer>
  );
}
