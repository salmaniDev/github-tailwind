import productImage1 from "../public/img/products/1.jpg";
import productImage2 from "../public/img/products/2.jpg";
import productImage3 from "../public/img/products/3.jpg";
import productImage4 from "../public/img/products/4.jpg";
import productImage5 from "../public/img/products/5.jpg";
import productImage6 from "../public/img/products/6.jpg";
import productImage7 from "../public/img/products/7.jpg";
import productImage8 from "../public/img/products/8.jpg";
import productImage9 from "../public/img/products/9.jpg";
import productImage10 from "../public/img/products/10.jpg";
import productImage11 from "../public/img/products/11.jpg";

import userImage from "../public/images/user.svg";

function productList() {
  return (
    <>
      <div className="relative py-[70px] mt-[30px] mb-[85px] after:content-[''] after:bg-[#f4f9fd] after:absolute after:w-[95%] after:h-[100%] after:top-0 after:z-[-1] after:right-[50%] after:translate-x-2/4 after:rounded-[15px]">
        <div className="container">
          <div className="flex items-center content-between mb-[70px]">
            <div>
              <i className="icon-cloud-windy text-primary text-[36px] mb-3 block"></i>
              <p className="text-[15px] text-[#8b8b8b]">شنبه</p>
              <p className="text-[29px] leading-7">
                <span className="text-[17px] inline-block relative">c</span> ۲۳</p>
            </div>
            <div className="items-center flex py-[27px] pr-[62px] pl-[38px] rounded-[15px] shadow-sm w-[75%] mx-auto bg-white">
              <div className="flex items-center py-[10px] pl-[90px] border-l">
                <i className="icon-Walk2 text-[39px] ml-[20px] text-primary-100"></i>
                <div>
                  <h3 className="mb-[8px] font-[100] text-[#8b8b8b] text-[12px]">تاریخ ورود</h3>
                  <p className="text-[24px] font-[100]">1402/04/21</p>
                </div>
              </div>
              <div className="flex items-center py-[10px] pl-[90px] mr-[85px] border-l">
                <i className="icon-Walk text-[39px] ml-[20px] text-[#b9b9b9]"></i>
                <div>
                  <h3 className="mb-[8px] font-[100] text-[#8b8b8b] text-[12px]">تاریخ خروج</h3>
                  <p className="text-[24px] font-[100]">1402/04/21</p>
                </div>
              </div>
              <div className="flex items-center py-[10px] pl-[90px] mr-[85px]">
                <i className="icon-Walk text-[39px] ml-[20px] text-[#b9b9b9]"></i>
                <div>
                  <h3 className="mb-[8px] font-[100] text-[#8b8b8b] text-[12px]">تعداد نفرات</h3>
                  <p className="text-[24px] font-[100]">۳ نفر</p>
                </div>
              </div>
              <a href="#" className="bg-primary text-white rounded-[40px] py-[20px] px-[22px] text-[19px] font-[200] mr-auto">جستجو <i className="icon-search text-[28px] mr-[19px]"></i></a>
            </div>
            <div className="flex">
              <div>
                <i className="icon-Filter text-primary text-[30px] mb-[5px] block"></i>
                <p className="text-[20px] font-[100]">فیلتر</p>
              </div>
              <div className="mr-[60px]">
                <i className="icon-Flash text-primary-200 text-[30px] mb-[5px] block"></i>
                <p className="text-[20px] font-[100]">فوری</p>
              </div>
            </div>
          </div>
          <div className="grid justify-items-start gap-[25px] grid-cols-3">
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage1} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span></p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span></p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage1} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span></p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span></p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage3} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span>
                  </p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span></p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="relative h-[623px] w-full">
              <div className={`bg-[url('../public/img/products/7.jpg')]`}></div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage4} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span></p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span>
                  </p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage6} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span>
                  </p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block">
                      </i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block">
                      </i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span>
                  </p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage7} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span>
                  </p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span></p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage8} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span></p>
                  <p className="text-[12px]">پیشنهاد داده اند</p> /
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block">
                      </i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span>
                  </p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage9} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span>
                  </p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block">
                      </i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span>
                  </p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage10} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span>
                  </p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block">
                      </i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block">
                      </i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span>
                  </p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage11} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span>
                  </p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span>
                  </p>
                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
            <div className="bg-white rounded-[15px] p-[20px] block w-full">
              <img className="w-full rounded-[15px] mb-[15px] object-cover h-[300px]" src={productImage11} alt="" />
              <div className="flex justify-between mb-[20px] items-center">
                <div className="">
                  <p className="text-primary text-[18px]">340 <span className="text-[#b9b9b9b] text-[12px]">نفر</span>
                  </p>
                  <p className="text-[12px]">پیشنهاد داده اند</p>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center translate-x-[-7px] translate-y-[7px]">
                    <div className="text-center">
                      <i className="icon-heart text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۱۹۴</p>
                    </div>
                    <div className="text-center mr-[15px]">
                      <i className="icon-messages text-[18px] mb-[5px] block"></i>
                      <p className="text-[14px]">۸۵۶</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left text-[15px] text-gray-400 mb-[5px] font-[100]">stories</p>
                    <div className="flex items-center relative">
                      <div className="flex">
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all relative z-[2] translate-x-[-27px]" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all z-[1] translate-x-[-13px] relative" src={userImage} alt="" />
                        <img className="border-l rounded-[50%] w-[31px] h-[31px] transition-all" src={userImage} alt="" />
                      </div>
                      <span className="absolute right-[34px] z-[3] text-white ">3+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[14px] mb-[10px] font-[400]">ویلای سه خوابه با چشم انداز دریاچه</h2>
                <p className="text-[#9d9d9d] text-[15px] leading-[26px] mb-[20px]">ین ویلا دارای سه خواب جداگانه به همراه سرویس بهداشتی ایرانی و فرنگی میباشد که از روبرو مشرف به دریاچه چادگان می باشد این ویلا</p>
              </div>
              <div className="flex items-center content-between">
                <div className="flex items-center bg-[#f4f9fd] rounded-[15px] py-[25px] px-[10px] flex-1 pr-[30px] ml-[15px] content-between">
                  <p className="text-[14px]">نرخ هرشب از:</p>
                  <p className="text-primary-100 mr-[25px] text-[17px]">2,500,000<span className="text-[#b9b9b9] text-[16px] mr-[7px]">تومان</span>
                  </p>

                </div>
                <p className="bg-[#f4f9fd] px-[35px] py-[25px] rounded-[15px] text-[18px] transition-all">مشاهده ویلا</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center content-center mt-[50px]">
            <li className="ml-[10px]">
              <a href="#" className="w-[149px] rounded-[41px] bg-white h-[63px] py-[9px] px-[17px] text-[24px] font-[100] transition-all flex items-center  text-black justify-end pl-[8px]">قبلی<i className="icon-arrow-right mr-[21px] bg-[#f5f9fd] text-primary p-[16px] rounded-[50%] text-[18px] transition-all"></i></a>
            </li>
            <li className="ml-[10px]">
              <a className="bg-white rounded-[50%] w-[63px] h-[63px] py-[9px] px-[17px] text-primary text-[24px] font-[100] flex items-center justify-center transition-all" href="#">2</a>
            </li>
            <li className="ml-[10px]">
              <a className="bg-white rounded-[50%] w-[63px] h-[63px] py-[9px] px-[17px] text-primary text-[24px] font-[100] flex items-center justify-center transition-all" href="#">3</a>
            </li>
            <li className="ml-[10px]">
              <a className="bg-white rounded-[50%] w-[63px] h-[63px] py-[9px] px-[17px] text-primary text-[24px] font-[100] flex items-center justify-center transition-all" href="#">4</a>
            </li>
            <li className="ml-[10px]">
              <a className="bg-white rounded-[50%] w-[63px] h-[63px] py-[9px] px-[17px] text-primary text-[24px] font-[100] flex items-center justify-center transition-all" href="#">5</a>
            </li>
            <li className="ml-[10px]">
              <a className="bg-white rounded-[50%] w-[63px] h-[63px] py-[9px] px-[17px] text-primary text-[24px] font-[100] flex items-center justify-center transition-all" href="#">...</a>
            </li>
            <li className="ml-[10px]">
              <a className="bg-white rounded-[50%] w-[63px] h-[63px] py-[9px] px-[17px] text-primary text-[24px] font-[100] flex items-center justify-center transition-all" href="#">15</a>
            </li>
            <li>
              <a href="#" className="w-[149px] rounded-[41px] bg-white h-[63px] py-[9px] px-[17px] text-[24px] font-[100] transition-all flex items-center  text-black justify-end pr-[8px]">
                <i className="icon-arrow-left ml-auto bg-[#f5f9fd] text-primary p-[16px] rounded-[50%] text-[18px] transition-all">
                </i>بعدی</a>
            </li>
          </div>
        </div>
      </div>
      <div className="mb-[100px]">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-primary text-[28px] mb-[15px]"> سوالات متداول کاربران <i className="icon-arrow-left text-[35px] translate-x-[-20px] inline-block"></i></h3>
              <p className="text-[#c9c9c9] text-[29px]">قبل از پرسیدن سوالات</p>
              <p className="text-[#c9c9c9] text-[29px]">بگرد شاید پیداش کنی!</p>
              <div className="flex items-center justify-center mt-[50px]">
                <i className="icon-Support text-primary-100 text-[48px] ml-[10px]"></i>
                <div>
                  <p className="text-[20px] font-[300]">پشتیبانی آنلاین</p>
                  <p className="text-[19px] text-[#B9B9B9]">Online Support</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-[#FAFCFE] px-[25px] rounded-[12px] overflow-hidden mb-[15px]">
                <div className="flex items-center justify-between py-[30px] relative cursor-pointer">
                  <h3 className="text-[20px] "><span className="text-[20px] bg-[#d6e6f7] text-[#fff] rounded-[50%] px-[10px] font-[100] ml-[5px] transition-all">?</span>  ساعت ورود و پذیرش ولا در دهکده چند هست؟</h3>
                  <i className="icon-arrow-left text-[#C9C9C9] text-[24px] transition-all"></i>
                </div>
              </div>
              <div className="bg-[#FAFCFE] px-[25px] rounded-[12px] overflow-hidden mb-[15px]">
                <div className="flex items-center justify-between py-[30px] relative cursor-pointer">
                  <h3 className="text-[20px] "><span className="text-[20px] bg-[#d6e6f7] text-[#fff] rounded-[50%] px-[10px] font-[100] ml-[5px] transition-all">?</span>   آیا هزینه بعد از کنسلی به ما بر میگردد؟</h3>
                  <i className="icon-arrow-left text-[#C9C9C9] text-[24px] transition-all"></i>
                </div>
              </div>
              <div className="bg-[#FAFCFE] px-[25px] rounded-[12px] overflow-hidden mb-[15px]">
                <div className="flex items-center justify-between py-[30px] relative cursor-pointer">
                  <h3 className="text-[20px] "><span className="text-[20px] bg-[#d6e6f7] text-[#fff] rounded-[50%] px-[10px] font-[100] ml-[5px] transition-all">?</span>   کنار ساحل دهکده میشه چادر زد ؟</h3>
                  <i className="icon-arrow-left text-[#C9C9C9] text-[24px] transition-all"></i>
                </div>
              </div>
              <div className="bg-[#FAFCFE] px-[25px] rounded-[12px] overflow-hidden mb-[15px]">
                <div className="flex items-center justify-between py-[30px] relative cursor-pointer">
                  <h3 className="text-[20px] "><span className="text-[20px] bg-[#d6e6f7] text-[#fff] rounded-[50%] px-[10px] font-[100] ml-[5px] transition-all">?</span>   محلی برای واقع سازی مکان هایمسافرتی مباشد ؟</h3>
                  <i className="icon-arrow-left text-[#C9C9C9] text-[24px] transition-all"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[100px] relative mb-[150px]">
        <div className="container">
          <div className="mb-[90px] grid grid-cols-2 gap-2">
            <div className="sticky top-[125px]">
              <div className="flex items-center mb-[10px]">
                <i className="icon-graduated inline-block text-[40px] ml-[15px] text-primary"></i>
                <div>
                  <h3 className="font-[300] text-[24px] mb-[3px]">مقالات آموزشی</h3>
                  <p className="text-[#B9B9B9] text-[24px]">Learning Articles</p>
                </div>
              </div>
              <p className="text-[21px] text-[#B9B9B9] leading-[3] mb-[40px]">
                خبار و مقالات وبسایت چادگان مجموعه ای از عناوین آموزشی جهت
                بهره مندی هر چه بیشتر مسافر عزیز در دهکده و گرتن بیشترین و
                بهترین تجربه از مسافران دیگه عناوین مقالات چکیده ای از بیش
                از ۱۵ سال تجربه در دهکده می باشد و خلاصه ای از پاسخ های
                سوالات کاربران می باشد امیدواریم بتوانیم در انتقال این
                تجربیات موفق عمل کنیم تا بهترین تجربه مسافرتتون رو داخل
                دهکده گردشگری جادگان داشته باشید . اخبار و مقالات وبسایت
                چادگان مجموعه ای از عناوین آموزشی
              </p>
              <a href="#" className="bg-primary text-white rounded-[40px] p-[12px] text-[18px] font-[100] table mr-auto">مقالات بیشتر <i className="icon-arrow-left text-[24px] mr-[2px]"></i></a>
            </div>
            <div className="relative">
              <div className="bg-cover bg-center bg-no-repeat bg-fixed w-full h-[662px] relative z-[1]"></div>
              <div className="absolute bottom-[66px] left-[15px] text-center w-[210px] z-[2]">
                <h3 className="text-[20px] mb-[12px] overflow-hidden">وسایل مورد نیاز مسافرت</h3>
                <p className="text-[#CBCBCB] leading-[1.8] text-[19px] mx-auto mb-[18px] w-[95%]">در این مقاله چک لیست مسافرت رو خواهید خواند</p>
                <a href="#" className="text-[#B9B9B9] mr-auto table">مطالعه مقاله <i className="icon-arrow-left-circle text-[25px] mr-[3px]"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pb-[50px] relative">
        <div className="w-[815px] mx-auto">
          <div>
            <h3 className="font-[100] text-[24px] text-center mb-[40px]">دسترسی سریع</h3>
            <div className="grid items-start gap-[20px] grid-cols-2 mb-[60px]">
              <a href="#" className="bg-white justify-between w-full border rounded-[12px] flex items-center px-[25px] py-[35px] transition-all">
                <i className="icon-arrow-right text-[#9D9D9D] text-[35px]"></i>
                <div className="flex text-[#9D9D9D] items-center">
                  <p className="text-[24px] font-[100] transition-all">راهنمای سفر</p>
                  <i className="icon-wheel-bag text-[29px] mr-[28px] transition-all"></i>
                </div>
              </a>
              <a href="#" className="bg-white justify-between w-full border rounded-[12px] flex items-center px-[25px] py-[35px] transition-all">
                <div className="flex text-[#9D9D9D] items-center">
                  <p className="text-[24px] font-[100] transition-all">لیست ویلا ها</p>
                  <i className="icon-home2 text-[29px] mr-[28px] transition-all"></i>
                </div>
                <i className="icon-arrow-left text-[#9D9D9D] text-[35px]"></i>
              </a>
              <a href="#" className="bg-white justify-between w-full border rounded-[12px] flex items-center px-[25px] py-[35px] transition-all">
                <i className="icon-arrow-right text-[#9D9D9D] text-[35px]"></i>
                <div className="flex text-[#9D9D9D] items-center">
                  <p className="text-[24px] font-[100] transition-all">تماس با ما</p>
                  <i className="icon-phone-call text-[29px] mr-[28px] transition-all"></i>
                </div>
              </a>
              <a href="#" className="bg-white justify-between w-full border rounded-[12px] flex items-center px-[25px] py-[35px] transition-all">
                <div className="flex text-[#9D9D9D] items-center">
                  <p className="text-[24px] font-[100] transition-all">قوانین و مقررات</p>
                  <i className="icon-error-triangle text-[29px] mr-[28px] transition-all"></i>
                </div>
                <i className="icon-arrow-left text-[#9D9D9D] text-[35px]"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default productList;
