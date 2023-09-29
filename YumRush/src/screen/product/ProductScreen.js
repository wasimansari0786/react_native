import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {Images} from '../../utils/Images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/action/actions';

const fooddata = [
  {
    id: '1',
    name: 'Chicken',
    image: Images.chicken,
    price: 100,
    description:
      'Serves 1| Big Size Garlic Barbeque Chicken[Oil Free] | Homemade Chaat Masala | Lemon Slice.',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Veg-Burger',
    image: Images.burger,
    price: 150,
    description:
      'Our Best-Selling Burger With Crispy Veg Double Patty, Fresh Onion And Our Signature Sauce.',
    quantity: 1,
  },
  {
    id: '3',
    name: 'Pizza',
    image: Images.pizza,
    price: 250,
    description:
      'Hot & spicy chicken pizza with a combination of chicken keema & red paprika toppings and a new spicy peri peri sauce.',
    quantity: 1,
  },
  {
    id: '4',
    name: 'Burger with French Fries',
    image: Images.burger_French_fries,
    price: 120,
    description: '2Mexican Chicken Whopper + 2Med Fries.',
    quantity: 1,
  },
  {
    id: '5',
    name: 'Biryani',
    image: Images.biriyani,
    price: 250,
    description:
      'Delicious Taste And Long Shelf Life High In Protein Chicken Biryani For Human Consumption Grade: A',
    quantity: 1,
  },
  {
    id: '6',
    name: 'Tteok-bokki',
    image: Images.Tteok_bokki,
    price: 1000,
    description:
      '[Sweet and spicy rice cake] chilli sauce,rice cake Swipe right to add item to cart.',
    quantity: 1,
  },
  {
    id: '7',
    name: 'Croissants',
    image: Images.Croissants,
    price: 700,
    description:
      ' A laminated, yeast-leavened bakery product that contains dough/roll-in fat layers to create a flaky, crispy texture.',
    quantity: 1,
  },
  {
    id: '8',
    name: 'Chocolate Macaroon',
    image: Images.Macarons,
    price: 400,
    description:
      'Dark chocolate flavoured french macarons made with meringue, sugar, almond powder and chocolate.',
    quantity: 1,
  },
  {
    id: '9',
    name: 'Raspberry Cake',
    image: Images.dessert,
    price: 200,
    description:
      'An irresistibly flavorsome cakes rich in flavour prepared with super ingredients, perfect to satisfy your sweet tooth.',
    quantity: 1,
  },
  {
    id: '10',
    name: 'Nasi Lemak',
    image: Images.nasi_lemak,
    price: 500,
    description:
      ' Rice dish commonly served with roasted nuts, egg, ikan bilis (anchovies), and slices of cucumber.',
    quantity: 1,
  },
  {
    id: '11',
    name: 'Mochi',
    image: Images.mochi,
    price: 600,
    description:
      'Japanese dessert made of sweet glutinous rice flour or mochigome.',
    quantity: 1,
  },
  {
    id: '12',
    name: 'Corn dog',
    image: Images.Corn_dog,
    price: 100,
    description:
      'A chicken sausage on a stick dipped into an exotic batter & fried to perfection.',
    quantity: 1,
  },
];

const ProductScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={[styles.view, {elevation: 5}]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetailScreen', {
              item: {
                id: item.id,
                name: item.name,
                image: item.image,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
              },
            })
          }>
          <Text style={styles.item_name}>{item.name}</Text>
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_text}>
        <Text style={styles.header_text1}>We have</Text>
        <Text style={styles.header_text2}>Great Menu</Text>
        <TouchableOpacity
          style={styles.cart_position}
          onPress={() => navigation.navigate('CartScreen')}>
          <Image source={Images.cart} style={styles.cart_logo} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={fooddata}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ProductScreen;
