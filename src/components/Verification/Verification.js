import React from 'react'
import { Grid, Icon, Header as Title, Message } from 'semantic-ui-react'
import Form from './Form'

const Verification = ({ user, err, handleOnSubmit }) => (
  <Grid centered columns={1}>
    <Grid.Column computer={8} mobile={16} textAlign="center">
      <Icon
        name="mail outline"
        size="massive"
        color="grey"
      />
      <Title as="h4">Verify Your Account</Title>
      <Title as="h5">Check your email [{user.email}] to get the verification code, then put it below</Title>
      <Form onSubmit={handleOnSubmit} />
      {err && <Message color='red'>{err}</Message>}
    </Grid.Column>
  </Grid>
)

export default Verification
