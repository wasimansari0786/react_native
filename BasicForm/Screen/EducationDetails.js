import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

const EducationDetails = () => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <ScrollView style={styles.container}>
      
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name of The Course"
              placeholderTextColor="gray"
            />
          )}
          name="course"
          defaultValue=""
          rules={{
            required: true,
          }}
        />
        {errors.course && <Text style={styles.error}>This is required.</Text>}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Name of The Degree"
              placeholderTextColor="gray"
              style={styles.name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="degree"
          defaultValue=""
          rules={{
            required: true,
          }}
        />
        {errors.degree && <Text style={styles.error}>This is required.</Text>}

        <Controller
          control={control}
          render={({field: {onChange, onBlur,value}}) => (
            <TextInput
              placeholder="Name of The Institute"
              placeholderTextColor="gray"
              style={styles.name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="institute"
          defaultValue=""
          rules={{
            required: true,
          }}
        />
        {errors.institute && <Text style={styles.error}>This is required.</Text>}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Name of The Univercity"
              placeholderTextColor="gray"
              style={styles.name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="univercity"
          defaultValue=""
          rules={{
            required: true,
          }}
        />
        {errors.univercity && <Text style={styles.error}>This is required.</Text>}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Total CGPA %"
              placeholderTextColor="gray"
              style={styles.name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="cgpa"
          defaultValue=""
          rules={{
            required: true,
          }}
        />
        {errors.cgpa && <Text style={styles.error}>This is required.</Text>}

        <Controller
          control={control}
          render={({field: {onChange, onBlur,  value}}) => (
            <TextInput
              placeholder="Course Completion Year"
              placeholderTextColor="gray"
              style={styles.name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="year"
          defaultValue=""
          rules={{
            required: true,
          }}
        />
        {errors.year && <Text style={styles.error}>This is required.</Text>}
      

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        label="Submit"
        onPressIn={() => navigation.navigate('Work')}>
        <Text style={styles.button}>Next→</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Form')}>
        <Text style={styles.button}>←Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default EducationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    textAlign: 'left',
    padding: 15,
    borderWidth: 1,
    borderColor: '#8fbc8f',
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
});
