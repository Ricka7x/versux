import React from 'react';
import { Box, Flex, Image, Text } from 'theme-ui';
import { Container } from '../Container';

export default function Features() {
  return (
    <section>
      <Box
        sx={{
          mt: [0, 0, 0, -400],
          pb: [0, 200],
          backgroundColor: ['white', 'white', 'white', 'light'],
        }}
      >
        <Container>
          <Flex
            sx={{
              justifyContent: 'center',
              mt: [5, 5, 7, 7],
              pt: [5, 5, 400, 400],
            }}
          >
            <Text variant="h2">Features</Text>
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
                Enjoy the game
              </Text>
              <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                assumenda consectetur voluptates, nobis non praesentium
                reiciendis exercitationem natus, labore aliquid numquam
                molestias maiores sit a ad! Incidunt vero cum obcaecati!
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
                mr: [0, 0, 3, 3],
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
                Predict the results
              </Text>
              <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                assumenda consectetur voluptates, nobis non praesentium
                reiciendis exercitationem natus, labore aliquid numquam
                molestias maiores sit a ad! Incidunt vero cum obcaecati!
              </Text>
            </Box>
          </Flex>

          <Flex
            sx={{ mt: 6, flexDirection: ['column', 'column', 'row', 'row'] }}
          >
            <Box
              sx={{
                width: ['100%', '100%', '50%', '50%'],
                textAlign: ['center', 'center', 'left', 'left'],
                mr: [0, 0, 3, 3],
              }}
            >
              <Text sx={{ display: 'block', mb: 4 }} variant="h3">
                Earn some money
              </Text>
              <Text sx={{ display: 'block', mb: [4, 4, 0, 0] }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                assumenda consectetur voluptates, nobis non praesentium
                reiciendis exercitationem natus, labore aliquid numquam
                molestias maiores sit a ad! Incidunt vero cum obcaecati!
              </Text>
            </Box>

            <Box
              sx={{
                width: ['100%', '100%', '50%', '50%'],
                textAlign: ['center', 'center', 'center', 'right'],
              }}
            >
              <Image
                src="/images/money.png"
                sx={{ width: 477, height: 477 }}
                alt="watch the game"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </section>
  );
}
