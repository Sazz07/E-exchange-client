import React from 'react';
import { CogIcon, CurrencyPoundIcon, DevicePhoneMobileIcon, HandThumbUpIcon, UserGroupIcon } from '@heroicons/react/24/solid'


const Summary = () => {
    return (
        <div className="grid items-center px-5 py-5 bg-gradient-to-r from-rose-400 to-blue-200">
            <h3 className="text-center text-3xl text-secondary font-bold my-9 mb-3">
                We Served
            </h3>
            <div className="divider w-1/4 mx-auto "></div>
            <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-gradient-to-r from-blue-300 to-purple-200">
                <div className="stat">
                    <div>
                        <UserGroupIcon className="h-12 w-12 text-primary text-center" />
                    </div>
                    <div className="stat-value text-secondary">100+</div>
                    <div className="text-secondary">Happy Customers</div>
                </div>

                <div className="stat">
                    <div>
                        <CurrencyPoundIcon className="h-12 w-12 text-primary text-center" />
                    </div>
                    <div className="stat-value text-secondary">120M+</div>
                    <div className="text-secondary">Annual Revenue</div>
                </div>

                <div className="stat">
                    <div>
                        <HandThumbUpIcon className="h-12 w-12 text-primary text-center" />
                    </div>
                    <div className="stat-value text-secondary">35K</div>
                    <div className="text-secondary">Reviews</div>
                </div>
                <div className="stat">
                    <div>
                        <DevicePhoneMobileIcon className="h-12 w-12 text-primary text-center"></DevicePhoneMobileIcon>
                    </div>
                    <div className="stat-value text-secondary">10k+</div>
                    <div className="text-secondary">Devices</div>
                </div>
            </div>
        </div>
    );
};

export default Summary;