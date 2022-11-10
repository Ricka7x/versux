import { Element } from 'react-scroll';
import { Box, Flex, Image, Link, Text } from 'theme-ui';
import { Container } from '../Container';

export default function HowItWorks() {
  return (
    <section>
      <Element name="how it works">
        <Box sx={{ textAlign: 'center', mt: [6, 6, 6, 7], mb: 6 }}>
          <Text variant="h2" sx={{ display: 'block', mb: 4 }}>
            How it works
          </Text>
          <Text>3 simple steps to get started</Text>
        </Box>

        <Box
          sx={{
            mt: [3, 3, 3, 6],
            pb: [5, 200],
          }}
        >
          <Container>
            <Flex
              sx={{ mt: 6, flexDirection: ['column', 'column', 'row', 'row'] }}
            >
              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'left', 'left'],
                  mr: [0, 0, 0, 5],
                  order: [2, 2, 1, 1],
                }}
              >
                <Image
                  src="/images/join.png"
                  sx={{
                    width: [335, 335, 335, 638],
                    height: [251, 251, 251, 477],
                  }}
                  alt="watch the game"
                />
              </Box>

              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'left', 'left'],
                  order: [1, 1, 2, 2],
                }}
              >
                <Flex
                  sx={{
                    alignItems: 'center',
                    mb: 4,
                    flexDirection: ['column', 'column', 'row', 'row'],
                  }}
                >
                  <Flex
                    sx={{
                      background: 'primary',
                      color: 'white',
                      borderRadius: '50%',
                      height: 60,
                      width: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      mr: [0, 4],
                      mb: [4, 0],
                    }}
                  >
                    <Text variant="h3">1</Text>
                  </Flex>
                  <Text sx={{ display: 'block' }} variant="h3">
                    Join a pool. Or twenty.
                  </Text>
                </Flex>
                <Text sx={{ display: 'block', mb: [4, 4, 4, 4] }}>
                  Create as many pools as you want and invite as many friends as
                  you like.
                </Text>

                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                  If you are invited to a pool, you can accept the invite and
                  start participating right away. Accept as many invitations as
                  you want!
                </Text>
              </Box>
            </Flex>

            <Flex
              sx={{
                mt: [5, 5, 7, 7],
                flexDirection: ['column', 'column', 'row', 'row'],
              }}
            >
              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'left', 'left'],
                  mr: [0, 0, 3, 3],
                }}
              >
                <Flex
                  sx={{
                    alignItems: 'center',
                    mb: 4,
                    flexDirection: ['column', 'row'],
                  }}
                >
                  <Flex
                    sx={{
                      background: 'primary',
                      color: 'white',
                      borderRadius: '50%',
                      height: 60,
                      width: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      mr: [0, 4],
                      mb: [4, 0],
                    }}
                  >
                    <Text variant="h3">2</Text>
                  </Flex>
                  <Text sx={{ display: 'block' }} variant="h3">
                    Add your predictions
                  </Text>
                </Flex>

                <Text sx={{ display: 'block', mb: [4, 4, 4, 4] }}>
                  You can add or edit predictions up to 12 hours before the
                  match starts. After this time, the match is{' '}
                  <strong>closed</strong> and you can no longer edit your
                  predictions.
                </Text>
                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                  Your predictions are hidden to other participants until the
                  match closes (12 hours before it starts).
                </Text>
              </Box>

              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'right', 'right'],
                  ml: [0, 0, 0, 5],
                }}
              >
                <Image
                  src="/images/predictions.png"
                  sx={{
                    width: [335, 335, 335, 638],
                    height: [251, 251, 251, 477],
                  }}
                  alt="watch the game"
                />
              </Box>
            </Flex>

            <Flex
              sx={{
                mt: [5, 5, 7, 7],
                flexDirection: ['column', 'column', 'row', 'row'],
              }}
            >
              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'left', 'left'],
                  mr: [0, 0, 0, 5],
                  order: [2, 2, 1, 1],
                }}
              >
                <Image
                  src="/images/ranking.png"
                  sx={{
                    width: [335, 335, 335, 638],
                    height: [251, 251, 251, 477],
                  }}
                  alt="watch the game"
                />
              </Box>

              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'left', 'left'],
                  order: [1, 1, 2, 2],
                }}
              >
                <Flex
                  sx={{
                    alignItems: 'center',
                    mb: 4,
                    flexDirection: ['column', 'row'],
                  }}
                >
                  <Flex
                    sx={{
                      background: 'primary',
                      color: 'white',
                      borderRadius: '50%',
                      height: 60,
                      width: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      mr: [0, 4],
                      mb: [4, 0],
                    }}
                  >
                    <Text variant="h3">3</Text>
                  </Flex>
                  <Text sx={{ display: 'block' }} variant="h3">
                    Check your points and ranking
                  </Text>
                </Flex>

                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                  Points for each match are awarded after the match ends.
                </Text>
                <ul sx={{ color: 'white', textAlign: 'initial' }}>
                  <li>5 points for an exact score (except draws).</li>
                  <li>2 points for correct winner and draws.</li>
                  <li>0 points every other case.</li>
                </ul>
                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                  Ranks are calculated based on the total number of points you
                  have accumulated. In case of a tie, the pool that was modified
                  first is ranked higher.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Element>
    </section>
  );
}