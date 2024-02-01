import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: 'RampInputCheckbox'
  checked?: boolean
  onChange: (newValue: string) => void
  disabled?: boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
