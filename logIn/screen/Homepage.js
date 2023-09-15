import React, {useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Homepage = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);
  const [count5, setCount5] = useState(1);
  const [count6, setCount6] = useState(1);
  const [count7, setCount7] = useState(1);
  const [count8, setCount8] = useState(1);
  const [count9, setCount9] = useState(1);
  const [count10, setCount10] = useState(1);

  //const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const [oldData, setOldData] = useState([]);

  const handleIncrease1 = () => {
    setCount1(count1 + 1);
  };

  const handleDecrease1 = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
    }
  };

  const handleIncrease2 = () => {
    setCount2(count2 + 1);
  };

  const handleDecrease2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  };

  const handleIncrease3 = () => {
    setCount3(count3 + 1);
  };

  const handleDecrease3 = () => {
    if (count3 > 1) {
      setCount3(count3 - 1);
    }
  };

  const handleIncrease4 = () => {
    setCount4(count4 + 1);
  };

  const handleDecrease4 = () => {
    if (count4 > 1) {
      setCount4(count4 - 1);
    }
  };

  const handleIncrease5 = () => {
    setCount5(count5 + 1);
  };

  const handleDecrease5 = () => {
    if (count5 > 1) {
      setCount5(count5 - 1);
    }
  };

  const handleIncrease6 = () => {
    setCount6(count6 + 1);
  };

  const handleDecrease6 = () => {
    if (count6 > 1) {
      setCount6(count6 - 1);
    }
  };

  const handleIncrease7 = () => {
    setCount7(count7 + 1);
  };

  const handleDecrease7 = () => {
    if (count7 > 1) {
      setCount7(count7 - 1);
    }
  };

  const handleIncrease8 = () => {
    setCount8(count8 + 1);
  };

  const handleDecrease8 = () => {
    if (count8 > 1) {
      setCount8(count8 - 1);
    }
  };

  const handleIncrease9 = () => {
    setCount9(count9 + 1);
  };

  const handleDecrease9 = () => {
    if (count9 > 1) {
      setCount9(count9 - 1);
    }
  };

  const handleIncrease10 = () => {
    setCount10(count10 + 1);
  };

  const handleDecrease10 = () => {
    if (count10 > 1) {
      setCount10(count10 - 1);
    }
  };

  const data = [
    {
      id: 1,
      title: 'BRAVE NEW WORLD',
      description:
        'Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932.',
      image: require('./assets/books/Brave_New_World.jpg'),
      amount: '₹250',
      increase: handleIncrease1,
      decrease: handleDecrease1,
      count: count1,
    },

    {
      id: 2,
      title: 'EMMA',
      description:
        'Emma is a novel written by Jane Austen. It is set in the fictional country village of Highbury and the surrounding estates of Hartfield, Randalls and Donwell Abbey, and involves the relationships among people from a small number of families.',
      image: require('./assets/books/Emma.jpg'),
      amount: '₹295',
      increase: handleIncrease2,
      decrease: handleDecrease2,
      count: count2,
    },

    {
      id: 3,
      title: 'BELOVED',
      description:
        'Beloved is a 1987 novel by American novelist Toni Morrison. Set in the period after the American Civil War, the novel tells the story of a dysfunctional family of formerly enslaved people whose Cincinnati home is haunted by a malevolent spirit.',
      image: require('./assets/books/Beloved.jpg'),
      amount: '₹350',
      increase: handleIncrease3,
      decrease: handleDecrease3,
      count: count3,
    },

    {
      id: 4,
      title: '1984',
      description:
        '1984 is the story of a man questioning the system that keeps his futuristic but dystopian society afloat and the chaos that quickly ensues once he gives in to his natural curiosity and desire to be free.',
      image: require('./assets/books/1984.jpg'),
      amount: '₹150',
      increase: handleIncrease4,
      decrease: handleDecrease4,
      count: count4,
    },

    {
      id: 5,
      title: 'THE LORD OF THE RINGS',
      description:
        "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
      image: require('./assets/books/The_lord_of_the_rings.jpg'),
      amount: '₹4,350',
      increase: handleIncrease5,
      decrease: handleDecrease5,
      count: count5,
    },

    {
      id: 6,
      title: 'THE ADVENTURE OF HUCKLEBERRY FINN',
      description:
        'Adventures of Huckleberry Finn is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 and in the United States in February 1885',
      image: require('./assets/books/Adventures_of_Huckleberry_Finn.jpg'),
      amount: '₹200',
      increase: handleIncrease6,
      decrease: handleDecrease6,
      count: count6,
    },

    {
      id: 7,
      title: 'JANE EYRE',
      description:
        'Jane Eyre is a novel by the English writer Charlotte Brontë. It was published under her pen name "Currer Bell" on 19 October 1847 by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York.',
      image: require('./assets/books/Jane_Eyre.jpg'),
      amount: '₹200',
      increase: handleIncrease7,
      decrease: handleDecrease7,
      count: count7,
    },

    {
      id: 8,
      title: 'THE GRAPES OF WRATH',
      description:
        'The Grapes of Wrath is an American realist novel written by John Steinbeck and published in 1939. The book won the National Book Award and Pulitzer Prize for fiction, and it was cited prominently when Steinbeck was awarded the Nobel Prize in 1962.',
      image: require('./assets/books/The_grapes_of_wrath.jpg'),
      amount: '₹390',
      increase: handleIncrease8,
      decrease: handleDecrease8,
      count: count8,
    },

    {
      id: 9,
      title: 'THE GREAT GATSBY',
      description:
        "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraways interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      image: require('./assets/books/The_great_gatsby.jpg'),
      amount: '₹390',
      increase: handleIncrease9,
      decrease: handleDecrease9,
      count: count9,
    },

    {
      id: 10,
      title: 'TO KILL A MOCKINGBIRD',
      description:
        'To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools.',
      image: require('./assets/books/To_kill_a_mockingbird.jpg'),
      amount: '₹3,650',
      increase: handleIncrease10,
      decrease: handleDecrease10,
      count: count10,
    },
  ];

  const onSearch = text => {
    let tempList = data.filter(item => {
      return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setData(tempList);
  };

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={Styles.background}>
        <SafeAreaView />
        {/* <Image style={Styles.image} source={require('./assets/logo2.png')}/> */}

        <Text style={Styles.header}>Products</Text>
        <View style={Styles.inputTextBox}>
          <Image source={require('./assets/search_icon.png')} />
          <TextInput
            ref={searchRef}
            placeholder="Search Settings"
            placeholderTextColor="black"
            style={{color: 'black'}}
            value={search}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}></TextInput>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={Styles.details}>
              <Image source={item.image} style={Styles.bookImage} />

              <View style={Styles.description}>
                <Text style={Styles.text}>{item.title}</Text>

                <Text>{item.description}</Text>

                <Text style={Styles.price}>{item.amount}</Text>

                <View style={Styles.count}>
                  <TouchableOpacity>
                    <Text onPress={item.increase}> + </Text>
                  </TouchableOpacity>

                  <Text>{item.count}</Text>

                  <TouchableOpacity>
                    <Text onPress={item.decrease}> - </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};
export default Homepage;

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },

  header: {
    fontSize: 25,
    textAlign: 'center',
    //paddingBottom: 10,
    color: '#3cb371',
    fontWeight: 'bold',
  },

  bookImage: {
    marginTop: 30,
    height: 180,
    width: 140,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  details: {
    flexDirection: 'row',
  },

  description: {
    flex: 1,
    marginLeft: 20,
    marginRight: 5,
    borderBottomColor: '#48d1cc',
  },

  price: {
    fontSize: 20,
    color: '#3cb371',
    marginTop: 5,
  },

  count: {
    flexDirection: 'row',
    marginLeft: 100,
    borderWidth: 1,
    // borderBlockColor:'#3cb371',
    // borderRadius:50,
  },

  text: {
    fontSize: 15,
    padding: 10,
    //marginLeft:10,
    borderWidth: 1,
    color: '#3cb371',
    fontWeight: 'bold',
    borderBottomColor: '#fff',
  },

  // image : {

  //   marginLeft:120,
  //   marginTop: 100,
  //   height:150,
  //   width:150,

  // },

  inputTextBox: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginLeft: 20,
  },
});
