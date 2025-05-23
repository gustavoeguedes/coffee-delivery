import { Hero } from './components/Hero'
import {
  Badge,
  CoffeeCard,
  CoffeeList,
  Counter,
  HomeContainer,
  ShoppingCartButton,
} from './styles'
import tradicional from '../../assets/tradicional.png'
import { ShoppingCartIcon } from '@phosphor-icons/react'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <div>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          <CoffeeCard>
            <img src={tradicional} alt="" />

            <div>
              <Badge>Tradicional</Badge>
              <Badge>Comum</Badge>
            </div>

            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <div>
              <p>
                R$ <span>9,90</span>
              </p>
              <Counter>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </Counter>
              <ShoppingCartButton>
                <ShoppingCartIcon size={22} weight="fill" />
              </ShoppingCartButton>
            </div>
          </CoffeeCard>
        </CoffeeList>
      </div>
    </HomeContainer>
  )
}
