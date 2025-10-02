import React from "react";
import Header from "../assets/header.svg"

const ScreenHeader = ({label}) => {
    return(
        <React.Fragment>
           <div className="w-full flex items-center justify-between bg-white rounded-md shadow-md py-3 px-16">

                <div className="w-fit flex items-center">
                    <h3 className="font-serif text-3xl">{label || `Label`}</h3>
                    <img src={Header} className="size-12 relative right-3 bottom-3"/>
                </div>

                <div className="flex items-center gap-2">

                    <div className="bg-white border border-gray-200 rounded-full shadow-lg size-14 flex items-center justify-center">
                        <span className="font-serif text-xl font-bold text-shadow-md">SW</span>
                    </div>
                    
                    <div className="flex flex-col font-serif text-sm">
                        <span className="capitalize">admin</span>
                        <span>suranderw@gmail.com</span>
                    </div>
                </div>

           </div>
        </React.Fragment>
    )
}

export default ScreenHeader