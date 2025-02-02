import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  const OPTIONS = ["Dev", "Business", "HR"];
  const [apiOptions, setApiOptions] = useState(OPTIONS[0]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getInformationFromApi = async () => {
    setIsLoading(true);

    const url = `https://jobicy.com/api/v2/remote-jobs?count=20&industry=${apiOptions.toLowerCase()}`;

    console.log(`Fetching from: ${url}`);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}. Response not received successfully from API.`);
      }
      const jsonData = await response.json();
      setData(jsonData.jobs);
      console.log(`Response from API: ${JSON.stringify(jsonData)}`);
    } catch (error) {
      console.log(`Error while fetching the data from API: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInformationFromApi();
  }, [apiOptions]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Job Information</Text>
        </View>

        {/* Picker Dropdown */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Job Type:</Text>
          <Picker selectedValue={apiOptions} onValueChange={(itemValue) => setApiOptions(itemValue)} style={styles.picker}>
            {OPTIONS.map((element) => (
              <Picker.Item label={element} value={element} key={element} />
            ))}
          </Picker>
        </View>

        {/* Job List */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#3498DB" style={styles.loadingIndicator} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <View style={styles.jobCard}>
                <Image source={{ uri: item.companyLogo }} style={styles.companyLogo} />
                <Text style={styles.jobTitle}>Job Title - {item.jobTitle}</Text>
                <Text style={styles.jobDetail}>Company - {item.companyName}</Text>
                <Text style={styles.jobDetail}>Industry - {item.jobIndustry}</Text>
                <Text style={styles.jobDetail}>Type - {item.jobType}</Text>
                <Text style={styles.jobDetail}>Level - {item.jobLevel}</Text>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1', 
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50', 
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#2C3E50',
    alignSelf: "center"
  },
  picker: {
    height: 60,
    width: '100%',
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, 
    alignItems: 'center',
  },
  companyLogo: {
    width: 80, 
    height: 80, 
    borderRadius: 10, 
    marginBottom: 10,
    resizeMode: 'contain', 
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  jobDetail: {
    fontSize: 14,
    color: '#34495E',
    marginVertical: 2,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});
