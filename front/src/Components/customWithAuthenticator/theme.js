import $ from '../../styles/global';

export const Container = {
  fontFamily: 'Lato',
};

export const FormContainer = {
  margin: `${$.layout().margin2}px 0px ${$.layout().margin1}px`,
  height: `calc(100% - ${$.layout().margin2 + $.layout().margin1}px)`,
};

export const FormSection = {
  position: 'relative',
  padding: 0,
  margin: 0,
  backgroundColor: $.color.white,
  minWidth: '380px',
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'left',
};

export const FormField = {
  marginBottom: $.layout().margin3,
};

export const SectionHeader = {
  margin: `${$.layout().margin5}px ${$.layout().margin4}px ${$.layout().margin3}px ${$.layout().margin4}px`,
  fontSize: $.font.size.title,
  fontWeight: $.font.weight.black,
  textDecoration: 'none',
  color: $.color.blue2,
  flexShrink: 2,
  fontFamily: 'Aileron Heavy',
};

export const SectionBody = {
  margin: $.layout().margin4,
  width: `calc(100% - ${2 * $.layout().margin4}px)`,
};

export const SectionFooter = {
  fontSize: $.font.size.paragraph,
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
  lineHeight: 1.1,
  fontWeight: $.font.weight.bold,
  textDecoration: 'none',
  width: '100%',
  color: $.color.gray,
};

export const SectionFooterPrimaryContent = {
  width: '100%',
  marginBottom: $.layout().margin3,
};

export const SectionFooterSecondaryContent = {
  margin: 0,
  alignSelf: 'center',
};

export const Input = {
  display: 'block',
  boxSizing: 'content-box',
  width: `calc(100% - ${2 * $.layout().padding4}px)`,
  padding: $.layout().padding4,
  backgroundImage: 'none',
  marginBottom: $.layout().margin4,
  height: 18,

  fontFamily: 'Lato',
  // whiteSpace: 'nowrap',
  // touchAction: 'manipulation',
  // cursor: 'pointer',
  // userSelect: 'none',
  webkitAppearance: 'none',
  border: '0px solid rgba(0,0,0,0.4)',
  borderRadius: '10px',
  webkitBoxShadow: $.dropShadow.normal,
  boxShadow: $.dropShadow.normal,
  textAlign: 'left',
  verticalAlign: 'middle',
  backgroundColor: $.color.white,
  fontSize: $.font.size.header,
  fontWeight: $.font.weight.bold,
  textDecoration: 'none',
  color: $.color.black,
  cursor: 'pointer',
};

export const Button = {
  boxSizing: 'content-box',
  fontFamily: 'Lato',
  display: 'block',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  userSelect: 'none',
  border: '0px solid #000',
  borderRadius: '10px',
  boxShadow: $.dropShadow.normal,
  textAlign: 'center',
  backgroundColor: $.color.blue1,
  fontSize: $.font.size.header,
  fontWeight: $.font.weight.bold,
  textDecoration: 'none',
  color: $.color.white,
  height: 32,
  width: `calc(100% - ${2 * $.layout().margin4}px)`,
  margin: `0px ${$.layout().margin4}px`,
};

export const SignInButton = {
  position: 'relative',
  width: '100%',
  borderRadius: '4px',
  marginBottom: $.layout().margin5,
  cursor: 'pointer',
  padding: 0,
  fontFamily: 'Amazon Ember',
  color: $.color.white,
  fontSize: $.font.size.paragraph,
};

export const SignInButtonIcon = {};

export const SignInButtonContent = {
  display: 'block',
  padding: `${$.layout().padding4}px 0px`,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
};

export const Strike = {
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid #bbb',
  lineHeight: '0.1em',
  margin: `${$.layout().margin3}px 0`,
  color: $.color.gray,
};

export const StrikeContent = {
  background: $.color.white,
  padding: `0px ${$.layout().padding3}px`,
  fontSize: $.font.size.paragraph,
  fontWeight: $.font.weight.normal,
};

export const ActionRow = {
  marginBottom: $.layout().margin4,
};

export const FormRow = {
  marginBottom: $.layout().margin4,
};

export const Anchor = {
  display: 'block',
  color: `${$.color.blue2}bb`,
  cursor: 'pointer',
};

export const Hint = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  lineHeight: 1.1,
  marginTop: $.layout().margin3,
  marginRight: $.layout().margin4,
  fontSize: $.font.size.paragraph,
  fontWeight: $.font.weight.bold,
  textDecoration: 'none',
  color: $.color.gray,
};

export const Radio = {
  marginRight: $.layout().margin4,
  verticalAlign: 'bottom',
};

export const InputLabel = {
  marginBottom: $.layout().margin5,
  fontSize: $.font.size.subtitle,
  fontWeight: $.font.weight.bold,
  color: $.color.black,
  textDecoration: 'none',
  fontFamily: 'Aileron Heavy',
};

const Toast = {
  margin: $.layout().margin4,
  marginBottom: 0,
  borderRadius: '999px',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 0,
  left: 0,
  width: `calc(100% - ${$.layout().padding4 + $.layout().padding3}px)`,
  zIndex: 99,
  lineHeight: 1.1,
  boxShadow: '0px 9px 15px #00000040',
  padding: $.layout().padding4,
  paddingLeft: $.layout().padding3,
  backgroundColor: $.color.blue2,
  fontSize: $.font.size.paragraph,
  color: $.color.white,
  fontWeight: $.font.weight.bold,
};

const theme = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,

  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,

  input: Input,
  button: Button,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: Anchor,

  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,
  toast: Toast,
};

export default theme;
