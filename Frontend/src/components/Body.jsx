import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import NavBar from "./NavBar";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store)=>store.user);
   
    useEffect(()=>{
        const fetchUser = async () =>{
            try{
                const res = await axios.get(BASE_URL + "/profile/view",{
                    withCredentials:true,
                });
                dispatch(addUser(res.data));
            }catch(err){
                if(err.status === 401 || err.response?.status === 401){
                    // Clear any stale user data and redirect to landing
                    dispatch(addUser(null));
                    navigate("/"); 
                }
                console.log(err);
            }
        }
        
        // Only fetch if we don't have user data
        if(!userData){
            fetchUser();
        }
    },[userData, dispatch, navigate])
    return (
       <div>
        <NavBar/>
        <Outlet/>
       </div>
    )
}

export default Body;