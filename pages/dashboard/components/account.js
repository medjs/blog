

export default function Account(){
    const deleteAccount =()=>{
        if (confirm("Are you sure you want to proceed?")) {
            console.log("User clicked OK");
          } else {
            console.log("User clicked Cancel");
          }
        
    }
    return(
        <div className=" flex justify-center border rounded-md p-7 text-white font-semibold">
            <button onClick={deleteAccount} className="border p-3 rounded-md bg-blue-600 hover:bg-red-600">Delete My Account</button>
        </div>
    )
}