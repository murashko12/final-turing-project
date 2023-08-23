import { Visibility, VisibilityOff } from '@mui/icons-material';
import { 
    Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField,
    
} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  return (
    
        <Box>
            <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Логин" variant="outlined" />
            <FormControl sx={{ width: '100%', marginTop: "10px" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"       
                />    
            </FormControl>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <FormControlLabel control={<Checkbox defaultChecked />} style={{color: '#616161'}} label="Запомнить" />
                    <Link href="#" underline="hover">
                        {'Забыли пароль?'}
                    </Link>
            </Box>
            <Button sx={{height: "45px",width: "100%", p: "10px"}} variant="contained">Войти</Button>
        </Box>
                  
                  
  )
}

export default LoginForm
