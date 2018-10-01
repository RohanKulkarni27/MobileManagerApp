

export const employeeUpdate = ({props,value})=>{
    return  {
        type:'Employee_Update',
        payload:{props,value}
    }
}