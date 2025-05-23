import { Cart, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <Location>
          <MapPinIcon size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart cartItems={cartItems.length} to="/checkout">
          <ShoppingCartIcon size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
