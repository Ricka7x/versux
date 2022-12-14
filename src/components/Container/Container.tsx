import { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      sx={{
        maxWidth: 1500,
        minWidth: 349,
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
