import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';
import './styles.css';


interface IFormsProps {
  largura?: number;
  info: string;
  label: string;
  placeholder: string;
  value?: string;
  nome?: string;
  handleChangeForm(event: ChangeEvent<HTMLInputElement>): void;
  id?: string
}

export default function FormPropsTextFields({ largura, info, label, placeholder, value, nome, handleChangeForm, id }: IFormsProps) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: largura ? `${largura}px` : 685 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id={id}
          label={label}
          placeholder={placeholder}
          multiline
          variant="filled"
          value={value}
          name={nome}
          onChange={handleChangeForm}
        />
      </div>

      <span>{info}</span>
    </Box>

  );
}