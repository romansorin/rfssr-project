import styled from 'styled-components'

import {
  Colors,
  Animations
} from 'app/styles'
import {
  Button
} from 'app/ui-kit'

export const HomePage = styled.div`
  animation: ${Animations.FadeIn} 1250ms forwards;
  animation-delay: 250ms;
  opacity: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.black};
  color: ${Colors.white};
`
export const TodoInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const TextFields = styled.div`
>div>div{margin-bottom: 10px}
`

export const AddUserButton = styled(Button)`
>div {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}
`

export const RemoveUserButton = styled(Button)`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: red;
  color: white;
`
