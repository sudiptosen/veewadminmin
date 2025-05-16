import React, {PropsWithChildren, useEffect, useRef, useState} from "react";
import InfoItem from "@/components/infoItem";
import ServiceConfig from "@/hooks/service.config";
import axios from "axios";
import Working from "@/components/working";
import Alert from "@/components/alert";
import Button from "@/components/button";

interface ContactUsFormProps {
  isVisible?: boolean;
  onHide: () => void;
}

function ContactUsForm(props: PropsWithChildren<ContactUsFormProps>) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveGood, setIsSaveGood] = useState(false);
  const [isSaveBad, setIsSaveBad] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    instruction: '',
  });

  const {firstName, lastName, companyName, email, phone, instruction} = formValues;

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email); // Basic email regex
    const isPhoneNumberValid = /^[2-9]{1}\d{2}-\d{3}-\d{4}$/.test(phone);
    const isFormValid = (firstName && lastName && companyName && (isEmailValid || isPhoneNumberValid)) == true;

    setIsFormValid(isFormValid);
  }, [formValues]);

  const formatPhoneNumber = (value:any) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberMatch = phoneNumber.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    return `${phoneNumberMatch[1]}-${phoneNumberMatch[2]}-${phoneNumberMatch[3]}`.replace(/-+$/g, '');
  };

  const handleInputChange = (e: any ) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = formatPhoneNumber(value);
      console.log(`formatted value(${value})`);
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const {onHide} = props;
  const formRef = useRef(null);

  function getOverlayWait() {
    return <div className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-10">
      <Working small={true}></Working>
    </div>
  }

  function onClose() {
    setIsSaveGood(false);
    setIsSaveBad(false);
    onHide();
  }

  function getOverlaySuccess() {
    return <div className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-10">
      <Alert type={"success"} message={"Got it! We will get back to you asap. Thanks."} onClose={onClose}></Alert>
    </div>
  }

  function getOverlayError() {
    return <div className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-10">
      <Alert type={"danger"} message={"Failed to save your request. Please email app@veew.io"} onClose={onClose}></Alert>
    </div>
  }

  const submitForm = async (e: any) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      setIsLoading(true);
      const result = await axios.post(ServiceConfig.URL_SAVE_CONTACT_US, JSON.parse(JSON.stringify(data)),{headers: {'accesstoken': "veewio"}})
        .then((response) => {
          return response.data.result??false;
        })
        .catch((error) => {
          return false;
        });

      setIsSaveGood(result);
      setIsSaveBad(!result);
    } catch (error) {
      console.error(error);
      setIsSaveGood(false);
      setIsSaveBad(true);
    } finally {
      setIsLoading(true);
    }
  };

  const input =
    <>
      <InfoItem title={'Strictly used for your communication.'} ></InfoItem>
      {
          <form ref={formRef} onSubmit={submitForm} className="mt-4 min-w-full md:min-w-[300px]">
            {/* First Name */}
            <div className="mb-2 md:mb-6">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="firstName"
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Last Name */}
            <div className="mb-2 md:mb-6">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="lastName"
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Company Name */}
            <div className="mb-2 md:mb-6">
              <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900">
                Company Name
              </label>
              <input
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleInputChange}
                name="companyName"
              />
            </div>
            {/* Email */}
            <div className="mb-2 md:mb-6">
              <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email"
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-2 md:mb-6">
              <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">
                Phone
              </label>
              <input
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Instructions */}
            <div className="mb-2 md:mb-6">
              <label htmlFor="instruction" className="block mb-2 text-sm font-medium text-gray-900">
                Instructions
              </label>
              <textarea
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleInputChange}
                name="instruction"
              />
            </div>

            <div className="flex flex-row justify-center p-2">
              {/* Submit and Cancel Buttons */}
              <Button kind="secondary" type="button" caption="Cancel" onClick={onHide} otherStyles="float-right mr-2"></Button>
              <Button kind="primary" type="submit" caption="Submit" otherStyles="float-right" disabled={!isFormValid} ></Button>
            </div>
          </form>
        }
    </>;

  return <>
    {isLoading? getOverlayWait(): null}
    {isSaveGood? getOverlaySuccess(): null}
    {isSaveBad? getOverlayError(): null}
    {input}
  </>;
}

export default ContactUsForm;
