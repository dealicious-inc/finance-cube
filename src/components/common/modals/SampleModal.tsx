import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});

const SampleModal = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit((formValues) => {
            alert(`Submit with { name: ${formValues.name} }`);
            handleClose();
          }),
        }}
      >
        <DialogTitle>샘플 모달</DialogTitle>
        <DialogContent dividers>
          <Typography>예시를 위한 샘플 모달 입니다.</Typography>
          <TextField
            {...register('name')}
            label="이름"
            size="small"
            error={!!formState.errors?.name?.message}
            helperText={formState.errors?.name?.message}
            style={{ marginTop: '16px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" variant="contained">
            확인
          </Button>
          <Button type="button" onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SampleModal;
