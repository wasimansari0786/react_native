import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SelectList} from 'react-native-dropdown-select-list';
import {useForm, Controller} from 'react-hook-form';

const Form = ({toggleTheme, isDarkTheme}) => {
  const navigation = useNavigation();
  const [category, setCategory] = React.useState('');
  const [subCategory, setSubCategory] = React.useState('');
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);

  //const handleNavigation =() => navigation.navigate('EducationDettails');

  const categories = [
    {key: 'Male', value: 'Male'},
    {key: 'Female', value: 'Female'},
    {key: 'Othes', value: 'Others'},
  ];

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.header}>INFORMATION</Text> */}
      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkTheme ? 'purple' : '#f4f3f4'}
        onValueChange={toggleTheme}
        value={isDarkTheme}
      /> */}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.name}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Name"
            placeholderTextColor='gray'
          />
        )}
        name="name"
        defaultValue=""
        rules={{
          required: true,
        }}
      />
      {errors.name && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
            placeholderTextColor='gray'
          />
        )}
        name="email"
        defaultValue=""
        rules={{
          required: true,
        }}
      />
      {errors.email && <Text style={styles.error}>This is required.</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Mobile Number"
            placeholderTextColor='gray'
            maxLength={10}
          />
        )}
        name="number"
        defaultValue=""
        rules={{
          required: true,
          maxLength: 10,
        }}
      />
      {errors.number && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <View style={styles.gender}>
            <SelectList
              setSelected={setCategory}
              data={categories}
              placeholder="Gender"
              placeholderTextColor="gray"
              defaultOption={'Gender'}
              onChangeText={onChange}
              value={value}
              inputStyles={{
                color:'grey'
              }
              }
              boxStyles={{
                //backgroundColor: 'black',
                borderWidth: 1,
                borderColor: '#8fbc8f',
              }}
              dropdownTextStyles={{
                color: 'grey',
              }}
              dropdownStyles={{
                borderWidth: 1,
                borderColor: '#8fbc8f',
              }}
            />
          </View>
        )}
        name="gender"
        defaultValue=""
      />
      {errors.gender && <Text style={styles.error}>This is required.</Text>}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        label="Submit"
        onPressIn={() => navigation.navigate('EducationDettails')}>
        <Text style={styles.button}>Next→</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={styles.next} onPress={()=> navigation.navigate('EducationDettails')}>Next→</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    color: '#6a5acd',
    fontSize: 20,
    fontWeight: 'bold',
  },

  name: {
    textAlign: 'left',
    padding: 15,
    //color: 'black',
    borderWidth: 1,
    borderColor: '#8fbc8f',
    //backgroundColor: 'gray',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    borderRadius: 10,
  },

  gender: {
    borderColor: '#8fbc8f',
    //backgroundColor: 'black',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    borderRadius: 10,
  },

  button: {
    borderColor: 'black',
    height: 60,
    borderWidth: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
    backgroundColor: '#8fbc8f',
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    borderColor: '#f0f8ff',
    borderWidth: 1,
  },
  error: {
    color: 'red',
    marginLeft: 40,
    padding: 5,
  },
  drawerButton: {
    marginTop: 20,
    marginLeft: 20,
    color: 'blue', // Customize the color
    fontSize: 16,
    textDecorationLine: 'underline', // Add underline for visual indication
  },
});
