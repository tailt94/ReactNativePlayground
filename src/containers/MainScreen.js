import React from 'react'
import { Button, ScrollView, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Colors, } from 'react-native/Libraries/NewAppScreen'
import { GlobalActions } from '../redux/actions'
import LoginForm from './LoginForm'

const MainScreen: React.FC = React.memo((props) => {
  const value = useSelector(state => state.test.count)
  const dispatch = useDispatch()

  function onPress () {
    dispatch({ type: GlobalActions.INCREASE })
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={ styles.scrollView }>
      <Button title={ `${ value }` } onPress={ onPress }/>
      <LoginForm />
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default MainScreen
