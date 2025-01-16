"use client";
import dynamic from 'next/dynamic';


// Dynamically load the MapComponent to prevent SSR issues
const MapComponent = dynamic(() => import('../../component/MapComponent'), { ssr: false });

const Dashboard = () => {
    return (
        <div className="container">
            <h1>Hello, Shraddha!</h1>
        <MapComponent />

        </div>
    )
}

export default Dashboard;