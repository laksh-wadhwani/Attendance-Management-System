import React, { useState } from "react";
import { LayoutDashboard, UsersRound, CalendarClock, ClipboardList, UserRoundCog, LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Sidebar = ({onHoverChange}) => {

    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState("Dashboard");

    const menuItems = [
        { id: "Dashboard", icon: LayoutDashboard, label: "Dashboard", route: "/" },
        { id: "Employees", icon: UsersRound, label: "Employees", route: "/employees" },
        { id: "Attendance", icon: CalendarClock, label: "Attendance Sheet", route: "/attendance-sheet" },
        { id: "Report", icon: ClipboardList, label: "Report", route: "/report" },
        { id: "Setting", icon: UserRoundCog, label: "Setting" },
        { id: "Logout", icon: LogOut, label: "Logout" }
    ];

    const handleButtonClick = item => {
        setActiveButton(item.id);
        navigate(`${item.route}`)
    };

    return (
        <React.Fragment>
            <div className="group fixed top-4 left-4 h-[95%] w-[5%] hover:w-[15%] bg-white shadow-md rounded-md box-border py-12 px-4 hover:px-6 flex flex-col gap-10 transition-all duration-250 ease-in-out"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
            >

                <img src="./logo.svg" alt="NPC Logo" className="w-30 group-hover:px-2" />

                <div className="w-full flex flex-col gap-8">
                    {menuItems.map(item => {
                        const IconComponent = item.icon;
                        const isActive = activeButton === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleButtonClick(item)}
                                className={`group/menu flex items-center gap-2 font-serif text-base p-2 size-fit rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-red-200
                                ${isActive? `text-red-500`:`text-[#A3AED0]`}`}>
                                <IconComponent
                                    size={24}
                                    className={`transition-colors duration-300 ${isActive ? 'stroke-red-500' : 'stroke-[#A3AED0]'}`}/>
                                <span className="whitespace-nowrap hidden group-hover:block transition-all duration-300">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

            </div>
        </React.Fragment>
    )
}

export default Sidebar