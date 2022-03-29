import InputField from "./FormInputComponent/InputField";
import TextInput from "./FormInputComponent/TextInput";


const FormComponent = () => {
  return (
    <>
      <InputField label={"Name"} name={"name"} placeholder={"Enter your name"} />
      <InputField label={"Email"} name={"email"} placeholder={"Enter your email"} />
      <TextInput label={"Message"} name={"message"} placeholder={"Enter your message"} />

    </>
  );
};

export default FormComponent;