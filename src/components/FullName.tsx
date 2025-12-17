import { useState } from "react";


export default function FullName(){
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const fullName = firstName + " " + lastName;

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>){
        setLastName(e.target.value);
    }

    return (
        <div className="my-4">
        <h2>Let's check you in!</h2>
        <label className="block mb-2 text-sm font-medium text-gray-700">First name: {' '}
        <input className="border border-gray-300 rounded-md p-2" value={firstName} onChange={handleFirstNameChange}/></label>

        <label className="block mb-2 text-sm font-medium text-gray-700">Last name: {' '}
        <input className="border border-gray-300 rounded-md p-2" value={lastName} onChange={handleLastNameChange} /></label>

        <p>Your ticket will be issued to: {fullName}</p>
        </div>
    );
}