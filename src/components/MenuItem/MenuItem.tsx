import { Flex, NavLink } from 'theme-ui';

function MenuItem({
  title,
  onClick,
  isActive,
}: {
  title: string;
  onClick: () => void;
  isActive: boolean;
}) {
  const activeStyles = {
    color: 'white',
    fontWeight: 'bold',
    px: [2, 2, 4],
    '&:hover': {
      color: 'white',
    },
  };

  const styles = {
    px: [2, 2, 4],
    '&:hover': {
      color: 'white',
    },
  };

  return (
    <Flex sx={{ justifyContent: ['space-between'] }}>
      <NavLink onClick={onClick} sx={isActive ? activeStyles : styles}>
        {title}
      </NavLink>
    </Flex>
  );
}

export default MenuItem;
