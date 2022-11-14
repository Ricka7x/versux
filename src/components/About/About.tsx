import { Element } from 'react-scroll';
import { Box, Flex, Text, Image } from 'theme-ui';
import { Container } from '../Container';

export default function About() {
  return (
    <section className="about-us">
      <Element name="3 easy steps to play">
        <Container>
          <Flex
            sx={{
              alignItems: 'flex-start',
              flexDirection: ['column', 'column', 'row', 'row'],
              mt: [2, 400, 700, 700],
            }}
          >
            <Flex
              sx={{
                mr: [0, 3, 4, 5],
                width: ['100%', '100%', '100%', '50%'],
                justifyContent: 'center',
                order: [2, 2, 1, 1],
              }}
            >
              <Image
                src="/images/about.png"
                width={609}
                height={453}
                alt="predict"
              />
            </Flex>
            <Box
              sx={{
                width: ['100%', '100%', '100%', '50%'],
                order: [1, 1, 2, 2],
              }}
            >
              <Text
                variant="h2"
                sx={{
                  display: 'block',
                  mb: 4,
                  mt: [4, 0],
                  textAlign: ['center', 'center', 'initial', 'initial'],
                }}
              >
                1. Join a group. Or twenty.
              </Text>
              <Text
                variant="body"
                sx={{
                  display: 'block',
                  textAlign: ['center', 'center', 'initial', 'initial'],
                  mb: [4, 4, 4, 4],
                }}
              >
                  Create as many grous as you  want and invite up to 300 friends per group.

              </Text>
                <Text
                    variant="body"
                    sx={{
                        display: 'block',
                        textAlign: ['center', 'center', 'initial', 'initial'],
                        mb: [4, 4, 4, 4],
                    }}
                >
                    If you are invited to a group, you can accept the invite and start participating right away.
                    Accept as many invitations as you want!

                </Text>
            </Box>
          </Flex>
        </Container>
      </Element>
    </section>
  );
}
