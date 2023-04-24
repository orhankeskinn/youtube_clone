import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box} from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{background:'#000'}}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

