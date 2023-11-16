import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import StudyScreen from './screens/StudyScreen';
import QuizScreen from './screens/QuizScreen';

const StackNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Study: StudyScreen,
      Quiz: QuizScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;
