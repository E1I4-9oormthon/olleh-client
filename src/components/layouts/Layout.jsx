import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { theme } from '../../styles/theme'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <Main>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <Footer />
    </Main>
  )
}

const Main = styled.div`
  background: ${theme.color.white};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.section`
  width: 100%;
  max-width: 500px;
  height: calc(100% - 145px);
`
