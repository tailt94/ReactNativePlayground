import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotronConfig = {
  name: 'React Native Playground'
}

const reactotron = Reactotron.configure(reactotronConfig)
  .useReactNative()
  .use(reactotronRedux())
  .connect()

export default reactotron
