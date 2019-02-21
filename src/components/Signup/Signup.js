import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import Input from '../redux-form-fields/Input'
import { Container, Button, Grid, Dimmer, Loader, Message } from 'semantic-ui-react'
import { required } from '../../functions'


const Signup = ({ loading, err, handleSubmit }) => (
  <Container style={{marginTop: 50}}>
    <Grid centered columns={1}>
      <Grid.Column computer={8} mobile={16}>
        {loading &&
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>
        }
        {err && <Message color='red'>{err.message}</Message>}
        <Field
          name="fullname"
          component={Input}
          placeholder="Name"
          validate={[ required ]}
        />
        <Field
          name="email"
          component={Input}
          placeholder="Email"
          validate={[ required ]}
        />
        <Field
          name="password"
          component={Input}
          placeholder="Password"
          type="password"
          validate={[ required ]}
        />
        <Field
          name="re_password"
          component={Input}
          type="password"
          placeholder="Confirm Password"
          validate={[ required ]}
        />
        <Button
          primary
          type='submit'
          content="Save"
          onClick={handleSubmit}
        />
        <Button
          content="Login"
          as={Link}
          to="/login"
          basic
        />
      </Grid.Column>
    </Grid>
  </Container>
)

export default reduxForm({form: 'signup'})(Signup)
