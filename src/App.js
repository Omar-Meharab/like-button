import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MealDetail from './components/MealDetail/MealDetail';
import MealFinder from './components/MealFinder/MealFinder';

function App() {
  const [likeColor, setLikeColor] = useState('');
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
      <MealDetail></MealDetail>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
