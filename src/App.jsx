// App.jsx
import React from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { FaLocationArrow } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <Box className="phone-screen" position="relative">
    {/* Status Bar */}
    <Box className="status-bar">
      <Box className="status-left">
        <Text className="time">9:41</Text>
      </Box>
      <Box className="status-right">
      </Box>
    </Box>
      
      {/* Weather UI */}
      <Box className="weather-container">
        <Box className="location-icon">
          <Icon as={FaLocationArrow} w={6} h={6} />
        </Box>
        <Text className="city-name">Philadelphia</Text>
        <Text className="temperature">23°</Text>
        <Text className="feels-like">Feels like 26°</Text>
        <Text className="high-low">High: 29° Low: 15°</Text>
      </Box>
      
      {/* Air Quality Section */}
      <Box className="air-quality-container">
        <Box className="air-quality-box">
          <Box className="air-quality-labels">
            <Text className="air-quality-icon">􀴿</Text>
            <Text className="air-quality-title">Air quality</Text>
          </Box>
          <Text className="air-quality-index">56</Text>
          <Text className="moderate">Moderate</Text>
          <Box className="air-quality-gradient">
            <Box className="air-quality-bar"></Box>
            <Box className="air-quality-ellipse"></Box>
            <Box className="air-quality-small-ellipse"></Box>
          </Box>
        </Box>
      </Box>

      {/* Group 2 Section */}
      <Box className="group-2-container">
        <Box className="group-2-box">
          <Box className="weather-hours">
            <Box className="weather-row">
              <Text className="time">Now</Text>
              <Text className="weather-icon">􀇛</Text>
              <Text className="temperature-small">23°</Text>
            </Box>
            <Box className="weather-row">
              <Text className="time">10PM</Text>
              <Text className="weather-icon">􀇛</Text>
              <Text className="temperature-small">22°</Text>
            </Box>
            <Box className="weather-row">
              <Text className="time">11PM</Text>
              <Text className="weather-icon">􀇛</Text>
              <Text className="temperature-small">21°</Text>
            </Box>
          </Box>
        </Box>
        <Box className="line-1"></Box>
        <Box className="line-2"></Box>
      </Box>
      
      {/* Group 3 Section */}
      <Box className="group-3-container">
        <Box className="group-3-box">
          <Box className="alert-row">
            <Text className="alert-icon">⚠</Text>
            <Text className="alert-text">EXTREME WEATHER ALERT</Text>
          </Box>
          <Text className="alert-description">
            U.S. National Weather Service has issued a Tornado Warning for Philadelphia. 
            It'll be in effect until February 26, 10:00 PM EST.
          </Text>
          <Text className="see-more">See more</Text>
        </Box>
      </Box>

      {/* List Section */}
      <Box className="list-container">
        <Box className="list-header">
          <Box className="forecast-header">
            <Text className="forecast-icon">􀉉</Text>
            <Text className="forecast-title">10-DAY FORECAST</Text>
          </Box>
        </Box>
        {/* List Rows */}
        <Box className="list-row" top={2}>
          <Text className="day">Tomorrow</Text>
          <Box className="icon-humidity">
            <Text className="weather-icon">􀆮</Text>
          </Box>
          <Text className="temperature-small">29°</Text>
          <Box className="line"></Box>
        </Box>
        <Box className="list-row" top={1}>
          <Text className="day">Monday</Text>
          <Box className="icon-humidity">
            <Text className="weather-icon">􀇛</Text>
            <Text className="humidity">60%</Text>
          </Box>
          <Text className="temperature-small">27°</Text>
          <Box className="line" marginTop={1}></Box>
        </Box>
        <Box className="list-row">
          <Text className="day">Tuesday</Text>
          <Box className="icon-humidity">
            <Text className="weather-icon">􀇛</Text>
            <Text className="humidity">60%</Text>
          </Box>
          <Text className="temperature-small">25°</Text>
        </Box>
      </Box>

      <Box className="bottom-bar" />
    </Box>
  );
}

export default App;