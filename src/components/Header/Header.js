import React from 'react'
import { Sticky, Button, Image, Grid, Header as SemHeader } from 'semantic-ui-react'

const Header = () => (
  <Sticky>
    <div className="app-header">
      <Grid>
        <Grid.Column width={8}>
          <SemHeader as='h4'>
            <Image
              circular
              size="tiny"
              src='https://react.semantic-ui.com/images/avatar/large/patrick.png'
            />
            Patrick
          </SemHeader>
        </Grid.Column>
        <Grid.Column textAlign="right" width={8}>
          <Button
            content="Logout"
            to="/signup"
            basic
            color="red"
            size="mini"
          />
        </Grid.Column>
      </Grid>
    </div>
  </Sticky>
)

export default Header
