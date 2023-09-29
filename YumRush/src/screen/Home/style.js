import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
  },

  splash_bg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '65%',
  },

  splash_image: {
    height: 200,
    width: 200,
  },

  splash_text_yum: {
    fontWeight: 'bold',
    fontSize: 33,
    color: colors.red,
    marginTop: 10,
    //fontFamily: "",
  },

  splash_text_rush: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.pear,
    marginTop: 8,
  },

  button: {
    height: '18%',
    width: '70%',
    borderRadius: 50,
    backgroundColor: colors.Emerald_Green,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
    marginTop: '40%',
  },

  getstart: {
    fontSize: 25,
    color: colors.white,
  },
});
export default styles;
