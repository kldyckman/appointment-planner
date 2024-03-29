import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] =  useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
 

  /* Define a callback function that, 
  given a name, phone number, and email, 
  adds a new contact object with that data 
  to the array of contacts*/
  const addContact = (name, phone, email ) => {
    setContacts( prev => [...prev, {name, phone, email}]);
  };


  /*Define a callback function that, given a title, 
  contact, date, and time, adds a new appointment object 
  with that data to the array of appointments */
  const addAppointment = (title, contact, date, time) => {
    setAppointments( prev => [...prev, {title, contact, date, time}]);
  };


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
              addContact={addContact}
              contacts={contacts}
             />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
             />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
