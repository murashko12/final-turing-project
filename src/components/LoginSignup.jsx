import { Visibility, VisibilityOff } from '@mui/icons-material'
import { 
    Box, 
    Button, 
    ButtonGroup, 
    Checkbox, 
    FormControl, 
    FormControlLabel, 
    IconButton, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
    TextField, 
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';


const LoginSignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const [alignment, setAlignment] = React.useState('login');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
  
    return (
    
        <Box 
            width={400} 
            height="auto" 
            bgcolor="white" 
            p={3} 
            borderRadius={5} 
            display="flex" 
            flexDirection="column"
            justifyContent="space-between"
        >
            <ToggleButtonGroup
                color="primary"
                variant="contained"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton sx={{height: "45px", width: "50%", p: "10px"}} value="login">вход</ToggleButton>
                <ToggleButton sx={{height: "45px", width: "50%", p: "10px"}} value="signup">регистрация</ToggleButton>
            </ToggleButtonGroup>

            <Box>
                <LoginForm/>
            </Box>
        </Box>
  )
}

export default LoginSignUp
