import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './style';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../Redux/action/actions';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = 5; // Adjust the delivery fee based on your business logic
  const gstRate = 0.1; // GST rate as a decimal (e.g., 10% as 0.1)
  const gstAmount = subTotal * gstRate;
  const totalAmount = subTotal + deliveryFee + gstAmount;

  const handleIncrease = item => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = item => {
    dispatch(decreaseQuantity(item));
  };

  const handleRemove = item => {
    dispatch(removeFromCart(item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.your_cart}>Your Cart:</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.sub_container}>
            <Image source={item.image} style={styles.cart_image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.cart_price}>{item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleDecrease(item)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleIncrease(item)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
                <View>
                  <TouchableOpacity onPress={() => handleRemove(item)}>
                    <Text style={styles.removeButton}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <View style={[styles.billDetailsContainer, {elevation: 5}]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subtotalText}>Sub-Total:</Text>
          <Text style={styles.subtotalTotal}>{subTotal} INR</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subtotalText}>Delivery Fee: </Text>
          <Text style={styles.subtotalTotal}> {deliveryFee} INR</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subtotalText}>
            {' '}
            GST ({(gstRate * 100).toFixed(0)}%):
          </Text>
          <Text style={styles.subtotalTotal}>{gstAmount.toFixed(2)} INR</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.totalAmount}>Total Amount: </Text>
          <Text style={styles.payTotal}>{totalAmount.toFixed(2)} INR</Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
