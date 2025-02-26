const Nav = () => {
    return (
        <div className="w-full h-[100px] flex justify-evenly items-center border-b-[1px]">
            <div className="w-md h-[50px] flex items-center justify-center">
                <div className="logo flex justify-evenly items-center w-full h-full">
                    <h1 className="text-3xl font-medium">accredian</h1>
                    <button className="bg-stone-900 w-[130px] cursor-pointer text-2xl font-light text-amber-50 p-2">Course</button>
                </div>
            </div>
            <div className="w-1/2 h-[50px] flex justify-around items-center">
                <h3 className="text-2xl font-normal " >Refer & Earn</h3>
                <h3 className="text-2xl font-normal" >Resources</h3>
                <h3 className="text-2xl font-normal" >about Us</h3>
                <button className="bg-stone-50 w-[130px] cursor-pointer text-2xltext-stone-900 font-light p-2">Login</button>
                <button className="bg-stone-900 w-[180px] cursor-pointer text-2xl font-light text-amber-50 p-2">Try for Free</button>
            </div>
        </div>
    )
}

export default Nav
