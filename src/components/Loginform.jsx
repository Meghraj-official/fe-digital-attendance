"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";



const loginField = [
 
  { name: "Email", type: "text" },
  { name: "Password", type: "password" },
];
const LoginData = (user, index) => {
  return (
    <div key={index} className="flex justify-between mb-3">
      <label>{user.name}</label>
      <Input type={user.type} className="w-72 ml-10 max-sm:w-40" />
    </div>
  );
};

const handleSubmit=()=>{
  
  console.log("hello sandhya")
  alert("hi sandhya")
}


export default function Loginform() {
  return (
    <>
      <div className="h-screen w-screen bg-cyan-500 max-sm:h-screen max-sm:w-screen ">
        <div className="h-20">
        
          <h1 className="text-center w-screen  font-medium text-4xl">
            Digital Attendance
          </h1>
        </div>
        <form>
        <div className="flex justify-center  p-5 rounded-lg ">
          <div className="h-auto w-auto bg-cyan-200 rounded-lg p-5 max-sm:w-80">
            {loginField.map(LoginData)}

            <div className="flex justify-center mt-10 mb-5">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-cyan-500 rounded-xl h-10 w-20 "
              >
                Login
              </button>
              </div>
              
             <div className="flex justify-center">
              <div className="text-center">Dont't have an account?
                <Link href='/signup'className="underline"><p>Sign Up</p></Link></div>
          
             </div>
           
          </div>
        </div>
        </form>
        
        
        
      </div>
    </>
  );
}
