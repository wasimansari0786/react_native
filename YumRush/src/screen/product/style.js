import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  background: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
  },
  view: {
    backgroundColor: colors.light_peach,
    //marginRight: '10%',
    marginTop: 20,
    marginLeft: 25,
    width: '40%',
    //height: 200,
    //borderWidth: 2,
    //borderColor: colors.Emerald_Green,
    borderRadius: 10,
    shadowColor: 'black',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
  },
  item_name: {
    fontWeight: 'bold',
    color: colors.black,
    padding: 10,
  },
  image: {
    height: 100,
    width: 130,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    //marginTop: 70,
  },
  header_text: {
    marginLeft: 10,
    marginTop: 20,
  },
  header_text1: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
  },
  header_text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
  },

  button: {
    height: '40%',
    width: '50%',
    borderRadius: 20,
    backgroundColor: colors.Emerald_Green,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
    marginTop: '55%',
  },

  cart: {
    fontSize: 25,
    color: colors.white,
  },
  cart_logo: {
    height: 40,
    width: 40,
    //position: 'absolute',
    //left: '80%',
  },
  cart_position: {
    position: 'absolute',
    left: '83%',
    top: 10,
  },

  selected_image: {
    marginTop: '20%',
    height: '40%',
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
  },

  selected_name: {
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  description: {
    padding: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 10,
  },
  price: {
    color: colors.Emerald_Green,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 30,
    marginTop: 10,
  },
  // shadow: {
  //   shadowColor: 'black',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  // },

  heading: {
    fontSize: 25,
    color: colors.black,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sub_container: {
    backgroundColor: colors.Peach,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
    width: '85%',
    elevation: 5,
  },
  cart_image: {
    height: 100,
    width: 100,
    margin: 20,
    borderRadius: 10,
  },
  name: {
    color: colors.black,
    marginRight: 20,
    marginTop: 25,
    fontWeight: 'bold',
  },
  itemDetail: {
    width: '60%',
  },
  cart_price: {
    color: colors.black,
    paddingTop: 10,
  },

  your_cart: {
    alignSelf: 'center',
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  //count Style

  quantityContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  quantityButton: {
    fontSize: 19,
    paddingLeft: 10,
    color: colors.black,
    backgroundColor: colors.light_peach,
    width: 30,
    borderRadius: 70,
  },
  quantity: {
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    color: colors.Emerald_Green,
    fontSize: 19,
  },
  removeButton: {
    marginLeft: 50,
    color: colors.red,
  },
  totalPrice: {
    color: colors.black,
  },

  count: {
    flexDirection: 'row',
    marginLeft: '58%',
  },
  billDetailsContainer: {
    marginTop: 20,
    marginLeft: 5,
    backgroundColor: colors.white,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 20,
    height: '20%',
  },
  subtotalText: {
    color: colors.grey,
    fontSize: 15,
    //fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 25,
    width: '45%',
    padding: 5,
  },
  subtotalTotal: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'right',
    width: '40%',
    marginTop: 10,
  },
  totalAmount: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 25,

    width: '45%',
  },
  payTotal: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'right',
    width: '40%',
    marginTop: 10,
  },
});

export default styles;
