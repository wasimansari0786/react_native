import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Modal,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import DocumentPicker from 'react-native-document-picker';

const Work = () => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);
  const [category, setCategory] = React.useState('');
  const categories = [
    {key: 'java', value: 'Java'},
    {key: 'python', value: 'Python'},
    {key: 'react native', value: 'Reat Native'},
    {key: 'c', value: 'c'},
    {key: 'dbms', value: 'DBMS'},
    {key: 'angular', value: 'Angular'},
    {key: 'html&css', value: 'HTML&CSS'},
    {key: 'java script', value: 'Java Script'},
  ];

  const [imageUri, setImageUri] = React.useState('');
  const [docUri, setDocUri] = React.useState('');

  const selectDoc = async () => {
    try {
      const document = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      //setImageUri(''); // Clear any previous image URI
      setDocUri(document);
      console.log(document);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the upload', err);
      } else {
        console.log('DocumentPicker Error', err);
      }
    }
  };

  const selectImage = async () => {
    try {
      const document = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      //setDocUri(''); // Clear any previous document URI
      setImageUri(document);
      console.log(document);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the upload', err);
      } else {
        console.log('DocumentPicker Error', err);
      }
    }
  };

  const [showImagePreview, setShowImagePreview] = useState(false);

  const openImagePreview = () => {
    setShowImagePreview(true);
  };

  const closeImagePreview = () => {
    setShowImagePreview(false);
  };

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
            placeholder="Name of The Company"
             placeholderTextColor="gray"
          />
        )}
        name="company"
        defaultValue=""
        rules={{
          required: true,
        }}
      />
      {errors.company && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Working Role"
            placeholderTextColor="gray"
            style={styles.name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="role"
        defaultValue=""
        rules={{
          required: true,
        }}
      />
      {errors.role && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Work Experience"
            placeholderTextColor="gray"
            style={styles.name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="experience"
        defaultValue=""
        rules={{
          required: true,
        }}
      />
      {errors.experience && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Work location"
            placeholderTextColor="gray"
            style={styles.name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="location"
        defaultValue=""
        rules={{
          required: true,
        }}
      />
      {errors.location && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <MultipleSelectList
            setSelected={setCategory}
            data={categories}
            placeholder="Skills"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            boxStyles={{
              //backgroundColor: 'black',
              borderWidth: 1,
              borderColor: '#8fbc8f',
              marginLeft: 40,
              marginRight: 40,
              marginTop: 20,
            }}
            dropdownTextStyles={{
              color: 'grey',
            }}
            dropdownStyles={{
              borderWidth: 1,
              borderColor: '#8fbc8f',
              marginLeft: 40,
              marginRight: 40,
            }}
          />
        )}
        name="skills"
        defaultValue=""
        rules={{
          required: true,
        }}
      />
      {errors.skills && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
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

      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity onPress={openImagePreview}>
            {imageUri ? (
              <>
                <Image
                  source={{uri: imageUri.uri}}
                  style={styles.profileImage}
                />
                <Text style={styles.fileName}>{imageUri.name}</Text>
              </>
            ) : (
              <Text style={styles.noImageText}>No image selected</Text>
            )}
          </TouchableOpacity>
        </View>

        <View>
          {docUri ? (
            <>
              <Image
                source={require('../assets/icons8-pdf-100.png')}
                style={styles.pdflogo}
              />
              <Text style={styles.fileName}>
                {docUri.name} ({docUri.type})
              </Text>
            </>
          ) : null}
        </View>
      </View>

      <Modal
        visible={showImagePreview}
        transparent={true}
        onRequestClose={closeImagePreview}>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={closeImagePreview}>
          <Image source={{uri: imageUri.uri}} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>

      <View style={styles.direction}>
        <TouchableOpacity onPress={selectImage}>
          <Text style={styles.image}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={selectDoc}>
          <Text style={styles.file}>Upload File</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSubmit(onSubmit)} label="Submit">
        <Text style={styles.button}>Next→</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('EducationDettails')}>
        <Text style={styles.button}>←Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Work;

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

  image: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    backgroundColor: '#8fbc8f',
    marginLeft: 40,
    padding: 20,
    fontWeight: 'bold',
    borderRadius: 15,
  },

  file: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    marginLeft: 65,
    padding: 20,
    backgroundColor: '#8fbc8f',
    fontWeight: 'bold',
    borderRadius: 15,
  },

  direction: {
    flexDirection: 'row',
    marginTop: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 30,
    borderWidth: 1,
    borderColor: '#f0f8ff',
    //borderStyle:'dashed',
  },
  noImageText: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    marginLeft: 40,
  },
  fileName: {
    marginTop: 15,
    fontSize: 13,
    color: 'white',
    marginLeft: 30,
    fontWeight: 'bold',
  },

  pdflogo: {
    width: 130,
    height: 130,
    marginLeft: 50,
    marginTop: 30,
    // borderWidth:1,
    // borderColor:'#f0f8ff',
    // borderRadius: 10
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});