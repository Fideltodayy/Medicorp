// import axios from "axios";
// import {useState} from "react"
// import { useFormik } from "formik";
// import * as yup from "yup";
// import FormField from "./FormField";
// import Breadcrumb from '../../components/Breadcrumb';
// import { apiPostUser } from '../../services/TestService';
// import FormField from "./FormField";

// //setting the initial values
// const initialValues = {
//   name: "",
//   age: "",
//   email: "",
//   password: "",
//   confirmPassword: ""
// };

// //Creating the validation schema
// const validationSchema = yup.object().shape({
//   firstName: yup
//     .string()
//     .required("First Name is required")
//     .min(2, "First name must be at least 2 characters"),
//   middleName: yup
//     .string()
//     .required("Middle name is required")
//     .min(2, "Middle name must be at least 2 characters"),
//   lastName: yup
//     .string()
//     .required("Last Name is required")
//     .min(2, "Last name must be at least 2 characters"),
//   age: yup
//     .number()
//     .positive("Age should not be negative)")
//     .integer("Age should be an integer")
//     .max(100, "Maximum Age allowed is 100 years")
//     .min(18, "You must be at least 18 years")
//     .required("Age is required"),
//   email: yup
//     .string()
//     .email("Please enter a valid Email address")
//     .required("Email Address is required"),
//   password: yup
//     .string()
//     .matches(
//       /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
//       "Password must contain at least 8 characters, one uppercase, one number and one special case character"
//     ),
//   confirmPassword: yup
//     .string()
//     .required("Please confirm your password")
//     .when("password", {
//       is: password => (password && password.length > 0 ? true : false),
//       then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
//     })
// });
// const FormAddUser = ({ onSubmit}) => {
//   const [inputs, setInputs] = useState({}); // Use state to store form inputs

//   //using useFormik
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: () => {
//       onSubmit(inputs); // Pass the form inputs to the onSubmit function
//     }
//   })
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setInputs((prevInputs) => ({
//       ...prevInputs,
//       [name]: value
//     }));
//     formik.handleChange(event); // Call the formik handleChange function to update formik state
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await apiPostUser(inputs);
//       console.log(response);
//       setInputs({});
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <Breadcrumb pageName="FormAddUser" />

//       <div className="sm:grid-cols-2 m-10">
//         <div className="flex flex-col gap-9">
//           {/* <!-- Contact Form --> */}
//           <div className=" rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Create User
//               </h3>
//             </div>
//             <form onSubmit={handleFormSubmit} action="#">
//               <div className="p-6.5">
//                 <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                   <div className="w-full xl:w-1/3">
//                     <FormField
//                       label="First Name"
//                       type="text"
//                       placeholder="Please Enter your first name"
//                       {...firstNameProps}
//                     />
//                     {formik.touched.}
//                   </div>

//                   <div className="w-full xl:w-1/3">
//                     <label className="mb-2.5 block text-black dark:text-white">
//                       Middle name
//                     </label>
//                     <input
//                       onChange={handleChange}
//                       type="text"
//                       name="middle_name"
//                       placeholder="Enter your last name"
//                       className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                     />
//                   </div>
//                   <div className="w-full xl:w-1/3">
//                     <label className="mb-2.5 block text-black dark:text-white">
//                       Last name
//                     </label>
//                     <input
//                       onChange={handleChange}
//                       type="text"
//                       name="last_name"
//                       placeholder="Enter your last name"
//                       className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Email <span className="text-meta-1">*</span>
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     name="email"
//                     type="email"
//                     placeholder="Enter your email address"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     User Password
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     name="user_password"
//                     type="text"
//                     placeholder="Select user type"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     User Type
//                   </label>
//                   <div className="relative z-20 bg-transparent dark:bg-form-input">
//                     <select onSelect={handleChange} name="usertype" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
//                       <option value="">select type</option>
//                       <option value="Grader">Grader</option>
//                       <option value="Factory">Factory</option>
//                       <option value="Transporter">Transporter</option>
//                       <option value="Tester">Tester</option>
//                     </select>
//                     <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
//                       <svg
//                         className="fill-current"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g opacity="0.8">
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
//                             fill=""
//                           ></path>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>

//                 <button type='submit' className="flex w-full justify-center rounded bg-app2 p-3 font-medium text-app5">
//                   Add User
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default FormAddUser;
