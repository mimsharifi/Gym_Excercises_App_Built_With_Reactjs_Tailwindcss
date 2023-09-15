import { InfinitySpin } from "react-loader-spinner";

const loader = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <InfinitySpin color="red" />
    </div>
  )
}

export default loader
