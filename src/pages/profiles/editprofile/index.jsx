import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Divider, IconButton, Typography } from '@mui/material';
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

const handleHover =  {
    '&:hover': {
        bgcolor:'#e6eaeb'
    }
    
}

export default function EditProfile() {
  return (
    <Box sx={{ flexGrow: 1 , marginLeft:'20px' , marginRight:'20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box display="flex"
             justifyContent='space-between'
             alignItems='center'
              bgcolor='skyblue'
               padding='20px'
                borderRadius='5px'>
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
                <Stack marginTop='50px' paddingLeft='30px'>
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
            </CardContent>
          </Card>
        </Grid>
        </Grid>
    </Box>
  );
}
