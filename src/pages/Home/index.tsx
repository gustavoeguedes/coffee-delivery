import { Hero } from './components/Hero'
import {
  Badge,
  BadgeContainer,
  CoffeeCard,
  CoffeeList,
  Counter,
  HomeContainer,
  ShoppingCartButton,
} from './styles'
import { ShoppingCartIcon } from '@phosphor-icons/react'
import { coffesMock } from '../../mocks/coffeesMock'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <div>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffesMock.map((coffee) => (
            <CoffeeCard key={coffee.id}>
              <img src={coffee.image} alt="" />

              <BadgeContainer>
                {coffee.flags.map((flag) => (
                  <Badge key={flag}>{flag}</Badge>
                ))}
              </BadgeContainer>

              <h3>{coffee.name}</h3>
              <p>{coffee.description}</p>

              <footer>
                <div>
                  <p>
                    R$ <span>{(coffee.priceInCents / 100).toFixed(2)}</span>
                  </p>
                </div>
                <Counter>
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </Counter>
                <ShoppingCartButton>
                  <ShoppingCartIcon size={22} weight="fill" />
                </ShoppingCartButton>
              </footer>
            </CoffeeCard>
          ))}
        </CoffeeList>
      </div>
    </HomeContainer>
  )
}
