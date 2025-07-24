import MySwiper from "./swiper.jsx"
import MySwiper_Motorcycle from "./MySwiper_Motorcycle.jsx"
import { useState,useEffect } from "react"
import "@/styles/main.scss"
export default function Main() {
    const [tabIndex, setTabIndex] = useState(0)

    const SwiperList = [
        'https://www.thaihonda.co.th/honda/uploads/cache/1920/photos/shares/banners/ScoopyXKuromi/Honda_Scoopy_x_Kuromi_Banner_W1920xH768px.jpg',
        'https://www.thaihonda.co.th/honda/uploads/cache/1920/photos/shares/Lead2024/Update_2025/Honda_LEAD125-Home_page_banner_Banner_W1920_x_H768_px__1_.jpg',
        'https://www.thaihonda.co.th/honda/uploads/cache/1920/photos/shares/banners/CR150R-Mar2025/ThHonda_Desktop-CBR150R_HomepageBanner-1920x768.jpg'

    ]
    const product = [
        'GT',
        'GPX',
        '踏板',
        '机车',
        'PCX'
    ]
    const motorcycleList = [
         [
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        ],
         [
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        ],
         [
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        ],
         [
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        ],
         [
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/2025_New_ADV350/Product_Thumbnail_ADV350_W430x267px.png',
        ],
         [
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
        'https://www.thaihonda.co.th/honda/uploads/cache/430/photos/shares/0125/Product_Thumbnail_W430x267px.png',
    ]
    ]
    const changeTab = (index) => { 
        setTabIndex(index)
       
    }
    useEffect(() => {
  console.log("tabIndex changed:", tabIndex);
}, [tabIndex]);
    const productItem = product.map((item,index) => {
        return (
            <div className={`product_name ${tabIndex === index ? 'active' : ''}`}   key={ item } onClick = {()=>changeTab(index)} >{item}</div>
        )
    })
    return (
        <div className="main">
            <div className="inner">
                <MySwiper List={SwiperList} />
                <div className="motorcycle_box">
                    <div className="motorcycle_tab">
                          {productItem}
                    </div>
                    <div className="motor_list">
                          <MySwiper_Motorcycle List={motorcycleList[tabIndex]} />
                    </div>
                </div>
            </div>
        </div>
    )
}