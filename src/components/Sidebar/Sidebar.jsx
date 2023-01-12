import React from 'react'
import '../../styles/Sidebar/Sidebar.css';
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* twitter icon */}
      <TwitterIcon className='sidebarTwitterIcon'/>
      {/* sidebar options */}
      <SidebarOptions active text="Home" Icon={HomeIcon}/>
      <SidebarOptions text="Explore" Icon={SearchIcon}/>
      <SidebarOptions text="Notification" Icon={NotificationsNoneIcon}/>
      <SidebarOptions text="Message" Icon={MailOutlineIcon}/>
      <SidebarOptions text="Bookmark" Icon={BookmarkBorderIcon}/>
      <SidebarOptions text="Lists" Icon={ListAltIcon}/>
      <SidebarOptions text="Profile" Icon={PermIdentityIcon}/>
      <SidebarOptions text="More" Icon={MoreHorizIcon}/>
      <Button className='sidebarTweetBtn' variant='outlined' fullWidth >Tweet</Button>
    </div>
  )
}

export default Sidebar
