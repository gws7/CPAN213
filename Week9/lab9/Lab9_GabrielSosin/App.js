import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { addBook, fetchBooks } from './redux/actions';
import store from './redux/store';  

const AppContent = () => {
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleAddBook = () => {
    if (bookName === "" || authorName === "") {
      alert("Please enter a book name and author name");
      return;
    }

    const newBook = {
      title: bookName,
      author: authorName
    };

    dispatch(addBook(newBook));
    setBookName("");
    setAuthorName("");
  }

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookList = useSelector((state) => state.books.listOfBooks);

  const renderItem = ({ item }) => (
    <View style={styles.bookCard}>
      <View style={styles.bookIconContainer}>
        <Ionicons name="book-outline" size={30} color="blueviolet" />
      </View>
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>by {item.author}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Book Viewer</Text>
        </View>
        <View style={styles.booksContainer}>
          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <TextInput 
                style={styles.inputField} 
                placeholder="Title" 
                value={bookName}
                onChangeText={setBookName}
              />
              <TextInput 
                style={styles.inputField} 
                placeholder="Author" 
                value={authorName}
                onChangeText={setAuthorName}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={handleAddBook}>
                <Ionicons name="add-circle-sharp" size={50} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "5%", width: "100%", alignSelf: "center" }}>
            <View style={{ flex: 1, height: 5, backgroundColor: "white" }} />
          </View>

          <View style={styles.listContainer}>
            {bookList && bookList.length > 0 ? (
              <FlatList 
                data={bookList} 
                keyExtractor={(item) => item.id.toString()} 
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
              />
            ) : (
              <Text style={styles.emptyText}>No Books In The List Yet</Text>
            )}
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  titleContainer: {
    alignSelf: "center",
    width: "80%",
    marginVertical: 20
  },
  title: {
    alignSelf: "center",
    fontSize: 35,
    color: "white",
    fontWeight: "bold"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 10
  },
  booksContainer: {
    backgroundColor: "blueviolet",
    height: "85%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 8
  },
  inputField: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    padding: 10
  },
  listContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
    width: "95%",
    alignSelf: "center",
    height: "auto"
  },
  listContent: {
    padding: 10
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  bookIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    width: 50,
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  }
});
