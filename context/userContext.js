import React from 'react';
import { ref, get } from 'firebase/database';
import { useQuery } from 'react-query';
import { useSession } from 'next-auth/react';
import { database } from '../pages/api/firestore/firestore';


// Create a function to fetch orders from Firebase
const fetchOrders = async () => {
  try {
    const dbRef = ref(database, 'orders');
    const snapshot = await get(dbRef);
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error; // Rethrow the error to be handled by React Query
  }
};

export function OrderProvider() {
    const {data: session} = useSession()
    console.log("yew session", session)
  // Use useQuery to fetch and manage the orders data
  const { data, error, isLoading } = useQuery('orders', fetchOrders);

  console.log('Orders Data:', data);

  if(isLoading){
    console.log('is loading')
    return <p>Loading...</p>
  }

  if(error){
    console.log('error order', error)
    return <p>{error}</p>
  }

  if(data){
    console.log('fetching data')
    return(
        
            data.map((res, i)=>
            session.id === res.idCustomer &&
            
            (
                <div key={i}>
                    <p>{res.shippingAddress}</p>
                </div>
            )
            
            
            )
        
    )
  }
}
