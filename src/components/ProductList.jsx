import React from "react";

function productList() {
  return(
    <div className="relative px-[70px] mt-[70px] mb-[85px] after:content-[''] after:bg-[#f4f9fd] after:absolute">
        <div className="container">
            <div className="flex items-center content-between mx-[45px]">
              <div>
                <i className="icon-cloud-windy text-primary text-[36px] mb-3 block"></i>
                <p className="text-[15px] text-[#8b8b8b]">شنبه</p>
                <p className="text-[29px] leading-7"><span className="text-[17px] inline-block relative">c</span> ۲۳</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default productList;
