import { Box, Flex, Image } from 'theme-ui';
import { Container } from '../Container';
import BG from '../../../public/images/bg.svg';

export default function Download() {
  return (
    <section>
      <Flex
        sx={{
          minHeight: 300,
          width: '100%',
          background: `url(${BG.src})`,
        }}
      >
        <Container>
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Box sx={{ mr: 3, mb: [3, 0, 0, 0] }}>
              <Image
                src="/images/google_play_btn.svg"
                sx={{ width: [150, 180], height: [46, 55] }}
                alt="google play button"
              />
            </Box>
            <Box>
              <Image
                src="/images/apple_store_btn.svg"
                sx={{ width: [150, 180], height: [46, 55] }}
                alt="apple store button"
              />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </section>
  );
}
