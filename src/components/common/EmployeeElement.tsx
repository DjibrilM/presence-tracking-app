
import { IonCard, IonRippleEffect } from '@ionic/react'
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

import { Employee } from '../../lib/util/interfaces';

interface Props extends Employee {
    index: number
}

const EmployeeElement: React.FC<Props> = ({ index, firstName, secondName, profileImageUrl, role, phoneNumber }) => {
    return (
        <div className='flex gap-2 mb-4 px-2 w-full items-center'>
            <p className='text-sm text-gray-500 dark:text-white/60'>{index === 0 ? "#" : (index + 1 + ".")}</p>
            <IonCard className="p-2 m-0 w-full items-center justify-between flex
          border border-black/10 dark:border-white/5 relative overflow-hidden rounded-xl ion-activatable">
                <div className="flex">
                    <IonRippleEffect />
                    <div className="h-10 bg-slate-400 overflow-hidden rounded-full w-10">
                        <img className={profileImageUrl} alt="avatar" />
                    </div>

                    <div className="flex ml-2 relative top-1 flex-col">
                        <strong className='dark:text-white/80'>{firstName} {secondName}</strong>
                        <p className='text-gray-400 text-[12px]'>{role.length > 10 ? role.slice(0, 10) + '...' : role} / {phoneNumber}</p>
                    </div>
                </div>

                <div className="">
                    <div className="dark:bg-white/15 bg-black/15 shadow-lg relative right-2 h-8 w-8 flex items-center justify-center rounded-full">
                        <IoIosArrowForward className='text-white' />
                    </div>
                </div>
            </IonCard>
        </div>

    )
}

export default EmployeeElement