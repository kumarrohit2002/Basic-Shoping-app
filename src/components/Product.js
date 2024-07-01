import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { remove,add } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const Product = ({post}) => {
    const cart=useSelector(state=>state.carts);
    const dispatch=useDispatch();

    const RemoveFromItem=()=>{
        dispatch(remove(post.id));
        toast.success("Item Removed from Cart");
    }

    const AddToCart=()=>{
        dispatch(add(post));
        toast.success("Item Add To Cart");
    }

  

  return (
    <div className="w-[240px] h-[380px] border-2 rounded-md p-2 shadow-md hover:scale-105 bg-white">
        <div>
            <p className="font-semibold text-md">{post.title.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div>
            <p className="text-[12px]">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className="h-[180px] overflow-hidden">
            <img className="h-full w-full" src={`${post.image}`} alt="" />
        </div>
        <div>
            <p >{`$${post.price}`}</p>
        </div>

        <div>
            {
             cart.some((p) => p.id === post.id) ?
            (<div onClick={RemoveFromItem}>
                <button className="bg-blue-400 px-1 rounded">Remove Item</button>

            </div>)
            :
            (<div>
                <button className="bg-blue-300 px-1 rounded" onClick={AddToCart}>
                    Add to Cart
                </button>
            </div>)
            }
        </div>
        
    </div>
  )
}

export default Product;