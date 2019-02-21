import React from 'react'
import { Card, Button, Container } from 'semantic-ui-react'
import Header from '../Header'

const Voting = ({ candidates }) => (
  <React.Fragment>
    <Header />
    {console.log('dd', candidates)}
    <Container style={{marginTop: 20}}>
      <Card.Group itemsPerRow={4}>
        {candidates.map(candidate => (
          <Card
            key={candidate.id}
            image={candidate.data().avatar}
            header={candidate.data().name}
            extra={<Button icon="thumbs up" primary fluid content="Vote" />}
          />
        ))}

      </Card.Group>
    </Container>
  </React.Fragment>
)

export default Voting
