import React from 'react';

const BenefitCard = ({ title, description, image }) => {
    return (
        <div className="card w-full  bg-white shadow-md border hover:shadow-lg transition-all">
            <div className="card-body   flex flex-col sm:flex-row items-start gap-4">
                <img src={image} alt={title} className="w-16 h-16  object-contain" />
                <div className="divider divider-horizontal hidden sm:flex my-0" />
                <div>
                    <h3 className="card-title text-gray-600 text-lg mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BenefitCard;