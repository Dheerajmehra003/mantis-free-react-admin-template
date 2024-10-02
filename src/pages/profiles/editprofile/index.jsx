import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Divider, IconButton, TextField, Typography } from '@mui/material';
import { bgcolor, Stack } from '@mui/system';
import {MoreOutlined} from '@ant-design/icons';
import {FacebookFilled} from '@ant-design/icons';
import {TwitterSquareFilled} from '@ant-design/icons';
import {LinkedinFilled} from '@ant-design/icons';
import {UserOutlined} from '@ant-design/icons';
import {CreditCardOutlined} from '@ant-design/icons';
import {LockOutlined} from '@ant-design/icons';
import {SettingOutlined} from '@ant-design/icons';
import profile from './13.png'
import back from './back.jpeg'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ReactPhoneInput from 'react-phone-input-material-ui';
import Country from './Country';



const handleHover =  {
    '&:hover': {
        bgcolor:'#e6eaeb'
    }
    
}
  

    function EditProfile() {

  return (
    <Box sx={{ flexGrow: 1 , marginLeft:'20px' , marginRight:'20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box display="flex"
             justifyContent='space-between'
             alignItems='center'
               padding='20px'
               bgcolor='skyblue'
                borderRadius='5px'
                >
                <Box display='flex' gap={5} alignItems='center'>
                    <Box   sx={{
                    background: `radial-gradient(${"skyblue"} 55%, transparent 56%),
                    conic-gradient(transparent 0deg 30deg, ${'white'} 200deg 360deg),
                    ${'blue'}`,
                     borderRadius: "50%",
                     width: `80px`,
                     height: `80px`,
                    }}>
                        <Typography position='relative' top='25px' left='20px' variant='h4'>
                            50%
                        </Typography>
                    </Box>
                    <Box>
                <Typography variant='h4'>
                        Edit Your Profile
                        <Typography variant='body2' color="grey">
                            Complete your profile to unlock all features
                        </Typography>
                        </Typography>
                </Box>
                </Box>

                <Button  variant='contained'>Edit Your Profile</Button>
            </Box>
        </Grid>
        <Grid item xs={3}>
          <Card variant='outlined'>
            <CardContent>
                <Stack direction='row' justifyContent='flex-end'>
                <IconButton >
                <MoreOutlined />
                </IconButton>
                </Stack>
                <Stack alignItems='center'>
                <img src={profile} height='100px' width='100px' />
                <Typography variant='h5' align='center' marginTop="20px">
                    Stebin Ben
                    <Typography variant='body2' color='grey'>
                        Full Stack Developer
                    </Typography>
                </Typography>
                <Box display='flex' columnGap='30px' marginTop="20px">
                    {/* <IconButton> */}
                    <TwitterSquareFilled style={{color:'#0bb6e6', fontSize:'20px'}} />
                    {/* </IconButton> */}
                    {/* <IconButton> */}
                    <FacebookFilled style={{color:'#325ca8', fontSize:'20px'}} />   
                    {/* </IconButton> */}
                    {/* <IconButton> */}
                    <LinkedinFilled style={{color:'#325ca8', fontSize:'20px'}} />
                    {/* </IconButton> */}
                </Box>
                </Stack>
                <Stack direction='row' justifyContent='center' spacing={1} marginTop="50px">
                <Typography variant='h5' align='center' marginTop="20px">
                    86
                    <Typography  color='grey'>
                        Post
                    </Typography>
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography variant='h5' align='center' marginTop="20px">
                    40
                    <Typography  color='grey'>
                    Project
                    </Typography>
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography variant='h5' align='center' marginTop="20px">
                    4.5k
                    <Typography  color='grey'>
                        Members
                    </Typography>
                </Typography>
                </Stack>
                <Stack marginTop='50px' paddingLeft='10px'>
                    <Box display='flex' alignItems='center'  columnGap="10px" sx={handleHover}  padding="10px 10px 10px 10px">
                        <IconButton>
                    <UserOutlined />
                        </IconButton>
                    <Typography >
                        Personal <br />  Information
                    </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' columnGap="10px"  sx={handleHover}  padding="10px 10px 10px 10px" >
                        <IconButton>
                        <CreditCardOutlined />
                        </IconButton>
                    <Typography >
                        Payment
                    </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' columnGap="10px"  sx={handleHover}  padding="10px 10px 10px 10px" >
                        <IconButton>
                        <LockOutlined />
                        </IconButton>
                    <Typography>
                        Change Password
                    </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' columnGap="10px"  sx={handleHover}  padding="10px 10px 10px 10px" >
                        <IconButton>
                        <SettingOutlined />
                        </IconButton>
                    <Typography>
                        Settings
                    </Typography>
                    </Box>
                </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
        <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="20px" paddingLeft="20px">
              Personal Information
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction='row' columnGap='30px' marginBottom='25px'>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>First Name</Typography>
                <TextField fullWidth />
             </Box>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
             <Typography color='grey'>Last Name</Typography>
                <TextField fullWidth />
             </Box>
            </Stack>
            <Stack direction='row' columnGap='30px' marginBottom='25px'>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Email Address</Typography>
                <TextField fullWidth />
             </Box>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
             <Typography color='grey'>Date of Birth(+18)</Typography>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DatePicker />
             </LocalizationProvider>
             </Box>
            </Stack>
            <Stack direction='row' columnGap='30px' marginBottom='25px'>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
             <Typography color='grey'>Phone Number</Typography>
             <ReactPhoneInput
                component={TextField}
            />
             </Box>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
             <Typography color='grey'>Designation</Typography>
             <TextField fullWidth />
             </Box>
            </Stack>
            <Typography fontWeight="600" fontSize="20px" paddingLeft="20px">
              Address
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <Stack direction='row' columnGap='30px' marginBottom='25px'>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Address 01</Typography>
                <TextField fullWidth
                multiline
                rows={3} />
             </Box>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
             <Typography color='grey'>Address 02</Typography>
                <TextField fullWidth
                multiline
                rows={3} />
             </Box>
            </Stack>
            <Stack direction='row' columnGap='30px' marginBottom='25px'>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Country</Typography>
                <Country/>
             </Box>
             <Box display='flex' width='47%' flexDirection='column' rowGap='10px'>
             <Typography color='grey'>State</Typography>
                <TextField fullWidth />
             </Box>
            </Stack>
            <Typography fontWeight="600" fontSize="20px" paddingLeft="20px">
              Note
            </Typography>
            <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
            <TextField fullWidth
            multiline
            rows={5}
            />
            <Box display='flex' justifyContent='flex-end' columnGap='20px' mt='20px'>
                <Button variant='outlined'>Cancel</Button>
                <Button variant='contained'>Save</Button>
            </Box>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
    </Box>
  );
}

export default EditProfile;
