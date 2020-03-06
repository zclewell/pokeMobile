
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import DexScreen from '../screens/DexScreen';
import MonDetailScreen from '../screens/MonDetailScreen';

const Stack = createStackNavigator({
    DexScreen: {
        screen: DexScreen
    },
    MonDetailScreen: {
        screen: MonDetailScreen
    }
})

const StackNavigator = createAppContainer(Stack)

export default StackNavigator