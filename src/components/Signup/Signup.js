import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Grid } from 'semantic-ui-react'

const Signup = () => (
  <Container style={{marginTop: 50}}>
    <Grid centered columns={1}>
      <Grid.Column computer={8} mobile={16}>
        <Form>
          <Form.Field>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Confirm Password' />
          </Form.Field>
          <Button primary type='submit'>Save</Button>
          <Button
            content="Login"
            as={Link}
            to="/login"
            basic
          />
        </Form>
      </Grid.Column>
    </Grid>
  </Container>
)

export default Signup
