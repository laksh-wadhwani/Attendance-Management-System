import React, { useEffect, useState } from "react"
import ScreenHeader from "../Components/ScreenHeader"
import CustomButton from "../Components/CustomButton"
import CustomTable from "../Components/CustomTable"
import Modal from "react-responsive-modal"
import CustomInput from "../Components/CustomInput"

const Employees = ({isSidebarHovered}) => {
    
    const [open, setOpen] = useState(false)
    const [employee, setEmployee] = useState({
        name: "",
        phoneNo: "",
        email: "",
        salary: 0,
        overtime: 0
    })

    const handleChange = (name, value) => {
        setEmployee(prev => ({
            ...employee,
            [name]: value
        }))
    }

    const AddEmployee = () => {
        setOpen(false)
    }

    const columns = [
        { key: "userid", label: "ID" },
        { key: "name", label: "Name" },
        { key: "phoneNo", label: "Number" },
        { key: "email", label: "Email" },
        { key: "salary", label: "Salary" },
        { key: "overtime", label: "Overtime" },
    ]

    return(
        <React.Fragment>
            <div className={`transition-all duration-300 ease-in-out ${isSidebarHovered ? `w-[85%]` : `w-[95%]`} px-16 pb-8 mt-4 flex flex-col gap-12`}>
                <ScreenHeader label="Employees" />

                <CustomButton className="w-fit px-3" onClick={() => setOpen(true)}>Add Employee</CustomButton>

                <CustomTable title="Employees Record" columns={columns} />
            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".8rem" } }}>
                    <div className="w-full flex flex-col items-center gap-8 p-6">
                        <h5 className="font-serif text-2xl uppercase text-black font-semibold">add employee</h5>
                        <div className="w-full flex flex-col gap-3">
                            <CustomInput label="Name" placeholder="Full Name" type="text" value={employee.name} onChange={e => handleChange("name", e.target.value)}/>
                            <CustomInput label="Mobile No" placeholder="Mobile Number" type="text" value={employee.phoneNo} onChange={e => handleChange("phoneNo", e.target.value)}/>
                            <CustomInput label="Email" placeholder="Email" type="text" value={employee.email} onChange={e => handleChange("email", e.target.value)}/>
                            <CustomInput label="Salary" placeholder="Salary" type="number" value={employee.salary} onChange={e => handleChange("salary", e.target.value)}/>
                            <CustomInput label="Overtime" placeholder="Overtime" type="number" value={employee.overtime} onChange={e => handleChange("overtime", e.target.value)}/>
                        </div>
                        <CustomButton className="px-4" onClick={AddEmployee}>ADD</CustomButton>
                    </div>
            </Modal>

        </React.Fragment>
    )
}

export default Employees