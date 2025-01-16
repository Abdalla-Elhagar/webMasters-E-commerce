import { SwiperSlide ,Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation'
import { UpdatedProducts as Products } from "../data/products";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import './sliderNavigation.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import 'swiper/css';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

export default function TodaySlider() {
    return (
        <div className="relative">

      <div className="custom-prev absolute"><WestOutlinedIcon /></div>
      <div className="custom-next absolute"><EastOutlinedIcon /></div>
        <Swiper className="mt-10 mx-auto" slidesPerView={1} spaceBetween={10}

        navigation = {{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        modules={[Navigation]}
        
        >
            {
              Products.map(product=>(
                <SwiperSlide key={product.id}>
                    <Card key={product.id} className="group mx-auto" sx={{ maxWidth: 320 }}>
                        
                            <div className="image w-full h-[300px] relative bg-[#F5F5F5] overflow-hidden rounded-md">
                                <button className="absolute hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-[3px] right-5 top-5 bg-[#eee]">
                                  <FavoriteBorderIcon />
                                </button>
                                <button className="absolute hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-1 right-5 top-16 bg-[#eee]">
                                  <RemoveRedEyeOutlinedIcon />
                                </button>
                                {product.discount ? <div className="absolute bg-mainColor text-white px-5 py-1 top-3 rounded-md left-4">-{(product.discount)}%</div> : null }
                                
                                <button className="addToCart absolute text-white bg-black w-full h-12 transition-all duration-300 -bottom-12 group-hover:bottom-0 left-0">Add To Cart</button>
                                <img className="bg-[#F5F5F5] w-full h-full" src={product.image} alt="product image" />
                            </div>
                            
                            <CardContent>
                            <Typography gutterBottom variant="h6" sx={{height:'48px',paddingY:'10px',overflow: "hidden"}} component="div">
                                {product.title}
                            </Typography>
                            
                            
                                
                                {product.discount ? 
                                <Typography gutterBottom variant="h6" component="div"> 
                                    <span className="mr-10 text-mainColor">
                                        ${ Math.floor(product.price-((product.discount/100)*product.price))}
                                    </span> 
                                    <span className=" line-through text-[#666]">
                                        ${product.price}
                                    </span> 
                                </Typography>:
                                <Typography gutterBottom variant="h6" component="div"> 
                                    <span>${product.price}</span></Typography>
                                }

                                <div className="rate">
                                    {Array(product.rate).fill(null).map(()=>(
                                        <StarIcon sx={{color: "#FFAD33"}} />
                                    ))}
                                    {Array(5-product.rate).fill(null).map(()=>(
                                        <StarIcon sx={{color: "#999"}} />
                                    ))}
                                    <span className="sales ml-6 text-[#999] font-semibold">({product.sales})</span>
                                    
                                </div>
                                
                                
                                
                            
                            </CardContent>
                        
                    </Card>
                </SwiperSlide>
              ))  
            }
            
            
        </Swiper>
    </div>
    )
}