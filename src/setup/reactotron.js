import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

function createReactotron () {
  const reactotronConfig = {
    name: 'React Native Playground'
  }

  const reactotron = Reactotron.configure(reactotronConfig)
    .useReactNative()
    .use(reactotronRedux())
    .connect()

  console.log = Reactotron.logImportant
  // console.warn = Reactotron.warn
  // console.error = Reactotron.error

  return reactotron
}

export default createReactotron
