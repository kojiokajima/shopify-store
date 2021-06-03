import styled from 'styled-components'

const Container = styled.div`
  max-width: ${(props) => props.theme.maxWidth}px;
  width: 100%;
  padding: 0 20;
  margin: auto;
`

const TopNav = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.span`
  font-size: 22px;
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
`

const MenuItem = styled.li`
  list-style-type: none;
  margin: 0 10px;
  display: flex;
  align-items: center;
`