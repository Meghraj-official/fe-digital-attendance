const levels ={
    1:"first" , 2:"second" , 3:"third", 4:"fourth", 5:"fifth", 6:"sixth" ,7:"seventh" , 8:"eighth"
}
const Info=({data})=>{
    return(
        <>
        <div className="border-2 border-primaryColor-100  mx-5 w-60 bg-primaryColor-50  h-64 mb-14 rounded-lg p-6 ">
            <h1 className="text-center w-full rounded-md text-xl font-poppins font-semibold ">Student Info</h1>
           <div className="flex flex-col text-start my-10 gap-2 text-lg p-2 font-poppins "> 
            <label >Name: {data?.fullName}</label>
            <label className="capitalize">Level: {data?.year?`${levels[data?.year]} year`:`${levels[data?.semester]} semester`}</label>
            <label>Roll no: {data?.rollNo}</label>
            </div>
        </div>
        </>
    )
}
export default Info;