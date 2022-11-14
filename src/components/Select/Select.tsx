import React from "react"
import { useForm, UseFormRegister, useFormState } from "react-hook-form"
import { IFormValues } from "../../App"

import styles from "./Select.module.scss"

// React.forwardRefでrefオブジェクトを渡すこともできる
export const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label, }, ref) => {
  const { control } = useForm<IFormValues>();
  const { defaultValues } = useFormState({control
  })
  console.log("defaultValues",defaultValues)
  return (
    <label className={styles.label}>
      {label}
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
    </label>
  )
})
