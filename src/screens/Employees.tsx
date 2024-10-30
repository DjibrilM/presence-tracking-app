import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSpinner,
    IonButton
} from "@ionic/react";

import EmployeeElement from "../components/common/EmployeeElement";
import { useQuery } from "@tanstack/react-query";
import { keryKeys } from "../lib/util/queryKeys";
import axios from "axios";
import { backendUrl } from "../lib/util/constant";
import Visible from "../components/common/Visibility";
import { Employee } from "../lib/util/interfaces";
import { TbError404Off } from "react-icons/tb";
import { useState } from "react";

const queryFn = async () => {
    try {
        const { data } = await axios.get<Employee[]>(`${backendUrl}user/find/all`);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }

}

const Employees = () => {
    const { error, isLoading, data, refetch } = useQuery({ queryKey: [keryKeys.users], queryFn: queryFn })
    const [research, setResearch] = useState("");
    console.log({ data, error, isLoading });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="">Employees</IonTitle>
                </IonToolbar>
            </IonHeader>

            <div className="dark:bg-white/10 px-3 bg-black/10 h-12 flex items-center rounded-lg mx-2 mb-4 mt-2">
                <input onChange={(e) => setResearch(e.target.value)} placeholder="Search" type="text" className="w-full text-sm outline-none text-gray-100 h-full bg-transparent" />
            </div>

            <IonContent>
                <Visible condition={isLoading}>
                    <div className="flex justify-center my-4">
                        <IonSpinner color={'medium'} />
                    </div>
                </Visible>

                <Visible condition={Boolean(data)}>
                    {data?.filter((element) => (element.firstName + element.secondName).toUpperCase().includes(research.toUpperCase()))?.map((employee, index) => <EmployeeElement {...employee} index={index} />)}
                </Visible>

                <Visible condition={!!error}>
                    <div className="flex flex-col justify-center my-10 items-center">
                        <TbError404Off className="text-6xl text-gray-700 dark:text-gray-400" />
                        <p>Failed to load the data </p>
                        <IonButton onClick={() => { refetch() }} className="mt-4">
                            <p className="text-white">Reload</p>
                        </IonButton>
                    </div>
                </Visible>
            </IonContent>
        </IonPage>
    );
};

export default Employees;
