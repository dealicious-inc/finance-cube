import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface SearchFilterProps {
  gridRef: AgGridReact;
}

const SearchFilter: FC<SearchFilterProps> = ({ gridRef }) => {
  const { register, handleSubmit } = useForm();
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'flex',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
      onSubmit={handleSubmit((formValues) => {
        gridRef.api.setQuickFilter(formValues['quick-search']);
      })}
    >
      <FormControl variant="standard" sx={{ flexGrow: 1 }}>
        <TextField placeholder="빠른검색" {...register('quick-search')} />
      </FormControl>
      <Button type="submit" size="small" variant="contained">
        검색
      </Button>
    </Box>
  );
};

export default SearchFilter;
