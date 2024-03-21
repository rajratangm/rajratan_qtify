import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { backdropClasses } from '@mui/material';
import styles from ''

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export default function Filters({filters, selectedFilterIndex,setSelectedFitlerIndex}) {

  const handleChange = (event, newValue) => {
    setSelectedFitlerIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
        <Tabs 
        value={selectedFilterIndex} onChange={handleChange} 
        aria-label="basic tabs example"
        TabIndicatorProps={style:{
            backgroundColor: 'var(--color-primart)'
        }}
        >
            {filters.map((ele,idx)=>(
                Tab className ={styles} label={ele.label} {...a11yProps(0)} />
            ))}
          
          
        </Tabs>

        {filters.map((ele,idx)=>(
            <TabPanel value={ele.label} index={idx} />
        )
        }
    </div>
        

  );
}