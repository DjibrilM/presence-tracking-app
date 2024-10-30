import { IonTabButton, IonTabs, IonTabBar } from '@ionic/react';
import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

import Employees from '../screens/Employees';
import Account from '../screens/Account';


const Home: React.FC = () => {
  return (
    <IonTabs>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='tab1' href='/app/employees/tab1' >
          <MdOutlineGroups className='text-2xl' />
        </IonTabButton>

        <IonTabButton tab='tab2' href='/app/account/tab2' >
          <MdOutlineAccountCircle className='text-2xl' />
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path="/app/employees/tab1" component={Employees} />
        <Route path="/app/account/tab2" component={Account} />
        <Redirect to="/app/employees/tab1" />
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Home;
