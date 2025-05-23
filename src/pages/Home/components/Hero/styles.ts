import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  align-items: center;
  padding: 5.875rem 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
  }
`

export const ContainerInfo = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  flex: 1;
`

export const InfoCard = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: start;
`

const BADGE_COLORS = {
  yellowDark: 'yellow-dark',
  brown: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface BadgeProps {
  color: keyof typeof BADGE_COLORS
}

export const Badge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 9999px;
  background: ${(props) => props.theme[BADGE_COLORS[props.color]]};
  color: ${(props) => props.theme.background};
`
