import {createTheme} from '@rneui/themed';

const theme = createTheme({
  components: {
    Input: {
      inputStyle: {color: 'white'},
      containerStyle: {paddingHorizontal: 0},
      inputContainerStyle: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1.5,
        borderColor: 'rgba(255,255,255,0.2)',
        borderRadius: 6,
      },
      placeholderTextColor: '#D6E1FF',
      leftIconContainerStyle: {paddingLeft: 14, paddingRight: 9},
      errorStyle: {height: 0},
    },
    Button: {
      radius: 6,
      titleStyle: {
        color: '#5073F2',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        paddingVertical: 0,
      },
      buttonStyle: {
        backgroundColor: '#BDCFFF',
        paddingTop: 15,
        paddingBottom: 14,
      },
    },
    Card: {wrapperStyle: {borderRadius: 8}},
  },
});
export default theme;
