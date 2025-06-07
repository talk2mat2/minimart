import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNav from './src/navigations/mainNav';
import {AppProvider} from './src/context/Appcontext';
import {ToastProvider} from 'react-native-toast-notifications';
import Toast from './src/components/toast';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <ToastProvider renderToast={toast => <Toast toast={toast} />}>
        <AppProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <MainNav />
        </AppProvider>
      </ToastProvider>
    </View>
  );
}

export default App;
