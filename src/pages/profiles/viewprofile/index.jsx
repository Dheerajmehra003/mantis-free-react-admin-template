import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {UserOutlined, LockOutlined, SettingOutlined, UsergroupAddOutlined, FileTextOutlined, ProfileOutlined } from '@ant-design/icons'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Personal from './Personal';
import MyAccount from './MyAccount';
import Password from './Password';
import Role from './Role';
import Settings from './Settings';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box 
     display='flex'
     flexDirection='column'
     mb='20px'
     gap='10px'>
      <Box display='flex' gap='10px'>
      <Typography color='grey'>Home</Typography>
      <Typography color='grey'>/</Typography>
      <Typography fontWeight='700'>Account Profile</Typography>
      </Box>
     <Typography variant='h2'>
      Basic Account
     </Typography>
    </Box>
    <Card variant='outlined'>
     <CardContent>
       <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<UserOutlined />} iconPosition="start" label="Profile" {...a11yProps(0)}/>
      <Tab icon={<FileTextOutlined />} iconPosition="start" label="Personal" {...a11yProps(1)} />
      <Tab icon={<ProfileOutlined />} iconPosition="start" label="My Account" {...a11yProps(2)} />
      <Tab icon={<LockOutlined />} iconPosition="start" label="Change Password" {...a11yProps(3)} />
      <Tab icon={<UsergroupAddOutlined />} iconPosition="start" label="Role" {...a11yProps(4)} />
      <Tab icon={<SettingOutlined />} iconPosition="start" label="Settings" {...a11yProps(5)} />
    </Tabs>
    <Divider />
    <CustomTabPanel value={value} index={0}>
        <Profile />
      </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
        <Personal />
      </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
       <MyAccount />
      </CustomTabPanel>
    <CustomTabPanel value={value} index={3}>
        <Password />
      </CustomTabPanel>
    <CustomTabPanel value={value} index={4}>
        <Role />
      </CustomTabPanel>
    <CustomTabPanel value={value} index={5}>
       <Settings />
      </CustomTabPanel>
    </CardContent>
    </Card>
    </>
  );
}
