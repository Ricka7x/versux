import { Element } from 'react-scroll';
import { Box, Flex, Image, Text } from 'theme-ui';
import { Container } from '../Container';

export default function Features() {
  return (
    <section>
      <Element name="features">
        <Box
          sx={{
            mt: [0, 0, 0, -480],
            pb: [0, 200],
            backgroundColor: ['white', 'white', 'white', 'light'],
          }}
        >
          <Container>
            <Flex
              sx={{
                justifyContent: 'center',
                mt: [5, 5, 7, 7],
                pt: [5, 5, 150, 150],
              }}
            >
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
                <Text sx={{ display: 'block', mb: 4 }} variant="h3">
                    2. Add your predictions
                </Text>
                <Text sx={{ display: 'block', mb: [4, 4, 4, 4] }}>
                    You can add or edit predictions up to 12 hours before the match starts.
                    After this time, the match is <strong>closed</strong> and you can no longer edit your predictions.
                </Text>
                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                    Your predictions are hidden to other participants until the match closes (12 hours before it starts).
                </Text>
              </Box>

              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'center', 'right'],
                }}
              >
                <Image
                  src="/images/watch.png"
                  sx={{ width: 477, height: 477 }}
                  alt="watch the game"
                />
              </Box>
            </Flex>

            <Flex
              sx={{ mt: 6, flexDirection: ['column', 'column', 'row', 'row'] }}
            >
              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'left', 'left'],
                  mr: [0, 0, 5, 5],
                  order: [2, 2, 1, 1],
                }}
              >
                <Image
                  src="/images/predict.png"
                  sx={{ width: 477, height: 477 }}
                  alt="watch the game"
                />
              </Box>

              <Box
                sx={{
                  width: ['100%', '100%', '50%', '50%'],
                  textAlign: ['center', 'center', 'center', 'left'],
                  order: [1, 1, 2, 2],
                }}
              >
                <Text sx={{ display: 'block', mb: 4 }} variant="h3">
                  3. Check your points and ranking
                </Text>
                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                    Points for each match are awarded after the match ends.
                </Text>
                  <ul>
                    <li>5 points for an exact score (except draws).</li>
                      <li>2 points for correct winner and draws.</li>
                      <li>0 points every other case.</li>
                  </ul>
                  <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                      Ranks are calculated based on the total number of points you have accumulated.
                      In case of a tie, the pool that was modified first is ranked higher.
                  </Text>
              </Box>
            </Flex>

          </Container>
        </Box>
      </Element>
    </section>
  );
}
