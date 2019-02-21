import React from 'react'
import { Card, Button, Container, Grid, Icon, Header as Title } from 'semantic-ui-react'
import Header from '../Header'

const Voting = ({ candiate, isVoted, candidates, handleVote }) => (
  <React.Fragment>
    <Header />
    <Container style={{marginTop: 20}}>
      {isVoted &&
        <Grid centered columns={1}>
          <Grid.Column computer={8} mobile={16} textAlign="center">
            <Icon
              name="podcast"
              size="massive"
              color="grey"
            />
            <Title as="h4">Thank you for voting</Title>
            <Title as="h5">Your candiate is {candiate.name}</Title>
          </Grid.Column>
        </Grid>
      }
      <Card.Group itemsPerRow={4}>
        {candidates.map(candidate => (
          <Card
            raised
            key={candidate.id}
            image={candidate.data().avatar}
            header={candidate.data().name}
            extra={
              <Button
                icon="thumbs up"
                primary
                fluid
                content="Vote"
                onClick={() => handleVote(candidate.id)}
              />}
          />
        ))}
      </Card.Group>
    </Container>
  </React.Fragment>
)

export default Voting
