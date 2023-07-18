import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Typography,
  styled,
} from '@mui/material'
import React from 'react'
import { IFood, foodApi } from '../../Services/food'

const StyledButton = styled(Button)({
  backgroundColor: '#274C5B',
  color: 'white',
  padding: '5px 12px 6px 12px',
  margin: '0.5rem',
  borderRadius: '8px',
  fontSize: '0.8rem',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: '#274C5B',
  },
  marginBottom: '1rem',
  marginTop: '1rem',
})

const CardComponent: React.FC<IFood> = ({ id, name, newPrice, path, type }) => {
  const [deleteFood] = foodApi.endpoints.deleteFood.useMutation()

  const handleDelete = async () => {
    try {
      const result = await deleteFood(id)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const [value, setValue] = React.useState<number | null>(5)
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#F9F8F8' }}>
      <StyledButton variant="contained">{type}</StyledButton>
      <StyledButton
        onClick={() => {
          void handleDelete()
        }}
        variant="contained"
      >
        Delete
      </StyledButton>
      <StyledButton variant="contained">Update</StyledButton>
      <CardMedia component="img" src={path} alt="Paella dish" />
      <CardContent>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
          variant="body2"
          color="text.secondary"
        >
          {name}
        </Typography>
        <Divider />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <span
              style={{
                textDecoration: 'line-through',
              }}
            >
              $20.00
            </span>{' '}
            ${newPrice}
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(_e, newValue) => {
              setValue(newValue)
            }}
            size="small"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardComponent
