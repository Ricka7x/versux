import { Element } from 'react-scroll';
import { Box } from 'theme-ui';
import faces from "../../../public/images/faces.png";

export default function Contact() {
    return (
        <section>
            <Element name="contact us">
                <Box
                    sx={{
                        mt: 6,
                        backgroundImage: ['none', 'none', 'none', `url(${faces.src})`],
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: ['center 250px'],
                        pb: 6,
                    }}
                >

                    <h1>Contact us</h1>

                </Box>
            </Element>


        </section>
    )
}