/**
 * @format
 */

import {} from 'react-native'
import Navigator from './src/Navigator'
import {name as appName} from './app.json'

registerComponent(appName, () => Navigator)
