import React from "react";
import styles from "./horizontal.module.scss";
import NextLink from "next/link";
import { additem, selectCartState } from "redux/cartSlice";
import { IProduct } from "types/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import HeartIcon from "../icons/heart";
import Image from "next/image";
type CarDProps = {
  bgColor: string;
  title: string;
  desc: string;
  image: string;
  slug: string;
  product: IProduct;
  price: number;
  sale_price:number;
};


export default function HorizontalCard({
  bgColor,
  title,
  desc,
  image,
  slug,
  product,
  price,
  sale_price 
} : CarDProps) {



  const { cart: { cartItems } } = useSelector(selectCartState);
  const dispatch = useDispatch();


  /* Add products to cart  */
  const addToCartHandler = async (product: IProduct) => {

    const existItem = cartItems.find((x: any) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }

    dispatch(additem({ ...product, quantity }))

  };



  if (!desc) {
    return (

      <div
        className={styles.horizontalCard}
        style={{ backgroundColor: bgColor || "" }}
      >
        
      </div>
    );
  }


  return (
    <div
      className={styles.horizontalCard}
      style={{ backgroundColor: bgColor || "" }}
    >
      

      <button className={styles.addToCart}
        onClick={() => addToCartHandler(product as IProduct)}>
        Add to cart
      </button>

   
    </div>
  );
}
