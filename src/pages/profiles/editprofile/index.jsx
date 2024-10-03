import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Divider, IconButton, TextField, Typography } from '@mui/material';
import { bgcolor, Stack } from '@mui/system';
import {MoreOutlined} from '@ant-design/icons';
import {FacebookFilled} from '@ant-design/icons';
import {TwitterSquareFilled} from '@ant-design/icons';
import {LinkedinFilled} from '@ant-design/icons';
import {CreditCardOutlined} from '@ant-design/icons';
import {LockOutlined} from '@ant-design/icons';
import {SettingOutlined} from '@ant-design/icons';
import profile from './13.png'
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

    const profileItem = [
        {
            title:'Personal Information',
            icon: <CreditCardOutlined />
        },
        {
            title:'Payment',
            icon: <CreditCardOutlined />
        },
        {
            title:'Change Password',
            icon: <LockOutlined />
        },
        {
            title:'Settings',
            icon: <SettingOutlined />
        },
    ]

  return (
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box display="flex"
             justifyContent='space-between'
             alignItems='center'
               padding='20px'
               bgcolor='skyblue'
                borderRadius='5px'
                flexWrap='wrap'
                gap={3}
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

                <Box 
                display='inline-flex'
                bgcolor='blue'
                 px='16px' py='7px'
                color='white'
                 borderRadius='4px'
                 justifyContent='center'
                 alignItems='center'
                  width={{xs:'100%', sm:'150px'}} >
                    <Typography>Edit your Profile</Typography>
                </Box>
            </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
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
                <Stack direction='row' justifyContent={{xs:'space-between',sm:'center', md:'center'}} 
                spacing={1} marginTop="50px" px='20px'>
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
                    {
                        profileItem.map((item, index)=>{
                            return (
                            <Box key={index} display='flex' alignItems='center'  columnGap="10px" sx={handleHover}  padding="10px 10px 10px 10px">
                                <IconButton>
                               {item.icon}
                                </IconButton>
                            <Typography >
                                {item.title}
                            </Typography>
                            </Box>
                            )
                        })
                    }
                </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9}>
        <Card variant='outlined'>
            <CardContent>
            <form>
                <Typography fontWeight="600" fontSize="20px" paddingLeft="20px">
                Personal Information
                </Typography>
                <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
                <Stack direction={{xs:'column', sm:'column', md:'row'}} gap='30px' marginBottom='25px'>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                    <Typography color='grey'>First Name</Typography>
                    <TextField fullWidth />
                </Box>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Last Name</Typography>
                    <TextField fullWidth />
                </Box>
                </Stack>
                <Stack direction={{xs:'column', sm:'column', md:'row'}} gap='30px' marginBottom='25px'>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                    <Typography color='grey'>Email Address</Typography>
                    <TextField fullWidth />
                </Box>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Date of Birth(+18)</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
                </LocalizationProvider>
                </Box>
                </Stack>
                <Stack direction={{xs:'column', sm:'column', md:'row'}} gap='30px' marginBottom='25px'>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Phone Number</Typography>
                <ReactPhoneInput
                    component={TextField}
                />
                </Box>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Designation</Typography>
                <TextField fullWidth />
                </Box>
                </Stack>
                <Typography fontWeight="600" fontSize="20px" paddingLeft="20px">
                Address
                </Typography>
                <Divider sx={{marginBottom:"10px" , marginTop:"10px"}} />
                <Stack direction={{xs:'column', sm:'column', md:'row'}} gap='30px' marginBottom='25px'>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                    <Typography color='grey'>Address 01</Typography>
                    <TextField fullWidth
                    multiline
                    rows={3} />
                </Box>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                <Typography color='grey'>Address 02</Typography>
                    <TextField fullWidth
                    multiline
                    rows={3} />
                </Box>
                </Stack>
                <Stack direction={{xs:'column', sm:'column', md:'row'}} gap='30px' marginBottom='25px'>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
                    <Typography color='grey'>Country</Typography>
                    <Country/>
                </Box>
                <Box display='flex' width='100%' flexDirection='column' rowGap='10px'>
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
                <Box display='flex' justifyContent='flex-end'  gap='20px' mt='20px'>
                    <Button variant='outlined'>Cancel</Button>
                    <Button type='submit' variant='contained'>Save</Button>
                </Box>
            </form>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
    </Box>
  );
}

export default EditProfile;
