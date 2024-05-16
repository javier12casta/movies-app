import React from 'react';
import RentalHistory from '../../components/RentalHistory/RentalHistory';


const RentalPage = () => {   

    return (
        <div className="container mx-auto px-4 h-[100vh]">
            <h1 className="text-3xl font-bold mb-4">Rentadas</h1>
            <RentalHistory/>
        </div>
    );
};

export default RentalPage;
