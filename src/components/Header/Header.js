import React from 'react'
import { Sticky, Button, Image, Grid, Header as SemHeader } from 'semantic-ui-react'
import fire from '../../config/fire'

const logout = () => fire.auth().signOut()

class Header extends React.Component{
  state = { user: {} }
  componentDidMount(){
    setTimeout(this.setUser, 800)
  }

  setUser = () => {
    this.setState({
      user: fire.auth().currentUser,
    })
  }
  render(){
    const { user } = this.state
    return (
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
                {user.displayName}
              </SemHeader>
            </Grid.Column>
            <Grid.Column textAlign="right" width={8}>
              <Button
                content="Logout"
                to="/signup"
                basic
                color="red"
                size="mini"
                onClick={logout}
              />
            </Grid.Column>
          </Grid>
        </div>
      </Sticky>
    )
  }
}


export default Header
