import { useContext, useState } from "react";
import { CheckOut } from "./CheckOut";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

export const CheckOutContainer = () => {
  /*  const [user, setUser] = useState({
        name:"",
        lastName:""
    })
   
    const formSubmit = (e)=>{
        e.preventDefault() 

    }

     const capturaNombre = (event)=>{
        setUser({...user, name:event.target.value})
    }
    const capturaApellido = (event)=>{
        setUser({...user, lastName:event.target.value})
    } 

    const captura =(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
  return (
   <CheckOut formSubmit={formSubmit} captura={captura}/>
  )*/


  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null)

  const {cart, getTotalPrice, clearCart} = useContext(CartContext)

  let totalPrice = getTotalPrice()

  const envioDeFormulario = (event) => {
    event.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPrice
    }

    let ordersCollection = collection(db, "orders")

    addDoc(ordersCollection, order).then( (res)=> setOrderId(res.id))
   
    cart.forEach((product)=>{

      let refDoc = doc(db, "products", product.id )

      updateDoc( refDoc , {stock: product.stock - product.quantity } )
    })

    clearCart()
    

  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <CheckOut orderId={orderId} envioDeFormulario={envioDeFormulario} capturar={capturar} />;

}
