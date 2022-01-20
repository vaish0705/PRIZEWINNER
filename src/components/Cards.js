
import React from 'react'
import { Card,Button ,Col, Row} from 'react-bootstrap'
//import charity from './components/charity'


const Campaign = () => {
    return (
        <div>
          <Row>
          <Card  style={{ width: '18rem' }}>
  <Card.Img className="card-image" variant="top" src="charity.js" />
  <Card.Body>
    <Card.Title>NOBEL PRIZE</Card.Title>
    <Card.Text>
    Nobel Prizes are awarded in the fields of Physics, Chemistry, Physiology or Medicine, Literature, and Peace (Nobel characterized the Peace Prize as "to the person who has done the most or best to advance fellowship among nations, the abolition or reduction of standing armies, and the establishment and promotion of peace congresses").In 1968, Sveriges Riksbank (Sweden's central bank) funded the establishment of the Prize in Economic Sciences in Memory of Alfred Nobel, to also be administered by the Nobel Foundation
    </Card.Text>
    <Button variant="primary">click here</Button>
  </Card.Body>
</Card> 


<Card  style={{ width: '18rem' }}>
  <Card.Img className="card-image" variant="top" src="charity.js" />
  <Card.Body>
    <Card.Title>Nobel Prize in Chemistry</Card.Title>
    <Card.Text>
    The Nobel Prize in Chemistry is awarded annually by the Royal Swedish Academy of Sciences to scientists in the various fields of chemistry. It is one of the five Nobel Prizes established by the will of Alfred Nobel in 1895, awarded for outstanding contributions in chemistry, physics, literature, peace, and physiology or medicine. This award is administered by the Nobel Foundation, and awarded by the Royal Swedish Academy of Sciences on proposal of the Nobel Committee for Chemistry which consists of five members elected by the Academy. The award is presented in Stockholm at an annual ceremony on 10 December, the anniversary of Nobel's death.
    </Card.Text>
    <Button variant="primary">click here</Button>
  </Card.Body>
</Card>  


<Card  style={{ width: '18rem' }}>
  <Card.Img className="card-image" variant="top" src="charity.js" />
  <Card.Body>
    <Card.Title>Nobel Prize in Physics</Card.Title>
    <Card.Text>
    The Nobel Prize in Physics is a yearly award given by the Royal Swedish Academy of Sciences for those who have made the most outstanding contributions for mankind in the field of physics. It is one of the five Nobel Prizes established by the will of Alfred Nobel in 1895 and awarded since 1901, the others being the Nobel Prize in Chemistry, Nobel Prize in Literature, Nobel Peace Prize, and Nobel Prize in Physiology or Medicine. Physics is traditionally the first award presented in the Nobel Prize ceremony.
    </Card.Text>
    <Button variant="primary">click here</Button>
  </Card.Body>
</Card>  


<Card  style={{ width: '18rem' }}>
  <Card.Img className="card-image" variant="top" src="charity.js" />
  <Card.Body>
    <Card.Title>Nobel Prize in Peace</Card.Title>
    <Card.Text>
    The Nobel Prize in Physics is a yearly award given by the Royal Swedish Academy of Sciences for those who have made the most outstanding contributions for mankind in the field of physics. It is one of the five Nobel Prizes established by the will of Alfred Nobel in 1895 and awarded since 1901, the others being the Nobel Prize in Chemistry, Nobel Prize in Literature, Nobel Peace Prize, and Nobel Prize in Physiology or Medicine. Physics is traditionally the first award presented in the Nobel Prize ceremony.
    </Card.Text>
    <Button variant="primary">click here</Button>
  </Card.Body>
</Card>  

</Row>


        </div>
    )
}

export default Campaign
