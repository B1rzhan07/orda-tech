import { Box } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const notify = () => toast('Wow so easy!')
  return (
    <Box>
      <Navbar />
      <Banner />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <button onClick={notify}>Notify!</button>
    </Box>
  )
}

export default App
