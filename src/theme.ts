import { createTheme } from '@rneui/themed';
export const colorPalette = {
  gray: '#40466D',
  darkBody: '#3D436C',
  lightBody: '#8E92B2',
  extraLightBody: '#D6DFFF',
  blue1: '#6992FF',
  blue2: '#9194BB',
  blue3: '#6081FA',
  blue4: '#BDCFFF',
  blue5: '#5073F2',
  shadow: '#EBEDFB',
  red: '#F94B5C',
  green: '#3BBA7D',
};
const theme = createTheme({
  components: {
    Text: {
      style: { fontSize: 14, fontWeight: '500' },
      h1Style: { fontSize: 23, fontWeight: '900', lineHeight: 30 },
      h2Style: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        textTransform: 'uppercase',
      },
      h3Style: { fontSize: 15, fontWeight: '700' },
    },
    Input: {
      inputStyle: { color: 'white' },
      containerStyle: { marginBottom: 10, paddingHorizontal: 0 },
      inputContainerStyle: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1.5,
        borderColor: 'rgba(255,255,255,0.2)',
        borderRadius: 6,
      },
      placeholderTextColor: '#D6E1FF',
      leftIconContainerStyle: { paddingLeft: 14, paddingRight: 9 },
      errorStyle: { height: 0, margin: 0 },
    },
    Button: {
      radius: 6,
      loadingStyle: { height: 16, marginVertical: 0 },
      titleStyle: {
        color: colorPalette.blue5,
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        paddingVertical: 0,
      },
      buttonStyle: {
        backgroundColor: colorPalette.blue4,
        paddingTop: 15,
        paddingBottom: 14,
      },
    },
    Card: {
      wrapperStyle: { borderRadius: 8 },
      containerStyle: {
        borderRadius: 8,
        borderWidth: 0,
        shadowColor: colorPalette.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        padding: 18,
      },
    },
  },
});
export default theme;
