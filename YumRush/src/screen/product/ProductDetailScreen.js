import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {Images} from '../../utils/Images';
import {increaseQuantity, decreaseQuantity} from '../../Redux/action/actions';
import {useNavigation} from '@react-navigation/native';

const ProductDetailScreen = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const {item} = route.params;

  const addToCart = item => {
    console.log(item.quantity);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: item.id,
        name: item.name,
        image: item.image,
        description: item.description,
        price: item.price,
        quantity: count,
      },
    });
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.cart_position}
          onPress={() => navigation.navigate('CartScreen')}>
          <Image source={Images.cart} style={styles.cart_logo} />
        </TouchableOpacity>
        <Image source={item.image} style={styles.selected_image} />
        <View>
          <Text style={styles.selected_name}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.count}>
              <TouchableOpacity onPress={() => handleDecrease(item)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{count}</Text>
              <TouchableOpacity onPress={handleIncrease}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addToCart(item);
              alert('Item added to your cart');
            }}>
            <Text style={styles.cart}>Add to cart</Text>
          </TouchableOpacity>
          {/* Add more details here */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
