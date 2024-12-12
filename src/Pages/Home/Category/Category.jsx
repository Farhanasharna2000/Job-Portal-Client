import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Category/Category.css'

import Slider from "react-slick";

import finance from '../../../assets/Category/finance.svg'
import marketing from '../../../assets/Category/marketing.svg'
import customer from '../../../assets/Category/customer.svg'
import software from '../../../assets/Category/lightning.svg'
import human from '../../../assets/Category/human.svg'
import management from '../../../assets/Category/management.svg'
import retail from '../../../assets/Category/retail.svg'
import security from '../../../assets/Category/security.svg'
import content from '../../../assets/Category/content.svg'
import research from '../../../assets/Category/research.svg'



const Category = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
    return (
        <div className="max-w-6xl mx-auto mt-10 ">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl font-bold">Browse by category</h1>
        <p className="text-gray-400 font-semibold">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
        </div> 
        <Slider  {...settings}>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={finance} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Finance</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={marketing} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Marketing & Sale</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={customer} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Customer Help</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={software} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Software</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={human} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Human Resource</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={management} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Management</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={retail} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Retail & Products</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={security} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Security Analyst</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={content} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Content Writer</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
      <div >
      <div className="flex h-24  justify-center items-center gap-2 border   rounded-xl hover:shadow-xl hover:border-gray-800 transition-transform transform hover:-translate-y-1 scale-[.90]">
        <div>
            <img src={research} alt="" />
        </div>
        <div >
            <h1 className="font-bold hover:text-blue-700">Market Research</h1>
            <p className="text-sm text-gray-500 hover:text-blue-700">168 jobs available</p>
        </div>
      </div>
      </div>
    </Slider> 
        </div>
    );
};

export default Category;