import React from 'react'
import { Card, Button, Container } from 'semantic-ui-react'
import Header from '../Header'

const Voting = () => (
  <React.Fragment>
    <Header />
    <Container style={{marginTop: 20}}>
      <Card.Group itemsPerRow={4}>
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
        <Card
          image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          extra={<Button icon="thumbs up" primary fluid content="Vote" />}
        />
      </Card.Group>
    </Container>
  </React.Fragment>
)

export default Voting
