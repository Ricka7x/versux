import { Element } from 'react-scroll';
import { Box, Card, Flex, Text } from 'theme-ui';
import { Container } from '../Container';

export default function Steps() {
  return (
    <section>
      <Element name="steps">
        <Container>
          <Box sx={{ pb: 6 }}>
            <Box sx={{ textAlign: 'center', mt: 7, mb: 6 }}>
              <Text variant="h2" sx={{ display: 'block' }}>
                How it works
              </Text>
              <Text>3 simple steps to get started</Text>
            </Box>

            <Flex sx={{ flexDirection: ['column', 'column', 'row', 'row'] }}>
              <Card
                sx={{
                  width: ['100%', '100%', '100%', '33.3333%'],
                  mr: 4,
                  position: 'relative',
                  mb: 5,
                  alignSelf: 'stretch',
                }}
              >
                <Box
                  sx={{
                    background: 'primary',
                    color: 'white',
                    borderRadius: '50%',
                    height: 60,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 'calc(50% - 30px)',
                    top: '-30px',
                  }}
                >
                  <Text variant="h3">1</Text>
                </Box>
                <Text sx={{ display: 'block', my: 4 }} variant="h3">
                  Join a group. Or twenty
                </Text>
                <Text sx={{ display: 'block', mb: [4, 4, 4, 4] }}>
                  Create as many groups as you want and invite as many friends as
                  you like. <br /> If you are invited to a group, you can accept
                  the invite and start participating right away. Accept as many
                  invitations as you want!
                </Text>
              </Card>
              <Card
                sx={{
                  width: ['100%', '100%', '100%', '33.3333%'],
                  mr: 4,
                  position: 'relative',
                  mb: 5,
                }}
              >
                <Box
                  sx={{
                    background: 'primary',
                    color: 'white',
                    borderRadius: '50%',
                    height: 60,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 'calc(50% - 30px)',
                    top: '-30px',
                  }}
                >
                  <Text variant="h3">2</Text>
                </Box>
                <Text sx={{ display: 'block', my: 4 }} variant="h3">
                  Add your predictions
                </Text>
                <Text sx={{ display: 'block', mb: [4, 4, 4, 4] }}>
                  You can add or edit predictions up to 12 hours before the
                  match starts. After this time, the match is{' '}
                  <strong>closed</strong> and you can no longer edit your
                  predictions. <br /> Your predictions are hidden to other
                  participants until the match closes (12 hours before it
                  starts).
                </Text>
              </Card>
              <Card
                sx={{
                  width: ['100%', '100%', '100%', '33.3333%'],
                  position: 'relative',
                  mb: 5,
                }}
              >
                <Box
                  sx={{
                    background: 'primary',
                    color: 'white',
                    borderRadius: '50%',
                    height: 60,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 'calc(50% - 30px)',
                    top: '-30px',
                  }}
                >
                  <Text variant="h3">3</Text>
                </Box>
                <Text sx={{ display: 'block', my: 4 }} variant="h3">
                  Check your points and ranking
                </Text>
                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                  Points for each match are awarded after the match ends.
                </Text>

                <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                  Ranks are calculated based on the total number of points you
                  have accumulated. In case of a tie, predictions that were modified
                  first are ranked higher.
                </Text>
              </Card>
            </Flex>
          </Box>
        </Container>
      </Element>
    </section>
  );
}
