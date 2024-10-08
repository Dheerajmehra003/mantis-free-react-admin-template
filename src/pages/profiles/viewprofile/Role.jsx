import { Box, Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Role = () => {
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
          <Typography fontWeight='500'>members available in your plan</Typography>
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
          </CardContent>
        </Card>
      </Grid>
     </Grid>
    </Box>
    </>
  )
}

export default Role