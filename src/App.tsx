import React from 'react';
import './App.css';
import { Select } from './components/Select';
import { useForm, SubmitHandler, useFormState } from 'react-hook-form';

export interface IFormValues {
    Age: number;
}

function App() {
  const { register, handleSubmit,formState } = useForm<IFormValues>({
    defaultValues:{"Age":30}
  });
  // const { defaultValues } = useFormState()
  // const onSubmit: SubmitHandler<IFormValues> = (data) => {
  //   alert(JSON.stringify(data));
// };
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <Select label="Age" {...register('Age')} />
    // <input type="submit" />
// </form>
  );
}

export default App;
