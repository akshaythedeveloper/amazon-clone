import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product";
import ProductCategory from "./ProductCategory";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/3000x1200_Hero-Tall_NP._CB660400564_.jpg"
        />
        <div className="home__row">
          <div className="home__category">
            <h1 className="home__categoryTitle">Fitness Items</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Treadmills"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/PC_QC_T_H._SY232_CB406080027_.jpg"
              />
              <ProductCategory
                title="Exercise bikes"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/PC_QC_EB_H._SY232_CB406080024_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Dumbbells"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/PC_QC_DB_H._SY232_CB406090888_.jpg"
              />
              <ProductCategory
                title="Exercise gloves"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/QC/All/PC_QC_EG_H1._SY232_CB406092933_.jpg"
              />
            </div>
          </div>
          <div className="home__category">
            <h1 className="home__categoryTitle">Cookware & dining</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Gas stoves"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_372x232_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY232_CB448746450_.jpg"
              />
              <ProductCategory
                title="Cookware"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_372x232_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY232_CB448746407_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Kitchen storage"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_372x232_1198417XCM_Manual_3_copy_1573713358_jpg_LOWER_QL85_._SY232_CB448746425_.jpg"
              />
              <ProductCategory
                title="Tableware"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_372x232_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY232_CB448746407_.jpg"
              />
            </div>
          </div>
          <div className="home__category">
            <h1 className="home__categoryTitle">Kitchen and Home Appliances</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Coolers"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/GATEAWAYcreatives/PCQC/Cooler_372x232._SY232_CB657956548_.jpg"
              />
              <ProductCategory
                title="Fans"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/GATEAWAYcreatives/PCQC/Fan_372x232._SY232_CB657956548_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Juicers"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/GATEAWAYcreatives/PCQC/Juicer_372x232._SY232_CB657956548_.jpg"
              />
              <ProductCategory
                title="Inverters"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/GATEAWAYcreatives/PCQC/Inverters_372x232._SY232_CB657956548_.jpg"
              />
            </div>
          </div>
          <div className="home__category">
            <h1 className="home__categoryTitle">Womens ethnic wear</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Clothing"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EOSS_June/PC_QC/2x_Desktop_Quad_card_w_title_-_Card_2_copy_3._SY232_CB428340801_.jpg"
              />
              <ProductCategory
                title="Footwear"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EOSS_June/PC_QC/2x_Desktop_Quad_card_w_title_-_Card_2_copy_3._SY232_CB428340801_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Fashion jewellery"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EOSS_June/PC_QC/2x_Desktop_Quad_card_w_title_-_Card_3_copy_3._SY232_CB428340804_.jpg"
              />
              <ProductCategory
                title="Precious jewellery"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EOSS_June/PC_QC/2x_Desktop_Quad_card_w_title_-_Card_4_copy_3._SY232_CB428340806_.jpg"
              />
            </div>
          </div>
          <div className="home__category">
            <h1 className="home__categoryTitle">Home decor</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Bedsheets"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg._SY232_CB423376240_.jpg"
              />
              <ProductCategory
                title="Home decoration"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg._SY232_CB423376240_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Home storage"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg._SY232_CB423376240_.jpg"
              />
              <ProductCategory
                title="Lightins solutions"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg._SY232_CB423376240_.jpg"
              />
            </div>
          </div>
          <div className="home__category">
            <h1 className="home__categoryTitle">For your pets</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Dog supplies"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Dogs_2X._SY232_CB448750760_.jpg"
              />
              <ProductCategory
                title="Cat supplies"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Cats_2X._SY232_CB448750760_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Acquatics supplies"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Aquatics_2X._SY232_CB448750761_.jpg"
              />
              <ProductCategory
                title="Bird supplies"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Birds_2X._SY232_CB448750760_.jpg"
              />
            </div>
          </div>
          <div className="home__category">
            <h1 className="home__categoryTitle">Beauty products</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Skin care"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/2020-_beauty_Bay_Tile-372x232._SY232_CB431333301_.jpg"
              />
              <ProductCategory
                title="Hair care"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/Beauty-BAY-QC_Haircare_372x232._SY232_CB448752659_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Makeup"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/Beauty-BAY-QC_Makeup_372x232._SY232_CB448752659_.jpg"
              />
              <ProductCategory
                title="Luxary beauty"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/2020-_beauty_Bay_Tile--372x232._SY232_CB431333300_.jpg"
              />
            </div>
          </div>
          <div className="home__category">
            <h1 className="home__categoryTitle">Work from home essentials</h1>
            <div className="home__categoryRow">
              <ProductCategory
                title="Routers"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc_3._SY232_CB433895193_.jpg"
              />
              <ProductCategory
                title="Laptops"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc_4._SY232_CB433895193_.jpg"
              />
            </div>
            <div className="home__categoryRow">
              <ProductCategory
                title="Headphones"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc_2._SY232_CB433889424_.jpg"
              />
              <ProductCategory
                title="Keyboards, mice & more"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc_1._SY232_CB433895193_.jpg"
              />
            </div>
          </div>
        </div>

        <div className="home__swipeItems">
          <h1 className="home__title">Inspired by your shopping trend</h1>
          <div className="home__products">
            <Product
              id="63746455"
              title="LG 7.0 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (FHM1207ZDL, Luxury Silver, 6 Motion Technology)"
              image="https://images-na.ssl-images-amazon.com/images/I/81erN8t-57L._SL1500_.jpg"
              price={579}
              rating={5}
            />
            <Product
              id="29876598"
              title="Xbox Series S"
              image="https://images-na.ssl-images-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg"
              price={250}
              rating={5}
            />
            <Product
              id="64564532"
              title="LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69G"
              image="https://images-na.ssl-images-amazon.com/images/I/81t1tAzEgGL._SL1500_.jpg"
              price={300}
              rating={4}
            />
            <Product
              id="23232434"
              title="Cyrill by Spigen Leather Brick Designed for iPhone 12 Pro Max (2020) Case - Navy"
              image="https://images-na.ssl-images-amazon.com/images/I/61-G0YsftNL._SL1000_.jpg"
              price={78}
              rating={4}
            />
            <Product
              id="12345678"
              title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)"
              image="https://images-na.ssl-images-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
              price={45}
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
