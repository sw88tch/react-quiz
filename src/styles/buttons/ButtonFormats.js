import { breakpoints } from "../../utils/breakpoints";

export const ButtonFormats = {
  fontSize: 30,
  backgroundColor: '#0084da',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 120,
  height: 120,
  margin: 3,
  borderRadius: 3,
  '&:hover': {
    backgroundColor: '#4caf50',
  },
  [breakpoints.small]: {
    fontSize: 24,
    width: 80,
    height: 80
  },
};