import * as React from 'react';
import s from "./NavCatalog.module.scss";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewComfyAltIcon from '@mui/icons-material/ViewComfyAlt';
import IconButton from '@mui/material/IconButton';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
   
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1.5px solid #D7D9DF',
      fontSize: 14,
      padding: '8px 46px 8px 20px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'SFProDisplayRegular'
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

function NavCatalog(props) {
        const [filter, setAge] = React.useState('');
        const handleChange = (event) => {
            setAge(event.target.value);
        }
return (
    <div className={s.navCatalog}>
        <div className={s.left}>
            <button className={s.btn}>Полноприводные</button>
            <button  className={s.btn}>от 5000</button>
            <button  className={s.btn}>BRP</button>
            <button  className={s.btn}>еще</button>
        </div>
        <div className={s.rigth}>
            <div>
                <FormControl sx={{ m: 1, minWidth: 178 }}>
                <InputLabel id="demo-customized-select-label"></InputLabel>
                <Select labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={filter}
                    onChange={handleChange}
                    input={<BootstrapInput />}>
                    <MenuItem value={0}>По популярности</MenuItem>
                    <MenuItem value={10}>По цене</MenuItem>
                    <MenuItem value={20}>По наличию</MenuItem>
                    <MenuItem value={30}>По моделе</MenuItem>
                </Select>
                </FormControl>
            </div>
       
        
            <IconButton aria-label="ViewComfyAltIcon" >
                <ViewComfyAltIcon />
            </IconButton>
            <IconButton aria-label="formatListBulletedIcon">
                <FormatListBulletedIcon />
            </IconButton>
        </div>
    </div>       
)
}
export default NavCatalog;