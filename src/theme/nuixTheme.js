import {
    createMuiTheme
} from '@material-ui/core';
import 'typeface-noto-sans';
import MuiButton from './MuiButton';
import MuiAppBar from './MuiAppBar';
import MuiToolbar from './MuiToolbar';
import MuiTypography from './MuiTypography';
import MuiCheckbox from './MuiCheckbox';
import MuiInput from './MuiInput';
import MuiInputLabel from './MuiInputLabel';
import MuiFormControl from './MuiFormControl';
import MuiSelect from './MuiSelect';
import MuiMenuItem from './MuiMenuItem';
import MuiFormHelperText from './MuiFormHelperText';
import MuiFormLabel from './MuiFormLabel';
import MuiListItem from './MuiListItem';

const theme = createMuiTheme({
  themeName: "Nuix Theme",
  palette: {
      primary: {
          main: '#006dcc',
      },
      secondary: {
          main: '#43527a',
      },
  },
  typography: {
    fontFamily: '"Noto Sans"',
    useNextVariants: true,
  },
  props: {
      MuiButtonBase: {
        disableRipple: true
      },
      MuiAppBar: {
        color: 'primary',
      },
      MuiTypography: {
        color: 'default'
      },
      MuiInput: {
        disableUnderline: true,
      },
      MuiInputLabel: {
        shrink: true,
      }
  },
  transitions: {
    create: () => 'none',
  },
  overrides: {
    MuiButton,
    MuiAppBar,
    MuiToolbar,
    MuiTypography,
    MuiCheckbox,
    MuiInput,
    MuiInputLabel,
    MuiFormControl,
    MuiSelect,
    MuiMenuItem,
    MuiFormHelperText,
    MuiFormLabel,
    MuiListItem,
  }
});

export default theme;