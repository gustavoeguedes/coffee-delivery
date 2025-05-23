import tradicional from '../assets/tradicional.png'
import americano from '../assets/americano.png'
import cremoso from '../assets/cremoso.png'
import gelado from '../assets/gelado.png'
import cafeComLeite from '../assets/cafe-com-leite.png'
import latte from '../assets/latte.png'
import capuccino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mocaccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import havaiano from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export const coffesMock = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    flags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 990,
    image: tradicional,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    flags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 990,
    image: americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    flags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 990,
    image: cremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    flags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 990,
    image: gelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    flags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 990,
    image: cafeComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    flags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceInCents: 990,
    image: latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    flags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 990,
    image: capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    flags: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    priceInCents: 990,
    image: macchiato,
  },
  {
    id: 9,
    name: 'Mocaccino',
    flags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, leite e espuma',
    priceInCents: 990,
    image: mocaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    flags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 990,
    image: chocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    flags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 990,
    image: cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    flags: ['Especial'],
    description: 'Café típico do Hawaii com sabor frutado e notas de baunilha',
    priceInCents: 990,
    image: havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    flags: ['Especial'],
    description:
      'Bebida preparada com grãos de café árabe e especiarias, como canela',
    priceInCents: 990,
    image: arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    flags: ['Especial', 'Alcoólico'],
    description:
      'Café expresso com creme de leite, uísque irlandês, açúcar e chantilly',
    priceInCents: 990,
    image: irlandes,
  },
]
