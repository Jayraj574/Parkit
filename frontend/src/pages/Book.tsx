
const slots = [ 1,2,0,1,0,0,3, ];

const Book = () => {

    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-5 justify-items-center 
        divide-x-4 divide-theme2 divide-y-4  max-w-auto p-10 m-10">
                {slots.map((i)=>{
                    if(i===1)
                        {return(
                            <div className=" relative justify-items-center bg-theme1 text-white hover:cursor-not-allowed
                            rounded-2xl border-7 border-theme1 border-dashed 
                            outline-7 outline-theme1 outline-offset-7 w-xs h-xl p-7 m-10">
                                <p className="text-7xl">Reserved</p>
                            </div>)
                        }
                    else if ( i===2)
                        {return(
                            <div className=" relative justify-items-center bg-theme1 text-white hover:cursor-not-allowed
                            rounded-2xl border-7 border-theme1 border-dashed 
                            outline-7 outline-theme1 outline-offset-7 w-xs h-xl p-7 m-10">
                                <p className="text-7xl">Occupied</p>
                            </div>)
                        }
                    else{return(
                        <div className=" relative justify-items-center bg-white hover:rounded-sm hover:bg-hover1 hover:cursor-pointer
                        rounded-2xl border-7 border-theme1 border-dashed 
                        outline-7 outline-theme1 outline-offset-7 w-xs h-xl p-7 m-10">
                            <p className="text-7xl">free</p>
                        </div>)
                    }
                    
                })}
        </div>
    )
}

export default Book;
