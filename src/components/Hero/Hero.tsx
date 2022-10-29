// import Image from 'next/image';
import { Box, Flex, Image, Text } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { Navigation } from '../Navigation';
import Container from '../Container/Container';
import { NavigationPropsType } from '../Navigation/Navigation';
import heroBG from '../../../public/images/hero_bg.png';

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
    <Box
      sx={{
        // height: ['100vh', 800],

        height: ['100vh', 760],
        background: `linear-gradient(-45deg, #ee7752, #e73c7e, #866FFF, #20C2D7)`,
        backgroundSize: '400% 400%',
        animation: `${gradient} 15s ease infinite`,
      }}
    >
      <Box
        sx={{
          background: `url(${heroBG.src}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPositionY: 'bottom',
          backgroundRepeat: 'no-repeat',
          height: '200%',
        }}
      >
        <Navigation
          activeMenuOption={activeMenuOption}
          setActiveMenuOption={setActiveMenuOption}
        />
        <Container>
          <Box pt={2} color="white" sx={{ maxWidth: 800, margin: '0 auto' }}>
            <Text
              variant="title"
              sx={{
                display: 'block',
                textAlign: 'center',
                mt: [1, 5],
              }}
            >
              Tell us who wins, we&lsquo;ll tell you how to split the money
            </Text>
            <Box sx={{ maxWidth: 691, margin: '0 auto' }}>
              <Text sx={{ display: 'block', textAlign: 'center', mt: 3 }}>
                Versux is a soccer polling app, created to give football soccer
                fans all around the world an opportunity for their voice to be
                heard.
              </Text>
            </Box>

            <Flex
              sx={{
                mt: 4,
                justifyContent: 'center',
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
          </Box>
          <Flex
            sx={{
              justifyContent: 'center',
              mt: 4,
              mb: 10,
              display: ['none', 'flex'],
            }}
          >
            <Box>
              <Image
                src="/images/profile.png"
                height={438}
                width={215}
                alt="profile"
                sx={{
                  boxShadow: '1px 31px 21px -8px rgba(0,0,0,0.26)',
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                }}
              />
            </Box>
            <Box sx={{ mx: 3 }}>
              <Image
                src="/images/home.png"
                height={470}
                width={231}
                alt="home"
                sx={{
                  boxShadow: '1px 31px 21px -8px rgba(0,0,0,0.26)',
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                }}
              />
            </Box>
            <Box>
              <Image
                src="/images/prediction.png"
                height={438}
                width={215}
                alt="prediction"
                sx={{
                  boxShadow: '1px 31px 21px -8px rgba(0,0,0,0.26)',
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
