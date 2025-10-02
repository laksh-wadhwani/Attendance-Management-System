import React, { useEffect, useState } from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { Sun, Moon, Users, CalendarClock, Clock10, CircleMinus, CircleCheckBig } from 'lucide-react';
import CustomTable from "../Components/CustomTable";

const Dashboard = ({ isSidebarHovered }) => {

    const [currentTime, setCurrentTime] = useState(new Date())
    const hour = currentTime.getHours()

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const UserAnalysis = [
        { icon: Users, label: "total employees", actaulAnalytic: 456 },
        { icon: CircleCheckBig, label: "on time", actaulAnalytic: 360 },
        { icon: CircleMinus, label: "absent", actaulAnalytic: 30 },
        { icon: Clock10, label: "late arrival", actaulAnalytic: 62 },
        { icon: Moon, label: "early departures", actaulAnalytic: 6 },
        { icon: CalendarClock, label: "overtime", actaulAnalytic: 42 },
    ]

    const columns = [
        { key: "userid", label: "ID" },
        { key: "fullname", label: "Employee" },
        { key: "role", label: "Role" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
        { key: "check-in", label: "Check-in" },
        { key: "check-out", label: "Check-out" },
        { key: "work-hours", label: "Work Hours" }
    ]

    const statusStyles = {
        OnTime: "bg-blue-100 text-blue-700",
        Absent: "bg-red-100 text-red-700",
        LateArrival: "bg-yellow-100 text-yellow-700",
        EarlyDepartures: "bg-yellow-100 text-yellow-700",
        OverTime: "bg-blue-100 text-blue-700"
    };

    const rows = [
        {
            userid: "EMP001",
            fullname: "John Doe",
            role: "Software Engineer",
            date: "2025-09-26",
            status: "OnTime",
            "check-in": "09:00 AM",
            "check-out": "05:30 PM",
            "work-hours": "8h 30m",
        },
        {
            userid: "EMP002",
            fullname: "Jane Smith",
            role: "Project Manager",
            date: "2025-09-26",
            status: "LateArrival",
            "check-in": "09:45 AM",
            "check-out": "06:00 PM",
            "work-hours": "8h 15m",
        },
        {
            userid: "EMP003",
            fullname: "Ali Khan",
            role: "UI/UX Designer",
            date: "2025-09-26",
            status: "Absent",
            "check-in": "-",
            "check-out": "-",
            "work-hours": "0h",
        },
        {
            userid: "EMP004",
            fullname: "Maria Gonzalez",
            role: "QA Analyst",
            date: "2025-09-26",
            status: "EarlyDepartures",
            "check-in": "08:55 AM",
            "check-out": "03:30 PM",
            "work-hours": "6h 35m",
        },
        {
            userid: "EMP005",
            fullname: "David Park",
            role: "DevOps Engineer",
            date: "2025-09-26",
            status: "OverTime",
            "check-in": "08:30 AM",
            "check-out": "07:30 PM",
            "work-hours": "11h 0m",
        },
        {
            userid: "E101",
            fullname: "Ali Raza",
            role: "Software Engineer",
            date: "2025-09-26",
            status: "OnTime",
            "check-in": "09:00 AM",
            "check-out": "06:00 PM",
            "work-hours": "9h 00m"
        },
        {
            userid: "E102",
            fullname: "Maria Khan",
            role: "HR Manager",
            date: "2025-09-26",
            status: "LateArrival",
            "check-in": "09:45 AM",
            "check-out": "06:15 PM",
            "work-hours": "8h 30m"
        },
        {
            userid: "E103",
            fullname: "Fahad Ahmed",
            role: "Accountant",
            date: "2025-09-26",
            status: "Absent",
            "check-in": "-",
            "check-out": "-",
            "work-hours": "0h 00m"
        },
        {
            userid: "E104",
            fullname: "Sana Sheikh",
            role: "UI/UX Designer",
            date: "2025-09-26",
            status: "EarlyDepartures",
            "check-in": "08:55 AM",
            "check-out": "04:45 PM",
            "work-hours": "7h 50m"
        },
        {
            userid: "E105",
            fullname: "Usman Tariq",
            role: "Backend Developer",
            date: "2025-09-26",
            status: "OverTime",
            "check-in": "08:30 AM",
            "check-out": "07:15 PM",
            "work-hours": "10h 45m"
        },
        {
            userid: "E106",
            fullname: "Hira Baloch",
            role: "QA Engineer",
            date: "2025-09-26",
            status: "OnTime",
            "check-in": "09:05 AM",
            "check-out": "06:10 PM",
            "work-hours": "9h 05m"
        },
        {
            userid: "E107",
            fullname: "Kamran Ali",
            role: "Support Engineer",
            date: "2025-09-26",
            status: "LateArrival",
            "check-in": "10:00 AM",
            "check-out": "06:00 PM",
            "work-hours": "8h 00m"
        },
        {
            userid: "E108",
            fullname: "Iqra Nadeem",
            role: "Marketing Executive",
            date: "2025-09-26",
            status: "EarlyDepartures",
            "check-in": "09:00 AM",
            "check-out": "04:30 PM",
            "work-hours": "7h 30m"
        }
    ];


    return (
        <React.Fragment>
            <div className={`transition-all duration-300 ease-in-out ${isSidebarHovered ? `w-[85%]` : `w-[95%]`} px-16 pb-8 mt-4 flex flex-col gap-12`}>
                <ScreenHeader label="Dashboard" />

                <div className="w-full grid grid-cols-4 gap-8">
                    <div className="col-span-1 box-shadow box-border flex flex-col justify-between py-10 px-6">

                        <div className="flex items-center gap-2">
                            {(hour >= 6 && hour < 18) ?
                                <Sun size={56} color="#C8CAD5" />
                                :
                                <Moon size={56} color="#C8CAD5" strokeWidth={1} />
                            }
                            <span className="font-sans font-semibold text-2xl text-[#252C58]/35">
                                {currentTime.toLocaleTimeString("en-US")}
                            </span>
                        </div>

                        <span className="font-sans text-xl font-bold text-[#252C58]">
                            Today:<br />
                            {currentTime.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })}
                        </span>
                    </div>


                    <div className="col-span-3 grid grid-cols-3 gap-6">
                        {UserAnalysis.map(data => {
                            const IconComponent = data.icon

                            return (
                                <div className="h-40 box-shadow font-sans font-bold text-[#252C58] flex flex-col justify-between p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-4xl">{data.actaulAnalytic}</span>
                                        <div className="size-14 bg-[#E6EAF5]/40 rounded-full flex justify-center items-center">
                                            <IconComponent size={32} color="red" />
                                        </div>
                                    </div>
                                    <span className="text-2xl capitalize">{data.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <CustomTable title="Attendance Overview" columns={columns} statusStyles={statusStyles} data={rows} showActions={false} />

            </div>
        </React.Fragment>
    )
}

export default Dashboard