import { Box, Flex, Image, Link } from 'theme-ui';
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
            <Box sx={{ mr: 3 }}>
              <a
                href={
                  'https://play.google.com/store/apps/details?id=app.versux.versux'
                }
              >
                <Image
                  src="/images/google_play_btn.svg"
                  sx={{ width: [150, 180], height: [46, 55] }}
                  alt="google play button"
                />
              </a>
            </Box>
            <Box>
              <a
                href={'https://apps.apple.com/us/app/versux/id6444013043'}
              >
              <Image
                src="/images/apple_store_btn.svg"
                sx={{ width: [150, 180], height: [46, 55] }}
                alt="apple store button"
              />
              </a>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </section>
  );
}
