import { Link } from "react-router-dom";
import SectionHeader from "../components/sectionHeader";
import { UpdatedProducts as Products } from "../data/products";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

export default function Favorite() {
  const bestProducts = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  const first4Products = bestProducts.slice(0, 4);

  return (
    <section className=" my-20">
      <div className="container">
        <div className="JustForYou">
          <div className="titleAndViewAll flex mt-6 justify-between gap-5 max-sm:text-center w-full flex-wrap">
            <h2 className="text-3xl">Wishlist (4)</h2>
            <Link
              to="/bestSelling"
              className="bg-transparent max-sm:mx-auto rounded-md text-black border-2 hover:bg-mainColor hover:text-white hover:border-mainColor transition-all duration-300 border-black/50 px-10 py-3"
            >
              View All
            </Link>
          </div>

          <div className="bestProducts4 flex mt-16 justify-center flex-wrap gap-8">
            {first4Products.map((product: any) => (
              <Card
                key={product.id}
                className="group mx-auto"
                sx={{ maxWidth: 320 }}
              >
                <div className="image w-full h-[300px] relative bg-[#F5F5F5] overflow-hidden rounded-md">
                  <button className="absolute hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-[3px] right-5 top-5 bg-[#eee]">
                    <FavoriteBorderIcon />
                  </button>
                  <button className="absolute hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-1 right-5 top-16 bg-[#eee]">
                    <RemoveRedEyeOutlinedIcon />
                  </button>
                  {product.discount ? (
                    <div className="absolute bg-mainColor text-white px-5 py-1 top-3 rounded-md left-4">
                      -{product.discount}%
                    </div>
                  ) : null}

                  <button className="addToCart absolute text-white bg-black w-full h-12 transition-all duration-300 -bottom-12 group-hover:bottom-0 left-0">
                    Add To Cart
                  </button>
                  <img
                    className="bg-[#F5F5F5] w-full h-full"
                    src={product.image}
                    alt="product image"
                  />
                </div>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      height: "48px",
                      paddingY: "10px",
                      overflow: "hidden",
                    }}
                    component="h6"
                  >
                    {product.title}
                  </Typography>

                  {product.discount ? (
                    <Typography className=" block" gutterBottom component="div">
                      <span className="mr-10 text-mainColor">
                        $
                        {Math.floor(
                          product.price -
                            (product.discount / 100) * product.price
                        )}
                      </span>
                      <span className=" line-through text-[#666]">
                        ${product.price}
                      </span>
                    </Typography>
                  ) : (
                    <Typography className=" block" gutterBottom component="div">
                      <span>${product.price}</span>
                    </Typography>
                  )}

                  <div className="rate">
                    {Array(product.rate)
                      .fill(null)
                      .map((_, index: number) => (
                        <StarIcon key={index} sx={{ color: "#FFAD33" }} />
                      ))}
                    {Array(5 - product.rate)
                      .fill(null)
                      .map((_, index: number) => (
                        <StarIcon key={index} sx={{ color: "#999" }} />
                      ))}
                    <span className="sales ml-6 text-[#999] font-semibold">
                      ({product.sales})
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="JustForYou">
          <div className="titleAndViewAll flex mt-6 justify-between gap-5 max-sm:text-center w-full flex-wrap">
            <SectionHeader title="Just For You" />
            <Link
              to="/bestSelling"
              className="bg-transparent max-sm:mx-auto rounded-md text-black border-2 hover:bg-mainColor hover:text-white hover:border-mainColor transition-all duration-300 border-black/50 px-10 py-3"
            >
              View All
            </Link>
          </div>

          <div className="bestProducts4 flex mt-16 justify-center flex-wrap gap-8">
            {first4Products.map((product: any) => (
              <Card
                key={product.id}
                className="group mx-auto"
                sx={{ maxWidth: 320 }}
              >
                <div className="image w-full h-[300px] relative bg-[#F5F5F5] overflow-hidden rounded-md">
                  <button className="absolute hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-[3px] right-5 top-5 bg-[#eee]">
                    <FavoriteBorderIcon />
                  </button>
                  <button className="absolute hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-1 right-5 top-16 bg-[#eee]">
                    <RemoveRedEyeOutlinedIcon />
                  </button>
                  {product.discount ? (
                    <div className="absolute bg-mainColor text-white px-5 py-1 top-3 rounded-md left-4">
                      -{product.discount}%
                    </div>
                  ) : null}

                  <button className="addToCart absolute text-white bg-black w-full h-12 transition-all duration-300 -bottom-12 group-hover:bottom-0 left-0">
                    Add To Cart
                  </button>
                  <img
                    className="bg-[#F5F5F5] w-full h-full"
                    src={product.image}
                    alt="product image"
                  />
                </div>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      height: "48px",
                      paddingY: "10px",
                      overflow: "hidden",
                    }}
                    component="h6"
                  >
                    {product.title}
                  </Typography>

                  {product.discount ? (
                    <Typography className=" block" gutterBottom component="div">
                      <span className="mr-10 text-mainColor">
                        $
                        {Math.floor(
                          product.price -
                            (product.discount / 100) * product.price
                        )}
                      </span>
                      <span className=" line-through text-[#666]">
                        ${product.price}
                      </span>
                    </Typography>
                  ) : (
                    <Typography className=" block" gutterBottom component="div">
                      <span>${product.price}</span>
                    </Typography>
                  )}

                  <div className="rate">
                    {Array(product.rate)
                      .fill(null)
                      .map((_, index: number) => (
                        <StarIcon key={index} sx={{ color: "#FFAD33" }} />
                      ))}
                    {Array(5 - product.rate)
                      .fill(null)
                      .map((_, index: number) => (
                        <StarIcon key={index} sx={{ color: "#999" }} />
                      ))}
                    <span className="sales ml-6 text-[#999] font-semibold">
                      ({product.sales})
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
