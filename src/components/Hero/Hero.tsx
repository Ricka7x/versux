// import Image from 'next/image';
import { Box, Flex, Image, Text } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { Navigation } from '../Navigation';
import Container from '../Container/Container';
import { NavigationPropsType } from '../Navigation/Navigation';
import Fade from 'react-reveal/Fade';

const gradient = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export default function Hero({
  activeMenuOption,
  setActiveMenuOption,
}: NavigationPropsType) {
  return (
    <Box>
      <Box>
        <Navigation
          activeMenuOption={activeMenuOption}
          setActiveMenuOption={setActiveMenuOption}
        />
        <Container>
          <Box pt={2} color="white" sx={{ maxWidth: 970, margin: '0 auto' }}>
            <Text
              variant="h1"
              sx={{
                display: 'block',
                textAlign: 'center',
                mt: [1, 5],
                background: `linear-gradient(-45deg, #ee7752, #e73c7e, #866FFF, #20C2D7)`,
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                color: 'transparent',

                animation: `${gradient} 10s ease infinite`,
              }}
            >
              Football predictions game <br />
              like never before.
            </Text>
            <Fade bottom>
              <Box sx={{ maxWidth: 691, margin: '0 auto' }}>
                <Text
                  variant="lead"
                  sx={{ display: 'block', textAlign: 'center', mt: 3, mb: 5 }}
                >
                  Challenge your friends and family to predict match scores. Track
                  points and positions in real time.
                </Text>
              </Box>
            </Fade>

            <Fade bottom>
              <Flex
                sx={{
                  mt: 4,
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ mr: 3, mb: [3, 3, 3, 3] }}>
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
                  <a href={'https://apps.apple.com/app/versux/id6444013043'}>
                    <Image
                      src="/images/apple_store_btn.svg"
                      sx={{ width: [150, 180], height: [46, 55] }}
                      alt="apple store button"
                    />
                  </a>
                </Box>
              </Flex>
            </Fade>
          </Box>

          <Fade bottom>
            <Flex
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                mt: 4,
                mb: 10,
                display: ['none', 'flex'],
              }}
            >
              <Box>
                <Image
                  src="/images/pools_dark.png"
                  height={562}
                  width={276}
                  alt="profile"
                  sx={{
                    width: [215, 215, 276, 276],
                    height: [438, 438, 562, 562],
                    boxShadow: '1px 31px 21px -8px rgba(0,0,0,0.26)',
                    borderBottomLeftRadius: [38, 38, 47, 53],
                    borderBottomRightRadius: [38, 38, 47, 53],
                  }}
                />
              </Box>
              <Box sx={{ mx: 3 }}>
                <Image
                  src="/images/positions_dark.png"
                  alt="home"
                  sx={{
                    width: [231, 231, 327, 327],
                    height: [470, 470, 664, 664],
                    boxShadow: '1px 31px 21px -8px rgba(0,0,0,0.26)',
                    borderBottomLeftRadius: [42, 42, 56, 61],
                    borderBottomRightRadius: [42, 42, 56, 61],
                  }}
                />
              </Box>
              <Box>
                <Image
                  src="/images/predictions_dark.png"
                  alt="prediction"
                  sx={{
                    width: [215, 215, 276, 276],
                    height: [438, 438, 562, 562],
                    boxShadow: '1px 31px 21px -8px rgba(0,0,0,0.26)',
                    borderBottomLeftRadius: [38, 38, 47, 53],
                    borderBottomRightRadius: [38, 38, 47, 53],
                  }}
                />
              </Box>
            </Flex>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}
