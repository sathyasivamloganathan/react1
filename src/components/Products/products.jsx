import React from 'react'
import "../../styles/products.css";
import {Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import w320 from '../../assests/images/w320.png';
import w240 from '../../assests/images/w240.png';
import jh from '../../assests/images/jh.png'

const products = () => {

    const products=[
        {
            img:w320,
            name: 'W 320'
        },

        {
            img:w240,
            name: 'W 240'
        },

        {
            img:jh,
            name: 'JH'
        },
    ]
  return (
    <div>
      <Row>
            <Col lg='12' md='4' className='product'>
                {
                    products.map((item,index)=>(
                        <div lg='6' md='6' sm='12' key={index} className='product-img'>
                            <img src={item.img} alt='product-img'/>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </Col>
      </Row>
    </div>
  )
}

export default products