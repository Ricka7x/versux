import { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      sx={{
        maxWidth: 2000,
        minWidth: 375,
        paddingX: [20, 30, 30, 140],
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

export default Container;
