import { Avatar, Box, Button,
  Card, CardContent, Divider,
  Grid, IconButton, List, ListItem, 
  Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import User1 from '../../../assets/images/users/avatar-1.png'
import User2 from '../../../assets/images/users/avatar-2.png'
import { EllipsisOutlined } from '@ant-design/icons'

const Role = () => {
  const [visible, setvisible] = useState(false)
  const [state, setState] = useState(false)

  const handleState = () => {
    setState(!state)
  }
  const handleVisible = () => {
    setvisible(!visible)
  }
  
  const handleHover =  {
    '&:hover': {
        bgcolor:'#e6eaeb'
    }} 

  return (
    <>
    <Box>
     <Grid container>
      <Grid xs={12}>
        <Card variant='outlined'>
          <CardContent>
         <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
            Invite Team Members
         </Typography>
         <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
         <Box display='flex' alignItems='flex-end' columnGap='5px' pt='10px'>
         <Typography fontWeight='600' fontSize='17px'>
          5/10 
          </Typography>
          <Typography fontWeight='500c'>members available in your plan</Typography>
         </Box>
         <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
         <form>
         <Grid container>
          <Box width='100%' display='flex' columnGap={4} alignItems='flex-end'>
         <Grid md={6} xs={12} paddingTop={2} paddingLeft={2}>
            <Typography color='grey' mb={1}>Email Address</Typography>
            <TextField fullWidth placeholder='Enter your email address'  id="email"/>
          </Grid>   
          <Button variant='contained' style={{marginBottom:'4px'}}>Send</Button>     
          </Box>
          </Grid>
         </form>
         <TableContainer sx={{mt:'30px'}}>
          <Table>
            <TableHead sx={{bgcolor:'#edf0ef'}}>
              <TableRow>
                <TableCell>MEMBER</TableCell>
                <TableCell>ROLE</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box display='flex' columnGap='10px'>
                  <Avatar src={User1}/>
                    <Typography fontWeight='700'>
                      Frozen Tek
                      <Typography variant='body2' color='grey'>
                       owner@company.com
                      </Typography>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                 <Box display='inline-block' borderRadius='5px'  bgcolor='#257bf5' px='7px' py='3px'>
                  <Typography color='white'>Owner</Typography>
                 </Box>
                </TableCell>
                <TableCell>
                 <Box display='inline-block' borderRadius='5px'  bgcolor='#35cc44' px='7px' py='3px'>
                  <Typography color='white'>Joined</Typography>
                 </Box>
                </TableCell>
                <TableCell>
                    <IconButton  onClick={ handleVisible}>
                    <EllipsisOutlined />
                    </IconButton>
                    {
                      visible ? 
                    <Box position='absolute' border='1px solid black' right='180px' bgcolor='white' zIndex={10} >
                    <List >
                      <ListItem sx={handleHover}>Edit</ListItem>
                      <ListItem sx={handleHover}>Delete</ListItem>
                    </List>
                    </Box> : " "
                    }
                    
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box display='flex' columnGap='10px'>
                  <Avatar src={User2}/>
                    <Typography fontWeight='700'>
                      Eclair Dues
                      <Typography variant='body2' color='grey'>
                       manager@company.com
                      </Typography>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                 <Box display='inline-block' borderRadius='5px'  bgcolor='#bcf7db' px='7px' py='3px'>
                  <Typography color='green'>Manager</Typography>
                 </Box>
                </TableCell>
                <TableCell>
                 <Box display='inline-block' borderRadius='5px' border='1px solid red'  px='7px' py='3px' marginRight={1}>
                  <Typography color='red'>Resend</Typography>
                 </Box>             
                 <Box display='inline-block' borderRadius='5px'  border='1px solid blue' px='7px' py='3px'>
                  <Typography color='blue'>Invited</Typography>
                 </Box>             
                </TableCell>
                <TableCell>
                    <IconButton  onClick={handleState}>
                    <EllipsisOutlined />
                    </IconButton>
                    {
                      state ? 
                    <Box position='absolute' border='1px solid black' right='180px' bgcolor='white' zIndex={10} >
                    <List >
                      <ListItem sx={handleHover}>Edit</ListItem>
                      <ListItem sx={handleHover}>Delete</ListItem>
                    </List>
                    </Box> : " "
                    }
                    
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
         </TableContainer>
         <Box display='flex' justifyContent='flex-end' columnGap={2} marginTop={2}>
           <Button variant='outlined'>Cancel</Button>
            <Button variant='contained'>Update Profile</Button>
        </Box>
          </CardContent>
        </Card>
      </Grid>
     </Grid>
    </Box>
    </>
  )
}

export default Role