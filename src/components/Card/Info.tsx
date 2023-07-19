import { Box, Typography } from '@mui/material'
import React from 'react'
import { StyledModal } from '../modal/style'
import CloseIcon from '@mui/icons-material/Close'
import { StyledButton } from './Card'
import { foodApi } from '../../Services/food'
interface Props {
  id: number
}

const Info: React.FC<Props> = ({ id }) => {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const { data } = foodApi.endpoints.getFoodById.useQuery(id)
  console.log(data)

  return (
    <Box>
      <StyledButton
        variant="contained"
        onClick={() => {
          setOpen(true)
        }}
      >
        Discription
      </StyledButton>
      <StyledModal
        open={open}
        onClose={handleClose}
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
          <CloseIcon onClick={handleClose} />
          <Typography variant="h6" color={'gray'} textAlign={'center'}>
            Add Food
          </Typography>
          <img src={data?.path} alt="" />
          <Typography variant="h6" color={'gray'} textAlign={'center'}>
            {data?.name}
          </Typography>
          <Typography variant="h6" color={'gray'} textAlign={'center'}>
            {data?.description}
          </Typography>
        </Box>
      </StyledModal>
    </Box>
  )
}

export default Info
