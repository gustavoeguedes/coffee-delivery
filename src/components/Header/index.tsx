import { Cart, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <Location>
          <MapPinIcon size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart cartItems={1} to="/checkout">
          <ShoppingCartIcon size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
