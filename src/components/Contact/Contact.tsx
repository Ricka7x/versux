import {Element} from 'react-scroll';
import {Box, Text} from 'theme-ui';
import faces from "../../../public/images/faces.png";
import {Container} from "../Container";

export default function Contact() {
  return (
    <section>
      <Element name="contact us">
        <Box
          sx={{
            mt: 6,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: ['center 250px'],
            pb: 6,
          }}
        >
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
                variant="h3"
              >
                Contact us
              </Text>

              <Text sx={{ display: 'block', mb: [2, 2] }}>
                Do you have any questions, suggestions, or just want to say hi?
                Please <a href="mailto:hello@versux.app"><strong>contact us.</strong></a>
              </Text>
            </Box>
          </Container>


        </Box>
      </Element>


    </section>
  )
}