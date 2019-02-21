import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from 'semantic-ui-react'

import Input from '../redux-form-fields/Input'
import { required } from '../../functions'

const Form = ({ handleSubmit }) => (
  <Grid centered columns={1}>
    <Grid.Column computer={8} mobile={16}>
      <Field
        name="code"
        component={Input}
        placeholder="######"
        validate={[ required ]}
        textAlign="center"
      />
      <Button
        primary
        type='submit'
        content="Verify"
        onClick={handleSubmit}
        fluid
      />
    </Grid.Column>
  </Grid>
)

export default reduxForm({form: 'verification'})(Form)
