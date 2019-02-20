import React from 'react'
import { Container, Form, Button, Grid } from 'semantic-ui-react'

const Login = () => (
  <Container style={{marginTop: 50}}>
    <Grid centered columns={1}>
      <Grid.Column computer={8} mobile={16}>
        <Form>
          <Form.Field>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Password' />
          </Form.Field>
          <Button primary type='submit'>Login</Button>
          <Button basic type='submit'>Signup</Button>
        </Form>
      </Grid.Column>
    </Grid>
  </Container>
)

export default Login
