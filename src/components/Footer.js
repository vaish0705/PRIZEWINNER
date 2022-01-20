import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Footer.css' 
export const Footer = () => {
    return (
        <footer>
            <Container>
            < Row className="text-center py-3"> 
                 <ul className="Footer-list" >
                 <li > < i class="fas fa-copyright" > bikayi </i></li>
                            <li className="list-head" > CONTACT US AT </li>
                            <li > <i i class="fas fa-mobile" ></i> +0001119995</li >
                            <li> <i class="far fa-envelope" > </i> help@bikayi.com</li >
                           
                       
</ul>         
                         
          </Row>
         

          </Container> 
        </footer>
    )
}

export default Footer
