import React,{useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>

      <View style={styles.setCon}>
        <View style={styles.setList}> 
          <View style={styles.sellectSet}>
            <Text style={styles.setText}>Language</Text>
            <Icon name="chevron-forward" size={24} color="#000" style={styles.arrow} />
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.setList}> 
          <View style={styles.sellectSet}>
            <Text style={styles.setText}>My Profile</Text>
            <Icon name="chevron-forward" size={24} color="#000" style={styles.arrow} />
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.setList}> 
          <View style={styles.sellectSet}>
            <Text style={styles.setText}>Contact Us</Text>
            <Icon name="chevron-forward" size={24} color="#000" style={styles.arrow} />
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.setList}> 
          <View style={styles.sellectSet}>
            <Text style={styles.setText}>Change Password</Text>
            <Icon name="chevron-forward" size={24} color="#000" style={styles.arrow} />
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.setList}> 
          <View style={styles.sellectSet}>
            <Text style={styles.setText}>Privacy Policy</Text>
            <Icon name="chevron-forward" size={24} color="#000" style={styles.arrow} />
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.themeContainer}>
        <View style={styles.item}>
          <Text style={[styles.itemText, isDarkMode && styles.darkText]}>Theme</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#16ff16' }}
            thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode} 
            style={styles.switch}
          />
        </View>
      </View>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 60,
  },
  setCon: {
    marginTop: 80,
    width: '90%',
  },
  sellectSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  setText: {
    fontSize: 24,
  },
  arrow: {
    color: '#95969D',
  },
  line: {
    height: 1,
    backgroundColor: '#AFB0B6',
    marginTop: 10,
  },
  setList: {
    marginBottom: 20,
  },
  themeContainer: {
    flexDirection: 'row',
  
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
    width: '90%',
  },
  switch: {
    transform: [{ scale: 1.5 }]
  }
});
