import React from "react"
import ScreenHeader from "../Components/ScreenHeader"

const Report = ({isSidebarHovered}) => {
    return(
        <React.Fragment>
            <div className={`transition-all duration-300 ease-in-out ${isSidebarHovered ? `w-[85%]` : `w-[95%]`} px-16 pb-8 mt-4 flex flex-col gap-12`}>
                <ScreenHeader label="Report" />

            </div>

        </React.Fragment>
    )
} 

export default Report