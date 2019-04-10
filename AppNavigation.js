import { createStackNavigator, createAppContainer } from 'react-navigation';

import MeetupList from './src/components/MeetupList';
import MeetupDetail from './src/components/MeetupDetail';

const AppNavigation = createStackNavigator({
    Home: { screen: MeetupList },
    Detail: { screen: MeetupDetail }
});

const App = createAppContainer(AppNavigation)

export default App