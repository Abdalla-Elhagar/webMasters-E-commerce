import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "./appBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
  },
}));
export default function MenuAppBar() {
  const [activePage, setActivePage] = useState("/");
  const pages = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Cantact", path: "/concat" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Sign Up", path: "/register" },
  ];
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [turn, setTurn] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="appBar"
        position="relative"
        sx={{ backgroundColor: "transparent", color: "black" }}
      >
        <div className="container">
          {turn && (
            <div
              onClick={() => setTurn(false)}
              className=" fixed left-0 z-40 top-0 h-full w-full bg-black/40"
            >
              <input
                type="text"
                onClick={(e) => e.stopPropagation()}
                className="top-28 w-5/6 left-1/2 z-50 -translate-x-1/2 text-white bg-transparent border-white border-2 py-2 px-4 rounded-full focus:outline-none absolute"
              />
              <button className="text-white absolute top-[120px] right-16">
                <SearchIcon />
              </button>
            </div>
          )}
          <Toolbar className="relative flex justify-between items-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Exclusive"
              sx={{ mr: 2, fontWeight: 700 }}
            >
              <Link to="/">Exclusive</Link>
            </IconButton>
            <Typography className="pages flex gap-10" component="div">
              {pages.map((page) => (
                <Typography
                  key={page.id}
                  className={`block PageButton ${
                    activePage === page.path ? "active" : ""
                  }`}
                  variant="button"
                  component="button"
                  onClick={() => setActivePage(page.path)}
                >
                  <Link to={page.path}>{page.name}</Link>
                </Typography>
              ))}
            </Typography>

            <Typography className="flex items-center" component="div">
              <Typography component="div" className="responsiveSearch block">
                <IconButton
                  sx={{ color: "black", marginTop: "5px" }}
                  onClick={() => setTurn(true)}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Typography>

              <Search className="searchInput flex">
                <StyledInputBase
                  className="searchInput bg-grayColor rounded-[4px] w-[153px]"
                  placeholder="What are you looking for?"
                  inputProps={{ "aria-label": "search" }}
                />
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              </Search>

              <IconButton sx={{ ml: "15px" }} aria-label="favorit">
                <Link to="/favorite">
                  <FavoriteBorderIcon sx={{ color: "black" }} />
                </Link>
              </IconButton>
              <IconButton aria-label="cart">
                <Link to="/cart">
                  <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
                </Link>
              </IconButton>
              {localStorage.getItem("selectedUser") ? (
                <IconButton className="relative" aria-label="cart">
                  <FaRegUser
                    onClick={() => (show1 ? setShow1(false) : setShow1(true))}
                    className="size-8 p-1 border-4 border-mainColor rounded-full bg-mainColor text-white"
                  />
                  {show1 && (
                    <div className="absolute rounded-md p-3 pl-5 text-base -left-52 top-12 w-[250px] h-[300px] z-50 bg-[#1e1e1e5d] backdrop-blur-[15px] text-white">
                      <Link
                        className="flex mt-3 mb-8 gap-4 justify-start items-center"
                        to="/MyAccount"
                      >
                        <FaRegUser className="size-5" />
                        <p>Manage My Account</p>
                      </Link>
                      <div className="flex mb-8 gap-4 justify-start items-center">
                        <RiShoppingBag3Line className="size-5" />
                        <p>My Order</p>
                      </div>
                      <div className="flex mb-8 gap-4 justify-start items-center">
                        <MdOutlineCancel className="size-5" />
                        <p>My Cancellations</p>
                      </div>
                      <div className="flex mb-8 gap-4 justify-start items-center">
                        <FaRegStar className="size-5" />
                        <p>My Reviews</p>
                      </div>
                      <button
                        onClick={() => {
                          localStorage.removeItem("selectedUser");
                          window.location.reload();
                        }}
                        className="flex mb-8 gap-4 justify-start items-center"
                      >
                        <TbLogout2 className="size-5" />
                        <p>Logout</p>
                      </button>
                    </div>
                  )}
                </IconButton>
              ) : null}
            </Typography>
          </Toolbar>

          <Typography className="bg-white z-50 max-sm:rounded-none hidden max-lg:flex justify-between px-5 py-2 rounded-lg max-sm:w-full max-sm:left-0 max-sm:translate-x-0 w-1/2 shadow-lg shadow-slate-600 fixed bottom-[-5px] border left-1/2 translate-x-[-50%]">
            <IconButton
              onClick={() => setActivePage("/")}
              className={`RPageButton ${activePage === "/" ? "active" : ""}`}
              key="1"
              aria-label="home"
            >
              <Link to="/">
                <HomeIcon />
              </Link>
            </IconButton>

            <IconButton
              onClick={() => setActivePage("/concat")}
              className={`RPageButton ${
                activePage === "/concat" ? "active" : ""
              }`}
              key="2"
              aria-label="concat"
            >
              <Link to="/concat">
                <LocalPhoneIcon />
              </Link>
            </IconButton>

            <IconButton
              onClick={() => setActivePage("/about")}
              className={`RPageButton ${
                activePage === "/about" ? "active" : ""
              }`}
              key="3"
              aria-label="About"
            >
              <Link to="/about">
                <InfoIcon />
              </Link>
            </IconButton>

            <IconButton
              onClick={() => (show2 ? setShow2(false) : setShow2(true))}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            {show2 && (
              <div className="absolute rounded-md p-5 pl-5 text-base right-0 -top-28 w-[150px] h-[120px] z-50 bg-[#1e1e1e5d] backdrop-blur-[15px] text-white">
                <Link to='/logIn' className="flex mb-5 gap-4 items-center">
                  <CiLogin className="size-7 text-white" />
                  <p>login</p>
                </Link>
                <Link to='/register' className="flex gap-4 items-center">
                  <RiUserAddLine className="size-7 text-white" />
                  <p>Sign Up</p>
                </Link>
              </div>
            )}
          </Typography>
        </div>
      </AppBar>
    </Box>
  );
}
