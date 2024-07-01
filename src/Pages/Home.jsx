import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import RingLoader from "react-spinners/RingLoader";

const Home = () => {
    const apiUrl="https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    const [posts,setPost]=useState([]);


    async function featchProductData(){
        setLoading(true);
        try{
            const res=await fetch(apiUrl);
            const productData=await res.json();
            setPost(productData);
            console.log("Post is: ");
            console.log(posts);
        }catch(error){
            console.log("Error in fetch Data");
        }
        setLoading(false);
    }
    useEffect(()=>{
        featchProductData()
    },[])


  return (
    <div className="flex justify-center mt-5">
        <div className="grid grid-cols-4 gap-5 w-[1000px]">
            {
                loading?(<div><RingLoader color="red" size={150}/></div>):(
                    posts.length>0?(
                        posts.map((post)=>(
                            <Product key={post.id} post={post}/>
                        ))
                    ):(
                        <div>No No Post</div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Home;