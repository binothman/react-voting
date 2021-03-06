import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import Input from '../redux-form-fields/Input'
import { Header, Container, Button, Grid, Message, Dimmer, Loader } from 'semantic-ui-react'

import { required } from '../../functions'

const Login = ({ loading, err, handleSubmit }) => (
  <Container style={{marginTop: 50}}>
    <Grid centered columns={1}>
      <Grid.Column computer={8} mobile={16}>
        <Header as="h3">Login</Header>
        {loading &&
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>
        }
        {err && <Message color='red'>{err.message}</Message>}
        <Field
          name="email"
          component={Input}
          placeholder="Email"
          validate={[ required ]}
        />
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="Password"
          validate={[ required ]}
        />
        <Button
          primary
          type='submit'
          content="Login"
          onClick={handleSubmit}
        />
        <Button
          content="Signup"
          as={Link}
          to="/signup"
          basic
        />
      </Grid.Column>
    </Grid>
  </Container>
)

export default reduxForm({form: 'login'})(Login)
