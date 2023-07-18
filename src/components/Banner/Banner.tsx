import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import CardComponent from '../Card/Card'
import { IFood, useGetFoodQuery } from '../../Services/food'
import ModalComponent from '../modal/ModalComponent'
const Banner: React.FC = () => {
  const [limit, setLimit] = React.useState(8)
  const { data } = useGetFoodQuery('')
  const handleLoadMore = () => {
    setLimit((prevState) => prevState + 8)
  }

  return (
    <Box>
      <img
        style={{
          position: 'absolute',
        }}
        src="/background.svg"
        alt=""
        width="100%"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Stack spacing={2} sx={{ p: 4, zIndex: 1 }}>
          <Typography
            sx={{
              width: '530px',
            }}
          >
            <p>100% Natural Food</p>
            <h1
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              Choose the best healthier way of life
            </h1>
            <Button variant="contained">Explore Now</Button>
          </Typography>
        </Stack>
        <img
          style={{
            background: 'transparent',
            backgroundColor: '#E3F1E9',
          }}
          src="/Photo.png"
          alt=""
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 'auto',
          gap: '36px',
          marginTop: '100px',
        }}
      >
        <div
          style={{
            position: 'relative',
          }}
        >
          <img src="1.png" alt="" />
        </div>
        <div>
          <img src="2.png" alt="" />
        </div>
      </div>
      <h1
        style={{
          textAlign: 'center',
          color: '#7EB693',
          fontFamily: 'Yellowtail',
        }}
      >
        Categories
      </h1>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Our Products
      </h1>
      <Box
        sx={{
          display: 'flex',
          margin: 'auto',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '36px',
          flexWrap: 'wrap',
        }}
      >
        {data &&
          data.map((item: IFood) => (
            <CardComponent
              key={item.id}
              name={item.name}
              path={item.path}
              newPrice={item.newPrice}
              type={item.type}
              id={item.id}
              oldPrice={0}
            />
          ))}
      </Box>
      {limit == 16 ? (
        <Button
          onClick={() => setLimit(8)}
          size="large"
          variant="contained"
          sx={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <span>Hide All</span>
        </Button>
      ) : (
        <Button
          onClick={handleLoadMore}
          size="large"
          variant="contained"
          sx={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <span>Load More</span>
        </Button>
      )}
      <ModalComponent />
    </Box>
  )
}

export default Banner
