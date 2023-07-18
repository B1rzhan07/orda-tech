/* eslint-disable @typescript-eslint/no-misused-promises */
import { Add, DateRange } from '@mui/icons-material'
import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { StyledModal } from './style'
import React from 'react'
import { foodApi } from '../../Services/food'

const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return { value, onChange }
}

const ModalComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const name = useInput('')
  const type = useInput('')
  const path = useInput('')
  const newPrice = useInput('')
  const oldPrice = useInput('')
  const [createFood] = foodApi.endpoints.createFood.useMutation()
  const handleCreate = async () => {
    try {
      const result = await createFood({
        name: name.value,
        type: type.value,
        path: path.value,
        newPrice: Number(newPrice.value),
        oldPrice: Number(oldPrice.value),
      })
      console.log(result)
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Fab
        onClick={() => {
          setOpen(true)
        }}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
        color="primary"
        aria-label="add"
      >
        <Add />
      </Fab>
      <StyledModal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={500}
          height={600}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color={'gray'} textAlign={'center'}>
            Add Food
          </Typography>

          <Stack spacing={2} sx={{ p: 4, zIndex: 1 }}>
            <TextField
              {...newPrice}
              id="outlined-basic"
              label="New Price"
              variant="outlined"
            />
            <TextField
              {...oldPrice}
              id="outlined-basic"
              label="Old Price"
              variant="outlined"
            />
            <TextField
              {...name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              {...type}
              id="outlined-basic"
              label="Type"
              variant="outlined"
            />
            <TextField
              {...path}
              id="outlined-basic"
              label="Path"
              variant="outlined"
            />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleCreate}>Submit</Button>
            <Button
              sx={{
                width: '100px',
              }}
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default ModalComponent
