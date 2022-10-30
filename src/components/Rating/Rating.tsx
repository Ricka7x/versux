import Image from 'next/image';
import { useMemo } from 'react';
import { Box } from 'theme-ui';

export default function Rating({ rating }: { rating: number }) {
  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => {
        if (idx <= rating) {
          return (
            <Box key={idx} sx={{ display: 'inline-block', px: '8px' }}>
              <Image
                src="/images/rating_active.svg"
                width={26}
                height={26}
                alt="active start"
              />
            </Box>
          );
        } else {
          return (
            <Box key={idx} sx={{ display: 'inline-block', px: '8px' }}>
              <Image
                src="/images/rating.svg"
                width={26}
                height={26}
                alt="active start"
              />
            </Box>
          );
        }
      });
  }, [rating]);

  return <div>{starRating}</div>;
}
