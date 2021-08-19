import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import url from 'url'

function createReactotron () {
  const info = url.parse(NativeModules.SourceCode.scriptURL)

  const reactotronConfig = {
    name: 'React Native Playground',
    port: 9090,
    host: info.hostname
  }

  const reactotron = Reactotron.configure(reactotronConfig)
    .useReactNative()
    .use(reactotronRedux())
    .connect()

  // console.log = Reactotron.logImportant
  // console.warn = Reactotron.warn
  // console.error = Reactotron.error

  return reactotron
}

export default createReactotron
