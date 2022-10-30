import { Box, Flex, Text, Image } from 'theme-ui';
import { Container } from '../Container';

export default function About() {
  return (
    <section className="about-us">
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
              About us
            </Text>
            <Text
              variant="body"
              sx={{
                display: 'block',
                textAlign: ['center', 'center', 'initial', 'initial'],
                mb: [4, 4, 4, 4],
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quidem dolorem praesentium optio possimus, consectetur
              sint aspernatur, porro perspiciatis error quae voluptatibus!
              Laboriosam incidunt, ab neque voluptatem quasi quaerat corporis
              sunt officia praesentium suscipit nobis. Ab ipsum aut dolore
            </Text>
          </Box>
        </Flex>
      </Container>
    </section>
  );
}
