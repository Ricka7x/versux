import { Box, Flex, Text } from 'theme-ui';
import { Container } from '../Container';
import { QuotesCarousel } from '../QuotesCarousel';

// need to be an odd number
const QUOTES_STEPS = [
  {
    key: 10,
    imageURL: '/images/money.png',
    name: 'Tyler Estrada',
    quote:
      'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat urna Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur.',
    caption: 'Person 1',
    rating: 1,
  },
  {
    key: 20,
    imageURL: '/images/money.png',
    quote:
      'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat urna Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur.',
    name: 'Tyler Estrada',
    caption: 'Person 2',
    rating: 2,
  },
  {
    key: 30,
    imageURL: '/images/money.png',
    quote:
      'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat urna Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur.',
    name: 'Tyler Estrada',
    caption: 'Person 3',
    rating: 3,
  },
  {
    key: 40,
    imageURL: '/images/money.png',
    quote:
      'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat urna Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur.',
    name: 'Tyler Estrada',
    caption: 'Person 4',
    rating: 4,
  },
  {
    key: 50,
    imageURL: '/images/money.png',
    quote:
      'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat urna Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur.',
    name: 'Tyler Estrada',
    caption: 'Person 5',
    rating: 5,
  },
];

export default function Quotes() {
  return (
    <section>
      <Box sx={{ mt: 6 }}>
        <Container>
          <Box
            sx={{
              justifyContent: 'center',
              maxWidth: 750,
              m: '0 auto',
              textAlign: 'center',
            }}
          >
            <Text
              sx={{ display: 'block', textAlign: 'center', mb: 4 }}
              variant="h2"
            >
              What our customers say
            </Text>

            <Text sx={{ display: 'block', mb: [3, 7] }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              dolores quod ratione repudiandae quaerat quo aperiam a, neque
              accusamus quasi.
            </Text>
          </Box>
        </Container>
        <QuotesCarousel steps={QUOTES_STEPS} />
      </Box>
    </section>
  );
}
