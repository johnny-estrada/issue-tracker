import HeaderTitle from "../components/header/HeaderTitle";
import Sidebar from "../components/sidebar/Sidebar";
import FormContainer from "../components/form/FormContainer";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import LabeledInput from "../components/form/LabeledInput";
import Header from "../components/header/Header";
import LabeledTextArea from "../components/form/LabeledTextArea";
import Button from "../components/Button";

const TestForm = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col h-screen lg:ml-[288px] mb-20 lg:mb-0">
        <Header>
          <></>
          <div className="flex flex-1 items-end justify-center gap-4">
            <button className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 rounded-full">
              <ArrowLongLeftIcon className="w-7 h-7" />
            </button>
            <HeaderTitle title="Create project" />
          </div>
        </Header>
        <section className="px-3 lg:px-8 py-1 lg:py-8 max-w-2xl mx-auto shadow-sm h-full">
          <FormContainer>
            <LabeledInput
              label={"Client"}
              type="text"
              name={"client"}
              onChange={() => {}}
            />
            <LabeledInput
              label={"Project name*"}
              type="text"
              name={"title"}
              onChange={() => {}}
            />
            <LabeledTextArea
              label={"Project description*"}
              rows={4}
              name={"title"}
              onChange={() => {}}
            />
            <div className="flex justify-between">
              <LabeledInput
                label={"Status"}
                type="text"
                name={"client"}
                onChange={() => {}}
              />
              <LabeledInput
                label={"Project hours"}
                type="number"
                name={"client"}
                onChange={() => {}}
              />
            </div>
            <div className="flex justify-between flex-shrink">
              <LabeledInput
                label={"Start date"}
                type="date"
                name={"client"}
                onChange={() => {}}
              />
              <LabeledInput
                label={"Target date"}
                type="date"
                name={"client"}
                onChange={() => {}}
              />
            </div>

            <LabeledInput
              label={"Members"}
              type="number"
              name={"client"}
              onChange={() => {}}
            />

            <Button
              label="Cancel"
              color="white"
              tColor="black"
              onClick={() => console.log("Form button clicked!")}
            />
            <Button
              label="Create"
              color="orange"
              tColor="white"
              onClick={() => console.log("Form button clicked!")}
            />
          </FormContainer>
        </section>
      </div>
    </>
  );
};

export default TestForm;
