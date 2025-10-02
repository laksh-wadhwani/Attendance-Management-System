import React from "react";

const Navbar = () => {
    return(
        <React.Fragment>
            <div className="w-full fixed top-0 bg-white border border-gray-100 shadow-md box-border py-4 px-8 md:px-16">
                <img src="./logo.svg" alt="NPC Logo" className="w-24 md:w-28" />
            </div>
        </React.Fragment>
    )
}

export default Navbar