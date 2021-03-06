import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList202178Navigator from '../features/ArticleList202178/navigator';
import ArticleList202177Navigator from '../features/ArticleList202177/navigator';
import ArticleList202176Navigator from '../features/ArticleList202176/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList202178: { screen: ArticleList202178Navigator },
ArticleList202177: { screen: ArticleList202177Navigator },
ArticleList202176: { screen: ArticleList202176Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
