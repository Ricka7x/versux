import { Flex, Image as ThemeImage } from 'theme-ui';
import Headroom from 'react-headroom';
import Container from '../Container/Container';
import { MenuItem } from '../MenuItem';
import { useRouter } from 'next/router';
import Image from 'next/image';

const navMenu = ['home', 'features', 'about', 'quotes'];

export type NavigationPropsType = {
  activeMenuOption: string;
  setActiveMenuOption: (value: string) => void;
};

export default function Navigation({
  activeMenuOption,
  setActiveMenuOption,
}: NavigationPropsType) {
  const router = useRouter();
  return (
    <header
      sx={{
        width: '100%',
      }}
    >
      <Headroom>
        <nav>
          <Container>
            <Flex
              sx={{
                display: 'flex',
                flexDirection: ['column', 'column', 'row', 'row'],
                justifyContent: ['center', 'center', 'space-between'],
                alignItems: 'center',
                py: 4,
              }}
            >
              <div sx={{ flex: 1 }}>
                <Image
                  width={149}
                  height={51}
                  src="/images/logo_white.svg"
                  alt="logo"
                />
              </div>

              <ul
                sx={{
                  listStyle: 'none',
                  justifyContent: 'center',
                  pl: 0,
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  width: ['100%', 'auto', 'auto'],
                }}
              >
                {navMenu.map((item) => (
                  <li key={item} sx={{ color: 'white' }}>
                    <MenuItem
                      title={item}
                      isActive={activeMenuOption === item}
                      onClick={() => setActiveMenuOption(item)}
                    />
                  </li>
                ))}
              </ul>
            </Flex>
          </Container>
        </nav>
      </Headroom>
    </header>
  );
}
