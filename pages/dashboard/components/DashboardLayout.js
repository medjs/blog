// components/DashboardLayout.js
import Sidebar from './Sidebar';
import Header from './Header';
import { useEffect, useState } from 'react';
import ProfileComponent from './profile';
import OrdersComponent from './orders';
import AddressComponent from './address';
import AccountComponent from './account';


export default function DashboardLayout({ children }) {
    const [activeComponent, setActiveComponent] = useState('profile');
    useEffect(() => {
      // Retrieve the activeComponent from localStorage if available
      const savedActiveComponent = localStorage.getItem('activeComponent');
      if (savedActiveComponent) {
        setActiveComponent(savedActiveComponent);
      }
    }, []);
  
    const handleSetActiveComponent = (componentName) => {
      setActiveComponent(componentName);
      // Save the activeComponent to localStorage
      localStorage.setItem('activeComponent', componentName);
    }; 
    console.log("active", activeComponent)
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <ProfileComponent />;
      case 'orders':
        return <OrdersComponent />;
      case 'address':
        return <AddressComponent />;
      case 'account':
        return <AccountComponent />;
      default:
        return null;
    }
  };
  return (
    <div className='mx-auto bg-white shadow-md my-6 sm:w-full md:w-2/3 lg:w-2/4'>
        <Header setActiveComponent={handleSetActiveComponent} />
        <main className="p-5">{renderActiveComponent()}</main>
    </div>
  );
}



