import { ChangeEvent, useState } from 'react';

export default function useInput(): [string, (event: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return [value, handleChange];
}
