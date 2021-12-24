import React from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllFoods } from '../store/food'
import { FoodCard } from '../ui/FoodCard'

export const Food = () => {
  const dispatch = useDispatch()
  const sideEffects = () =>  {
    dispatch(fetchAllFoods())
  }
  React.useEffect(sideEffects, [])
  const foods = useSelector(state => state.foods ? state.foods : []);

  return (
    <>
      <section className="food">
        <Container>
          <Row>
            <Col>
              <h1>The Traditional Food in Moldova</h1>
              <p>Moldovan food is influenced by both the Romanian influence and the Russian influence, and clearly the
                closer you get to the borders with one or the other state and the more gastronomic affinities come to
                the surface. The national cuisine may surprise you with its simplicity and yet richness of flavour.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="foodCard">
        <Container>
          <Row md={8} className="justify-content-md-center">
            {foods.map(food => <FoodCard food={food} key={food.foodId}/>)}
          </Row>
        </Container>
      </section>
    </>
  )
};
