import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from '@phosphor-icons/react'
import { Badge, ContainerInfo, HeroContainer, InfoCard } from './styles'
import coffee from '../../../../assets/coffee.svg'

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ContainerInfo>
          <InfoCard>
            <Badge color="yellowDark">
              <ShoppingCartIcon size={16} weight="fill" />
            </Badge>
            <span>Compra simples e segura</span>
          </InfoCard>
          <InfoCard>
            <Badge color="brown">
              <PackageIcon size={16} weight="fill" />
            </Badge>
            <span>Embalagem mantém o café intacto</span>
          </InfoCard>
          <InfoCard>
            <Badge color="yellow">
              <TimerIcon size={16} weight="fill" />
            </Badge>
            <span>Entrega rápida e rastreada</span>
          </InfoCard>
          <InfoCard>
            <Badge color="purple">
              <CoffeeIcon size={16} weight="fill" />
            </Badge>
            <span>O café chega fresquinho até você</span>
          </InfoCard>
        </ContainerInfo>
      </div>
      <div>
        <img src={coffee} alt="" />
      </div>
    </HeroContainer>
  )
}
