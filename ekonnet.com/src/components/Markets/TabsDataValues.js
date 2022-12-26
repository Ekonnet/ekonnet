import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BoxDiv from '../OwlCarousel/BoxDiv';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
// import SpotImg from '../assets/SpotDummyImg.png'
import Spot from '../Markets/Spot';
import Derivatives from '../Markets/Derivatives';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{}}>
            <AppBar position="static" sx={{ width: 500, marginLeft: "30px", marginTop: "30px" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Favorites" {...a11yProps(0)} />
                    <Tab label="Spot" {...a11yProps(1)} />
                    <Tab label="Derivatives" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Row>
                        <Col>
                            <BoxDiv />
                        </Col>
                        <Col>
                            <BoxDiv />
                        </Col>
                        <Col>
                            <BoxDiv />
                        </Col>
                        <Col>
                            <BoxDiv />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <BoxDiv />
                        </Col>
                        <Col>
                            <BoxDiv />
                        </Col>
                        <Col>
                            <BoxDiv />
                        </Col>
                        <Col>
                            <BoxDiv />
                        </Col>
                    </Row>

                    <div className='mt-5 d-flex justify-content-center'>
                        <NavLink><button className='market-nav'>Add To Favorite</button></NavLink>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
               <Spot/>

                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                   <Derivatives/>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}