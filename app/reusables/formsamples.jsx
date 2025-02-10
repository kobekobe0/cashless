'use client'
import InputField from "@/components/reusables/labels/input";
import { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    password: "",
    disabledField: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100">
      <InputField 
        label="Full Name" 
        description="Sample Description"
        name="name"
        placeholder="Enter your name" 
        value={formData.name} 
        onChange={handleChange} 
        required
      />

      <InputField 
        label="Email Address" 
        name="email"
        placeholder="Enter your email" 
        value={formData.email} 
        onChange={handleChange} 
        type="email"
        required
      />

      <InputField 
        label="Age" 
        name="age"
        placeholder="Enter your age" 
        value={formData.age} 
        onChange={handleChange} 
        type="number"
        min={18}
        max={60}
        required
      />

      <InputField 
        label="Date of Birth" 
        name="dob"
        placeholder="Enter your birthdate" 
        value={formData.dob} 
        onChange={handleChange} 
        type="date"
        required
      />

      <InputField 
        label="Password" 
        name="password"
        placeholder="Enter your password" 
        value={formData.password} 
        onChange={handleChange} 
        type="password"
        required
      />

      <InputField 
        label="Disabled Field"
        name="disabledField"
        placeholder="This field is disabled"
        value=""
        onChange={() => {}}
        disabled={true}
      />

      <button 
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default FormExample;
