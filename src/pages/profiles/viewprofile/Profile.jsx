import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import profile from '../editprofile/13.png'
import {MailOutlined, PhoneOutlined, AimOutlined,  } from '@ant-design/icons'



export default function Profile() {

  const ProfileInfo = [
    {
      title:'anshan.dh81@gmail.com',
      icon:<MailOutlined />
    },
    {
      title:'(+1-876) 8654 239 581',
      icon:<PhoneOutlined />
    },
    {
      title:'New York',
      icon:<AimOutlined />
    },
    {
      title:'https---link',
      icon:<MailOutlined />
    },
  ]

  const skillsInfo = [
    {
      skill: 'Junior',
      percent: '30%',
      pixel: '35px'
    },
    {
      skill: 'UX Reasearcher',
      percent: '80%',
      pixel: '80px'
    },
    {
      skill: 'Wordpress',
      percent: '90%',
      pixel: '60px'
    },
    {
      skill: 'HTML',
      percent: '30%',
      pixel: '35px'
    },
    {
      skill: 'Graphic Design',
      percent: '95%',
      pixel: '100px'
    },
    {
      skill: 'Code Style',
      percent: '75%',
      pixel: '80px'
    },
  ]
  return (
    <Box p={0}>
      <Grid container spacing={2} padding='0px'>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
          <Card variant='outlined'>
            <CardContent>
            <Stack direction='row' justifyContent='flex-end'>
              <Box 
                 display='inline-flex'
                 bgcolor='blue'
                 px='10px' py='2px'
                 color='white'
                 borderRadius='4px'
                 justifyContent='center'
                 alignItems='center'
               >
                  <Typography>Pro</Typography>
                </Box>
                </Stack>
                <Stack alignItems='center'>
                <img src={profile} height='70px' width='70px' />
                <Typography variant='h5' align='center' marginTop="20px">
                    Anshan H.
                    <Typography variant='body2' color='grey'>
                     Project Manager
                    </Typography>
                </Typography>
                </Stack>
                <Divider sx={{mt:'20px'}} />
                <Stack direction='row' justifyContent={{md:'space-between'}} 
                spacing={1} marginTop="20px" mb="20px" px='20px'>
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
                <Divider sx={{mb:'20px'}}/>
                {
                  ProfileInfo.map((item, index)=>{
                    return (
                      <Box 
                      key={index}
                      display='flex'
                      justifyContent='space-between'
                      px='10px'
                      py='4px'
                      alignItems='center'>
                       {item.icon}
                       <Typography>{item.title}</Typography>
                     </Box>
                    )
                  })
                }
            </CardContent>
          </Card>
          <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
                Skills
                </Typography>
                <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
                {
                  skillsInfo.map((item, index) => {
                    return (
                      <Box key={index} display='flex' justifyContent='space-between' pt='10px' pl='10px'>
                      <Typography width="100%" color='grey'>{item.skill}</Typography>
                      <Box display='flex' alignItems='center' gap='6px' >
                        <Box height='10px' width={{xs:'60px',md:'90px', sm:'70'}}>
                        <Box height='5px' width='100%' borderRadius='5px' bgcolor='#a2d7fa'/>
                        {/* <Box position='absolute' bgcolor='blue' sx={{width:`${item.pixel}`}} height='5px' borderRadius='5px' /> */}
                        </Box>
                        <Typography>{item.percent}</Typography>
                      </Box>
                    </Box>
                    )
                  })
                }
            </CardContent>
          </Card>

          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
        <Card variant='outlined'>
            <CardContent>
            <Typography fontWeight="600" fontSize="15px" paddingLeft="10px">
                About me
                </Typography>
                <Divider sx={{marginBottom:"10px" , marginTop:"20px", }} />
                <Typography color='grey' pl={1} pr={2}>Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website,
                   I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.</Typography>

            </CardContent>
          </Card>
        <Card variant='outlined'>
            <CardContent>
            <Typography>hello</Typography>
            </CardContent>
          </Card>
        <Card variant='outlined'>
            <CardContent>
          <Typography>hello</Typography>
            </CardContent>
          </Card>
        <Card variant='outlined'>
            <CardContent>
          <Typography>hello</Typography>
            </CardContent>
          </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
