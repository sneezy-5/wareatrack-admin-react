import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function useResponsive(query: 'up' | 'down' | 'between' | 'only', start:  Breakpoint, end?: Breakpoint) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mediaBetween = end ? useMediaQuery(theme.breakpoints.between(start, end)) : false;
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

export function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();

  return (
    // keys.reduce<null | string>((output, key) => {
    //   const matches = useMediaQuery(theme.breakpoints.up(key));
    //   return !output && matches ? key : output;
    // }, null) || 'xs'
    //   ) as string;
    keys.reduce<null | string>((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || 'xs'
    );

}
