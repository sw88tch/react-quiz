import { breakpoints } from "../../utils/breakpoints";

export const ButtonOutfits = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
  [breakpoints.small]: {
    flexDirection: 'column',
    marginTop: 10
  },
};