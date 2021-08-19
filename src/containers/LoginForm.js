import React from 'react'
import { TextInput, Text, View, StyleSheet, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const TextField = props => {
  const { input: { value, onChange } } = props
  return (
    <TextInput value={value} onChangeText={(text) => onChange(text)}/>
  )
}

const LoginForm: React.FC = React.memo(props => {
  const { handleSubmit } = props
  function onSubmit (values) {
  }

  return (
    <View style={styles.container}>
      <Text>User name</Text>
      <Field name={'username'} component={TextField}/>
      <Text>Password</Text>
      <Field name={'password'} component={TextField}/>
      <TextInput />
      <Button
        onPress={handleSubmit(onSubmit)}
        title="SUBMIT"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  }
})

export default reduxForm({
  form: 'login',
  initialValues: {
    username: 'taile',
    password: '123456'
  }
})(LoginForm)
