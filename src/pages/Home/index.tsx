import { Hero } from './components/Hero'
import { CoffeeList, HomeContainer } from './styles'

import { coffesMock } from '../../mocks/coffeesMock'
import { Card } from './components/Card'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <div>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffesMock.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </div>
    </HomeContainer>
  )
}
