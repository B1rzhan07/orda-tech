import { Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import {
  StyledAppBar,
  StyledCartIcon,
  StyledInputBase,
  StyledSearchIcon,
  StyledToolbar,
  pages,
} from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const Navbar = () => {
  const [showItems, setShowItems] = React.useState(false)

  const handleMouseOver = () => {
    setShowItems(true)
  }

  const handleMouseLeave = () => {
    setShowItems(false)
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <StyledAppBar position="sticky" sx={{ boxShadow: 'none' }}>
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
          }}
        >
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {pages.map((page) => (
              <MenuItem
                onClick={handleClose}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                {page === 'Pages' && (
                  <div style={{ position: 'relative', display: 'flex' }}>
                    Pages
                    <span style={{ fontSize: '12px' }}>
                      {showItems ? '-' : '+'}
                    </span>
                    {showItems && (
                      <div
                        style={{
                          position: 'absolute',
                          right: '0',

                          top: '100%',
                          backgroundColor: 'white',
                        }}
                      >
                        <Button onClick={() => console.log('Clicked!')}>
                          go
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                {page !== 'Pages' && page}
              </MenuItem>
            ))}
          </Menu>
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontSize: '38px',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <img
            className="logo"
            src="/Logo.png"
            alt=""
            width="36px"
            height="53px"
          />
          Organick
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          {pages.map((page) => (
            <Typography
              key={page}
              variant="h6"
              sx={{ fontSize: '18px', alignContent: 'center', gap: '10px' }}
            >
              {page === 'Pages' && (
                <div
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  style={{ position: 'relative' }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '18px',
                      alignContent: 'center',
                      gap: '10px',
                    }}
                  >
                    Pages{' '}
                    <span style={{ fontSize: '12px' }}>
                      {showItems ? '-' : '+'}
                    </span>
                  </Typography>
                  {showItems && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        backgroundColor: 'white',
                      }}
                    >
                      <Button onClick={() => console.log('Clicked!')}>
                        go
                      </Button>
                    </div>
                  )}
                </div>
              )}
              {page !== 'Pages' && page}
            </Typography>
          ))}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <div style={{ position: 'relative' }}>
            <StyledInputBase type="text" placeholder="Search" />
            <div
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#7EB693',
                borderRadius: '50%',
                color: 'white',
                width: '56px',
                height: '56px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyledSearchIcon />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              gap: '10px',
              padding: '0.5rem 1rem',
              borderRadius: '36px',
              border: '0.5px solid gray',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '56px',
                height: '56px',
                backgroundColor: '#274C5B',
                borderRadius: '50%',
                color: 'white',
              }}
            >
              <StyledCartIcon />
            </div>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              Cart
              <span style={{ color: 'red' }}>(2)</span>
            </span>
          </div>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Navbar
