import Image from 'next/image';
import { useReducer } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Avatar, Box, Card, Flex, Text } from 'theme-ui';
import { Rating } from '../Rating';

type Step = {
  imageURL: string;
  key: number | string;
  name: string;
  caption: string;
  rating: number;
};

const NEXT = 'NEXT';
const PREV = 'PREV';

type Direction = typeof PREV | typeof NEXT;

interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Direction;
}

const initialState: CarouselState = { pos: 0, sliding: false, dir: NEXT };

type CarouselAction =
  | { type: Direction; numItems: number }
  | { type: 'stopSliding' | 'reset' };

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case 'reset':
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

export default function QuotesCarousel({ steps }: { steps: Step[] }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numItems = steps.length;

  const slide = (dir: Direction) => {
    dispatch({ type: dir, numItems });

    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const getTransform = () => {
    if (!state.sliding) return 'translateX(calc(-540px))';
    if (state.dir === PREV) return 'translateX(calc(2 * (-540px)))';
    return 'translateX(0%)';
  };

  const getMobileTransform = () => {
    if (!state.sliding) return 'translateX(calc(-335px))';
    if (state.dir === PREV) return 'translateX(calc(2 * (-335px)))';
    return 'translateX(0%)';
  };

  return (
    <Box {...handlers}>
      <Box
        sx={{
          width: [335, 540],
          overflow: 'hidden',
          margin: '0 auto',
          boxShadow: '0 10px 28px rgba(25, 25, 25, 0.05)',
          borderRadius: 40,
        }}
      >
        <Flex
          sx={{
            justifyContent: 'center',
            transition: state.sliding ? 'none' : `transform .25s ease`,
            transform: [getMobileTransform(), getTransform()],
          }}
        >
          {steps.map((step: Step, index: number) => (
            <div
              key={step.key}
              sx={{
                order: getOrder(index, state.pos, numItems),
                borderRadius: 40,
              }}
            >
              <Box
                sx={{
                  width: [335, 540],

                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  px: 2,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 100,
                      left: 32,
                      opacity: 0.6,
                    }}
                  >
                    <Image
                      src="/images/quote.svg"
                      width={147}
                      height={90}
                      alt="quotes"
                    />
                  </Box>

                  <Box sx={{ mb: 36 }}>
                    <Rating rating={step.rating} />{' '}
                  </Box>

                  <Text sx={{ color: 'muted' }}>
                    Phasellus risus turpis, pretium sit amet magna non, molestie
                    ultricies enim Nullam pulvinar felis at metus malesuada, nec
                    convallis lacus commodo. Duis blandit neque purus, nec
                  </Text>

                  <Flex sx={{ alignItems: 'center', mt: 4 }}>
                    <Box sx={{ mr: 3 }}>
                      <Avatar src={step.imageURL} width={40} height={40} />
                    </Box>
                    <Box>
                      <Text
                        sx={{
                          fontSize: 2,
                          fontWeight: 600,
                          display: 'block',
                        }}
                      >
                        {step.name}
                      </Text>

                      <Text variant="caption" sx={{ color: 'muted' }}>
                        @username
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </div>
          ))}
        </Flex>
      </Box>

      {
        <Flex sx={{ justifyContent: 'center', mt: 100, zIndex: 5 }}>
          <Box onClick={() => slide(PREV)} sx={{ mx: 3, cursor: 'pointer' }}>
            <Image
              src="/images/left_arrow.svg"
              width={38}
              height={36}
              alt="left arrow"
            />
          </Box>
          <Box onClick={() => slide(NEXT)} sx={{ mx: 3, cursor: 'pointer' }}>
            <Image
              src="/images/right_arrow.svg"
              width={72}
              height={36}
              alt="left arrow"
            />
          </Box>
        </Flex>
      }
    </Box>
  );
}
