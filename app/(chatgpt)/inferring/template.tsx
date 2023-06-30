import Openai from "@/components/Openai";

const Template = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Openai />
      <div className="w-full h-full">{children}</div>
    </>
  )
};

export default Template;