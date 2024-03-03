const levels ={
    1:"first" , 2:"second" , 3:"third", 4:"fourth", 5:"fifth", 6:"sixth" ,7:"seventh" , 8:"eighth"
}
const Info=({data})=>{
    return(
        <>
        <div className="border border-primaryColor-600 bg-primaryColor-100 min-w-fit max-w-[200px] rounded-lg py-3 px-2  flex flex-col h-min justify-center gap-1 lg:gap-3 lg:p-6">
            <h1 className="text-center w-full rounded-md text-sm lg:text-xl font-poppins font-semibold ">Student Info</h1>
           <div className="flex flex-col text-start  gap-2 text-sm lg:text-lg p-2 font-poppins "> 
            <label >Name: {data?.fullName}</label>
            <label className="capitalize">Level: {data?.year?`${levels[data?.year]} year`:`${levels[data?.semester]} semester`}</label>
            <label>Roll no: {data?.rollNo}</label>
            </div>
        </div>
        </>
    )
}
export default Info;
