import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
|import FormField from './FormField';

const initialValues = {
    firstName : "",
    middleName : "",
    lastName : "",
    age : "",
    email : "",
    password : "",
    confirmPassword : ""
};

const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),
    middleName: yup
        .string()
        .required("Second name is required")
        .min(2, "Second name ,ust be at least 2 characters"),
    lastName: yup
        .string()
        .required("Second name is required")
        .min(2, "Last name must be at least 2 characters"),
    age: yup
        .number()
        .required("Please supply your age")
        .min(18, "You must be at least 18 years")
        .max(100, "You must be at most 100 years"),
    email: yup
        .string()
        .email()
        .required("Email is required"),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
          })

});

//form function component
const FormAddUser1 = ({onSubmit}) => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const firstNameProps = formik.getFieldProps("firstName");
    const middleNameProps = formik.getFieldProps("middleName");
    const lastNameProps = formik.getFieldProps("lastName");
    const ageProps = formik.getFieldProps("age");
    const emailProps = formik.getFieldProps("age");
    const passwordProps = formik.getFieldProps("password");
    const confirmPasswordProps = formik.getFieldProps("confirmPassword");


    return (
        <form onSubmit={formik.handleChange}>
            {/* First Name */}
            <FormField
                label="First Name"
                type="text"
                placeholder="Please enter your first name"
                {...firstNameProps}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
                ) : null 
            }
            {/* Middle Name */}
            <FormField
                label="Second Name"
                type="text"
                placeholder="Please enter your second name if any."
                {...middleNameProps}
            />
            {formik.touched.middleName && formik.errors.middleName ? (
                <div>{formik.errors.middleName}</div>
                ) : null
            }
            <FormField
                label="Last Name"
                type="text"
                placeholder="Please enter your last name if any."
                {...lastNameProps}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
                ) : null
            }
        </form>
    )
}

export default FormAddUser1