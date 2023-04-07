import { isEven } from '@sway/monorepo-pkg-a';

export const isOdd = (x: number) => !isEven(x);
