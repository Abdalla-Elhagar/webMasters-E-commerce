import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "./appBar.css"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';





const Search = styled('div')(({ theme }) => ({
  
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 1),
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      
      
    },
  }));
export default function MenuAppBar() {
  const [activePage, setActivePage] = useState("/");
  const pages = [
    {id:1, name: "Home", path: "/" },
    {id:2, name: "Contact", path: "/concat" },
    {id:3, name: "About", path: "/about" },
    {id:4, name: "Sign Up", path: "/register" },
  ];
  const [turn , setTurn] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="relative" sx={{backgroundColor: "transparent", color: "black"}}>
        <div className='container'>
          {turn && <div onClick={()=>setTurn(false)} className=" fixed left-0 z-40 top-0 h-full w-full bg-black/40" >
            <input type="text" onClick={e=>e.stopPropagation()} className="top-28 w-5/6 left-1/2 z-50 -translate-x-1/2 text-white bg-transparent border-white border-2 py-2 px-4 rounded-full focus:outline-none absolute" />
            <button className='text-white absolute top-[120px] right-16'><SearchIcon /></button>
        </div>}
        <Toolbar className='relative flex justify-between items-center'>
          <IconButton

            size="large"
            edge="start"
            color="inherit"
            aria-label="Exclusive"
            
            sx={{ mr: 2,fontWeight: 700  }}
          >
            <Link to="/">Exclusive</Link>
            
            </IconButton>
                <Typography className='pages flex gap-10' component="div">
                {pages.map((page) => (
                <Typography
                  key={page.id}
                  className={`PageButton ${activePage === page.path ? "active" : ""}`}
                  variant="button"
                  component="button"
                  onClick={() => setActivePage(page.path)}
                >
                  <Link to={page.path}>{page.name}</Link>
                </Typography>
              ))}
            </Typography>

            <Typography className='flex items-center' component='div'>
                <Typography component="div" className="responsiveSearch">
                <IconButton sx={{color: "black",marginTop:"5px"}} onClick={()=>setTurn(true)} aria-label="search">
                    <SearchIcon />
                  
                </IconButton>
                </Typography>
                
                <Search className='searchInput flex'>
            
                    <StyledInputBase  className='searchInput bg-grayColor rounded-[4px] w-[153px]'
                    placeholder="What are you looking for?"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    <SearchIconWrapper >
                        <SearchIcon />
                    </SearchIconWrapper>
                </Search>

                <IconButton sx={{ml:"15px"}} aria-label="favorit">
                  <Link to="/favorite">
                    <FavoriteBorderIcon sx={{color: "black"}} />
                  </Link>
                </IconButton>
                <IconButton aria-label="cart">
                  <Link to="/cart"><ShoppingCartOutlinedIcon sx={{color: "black"}} /></Link>
                  
                </IconButton>

            </Typography>
          
        </Toolbar>


        <Typography className='bg-white z-50 max-sm:rounded-none hidden max-lg:flex justify-between px-5 py-2 rounded-lg max-sm:w-full max-sm:left-0 max-sm:translate-x-0 w-1/2 shadow-lg shadow-slate-600 fixed bottom-[-5px] border left-1/2 translate-x-[-50%]'>
            <IconButton onClick={() => setActivePage("/")} className={`RPageButton ${activePage === "/" ? "active" : ""}`} key="/" aria-label="home">
              <Link to="/"><HomeIcon /></Link>
              
            </IconButton>

            <IconButton onClick={() => setActivePage("/concat")} className={`RPageButton ${activePage === "/concat" ? "active" : ""}`} key="/concat" aria-label="concat">
              <Link to="/concat"><LocalPhoneIcon /></Link>
              
            </IconButton>

            <IconButton onClick={() => setActivePage("/about")} className={`RPageButton ${activePage === "/about" ? "active" : ""}`} key="/concat" aria-label="About">
              <Link to="/about"><InfoIcon /></Link>
              
            </IconButton>

            <IconButton aria-label="menu">
              <MenuIcon />
            </IconButton>

        </Typography>
        
        </div>
        
      </AppBar>
    </Box>
  );
}
