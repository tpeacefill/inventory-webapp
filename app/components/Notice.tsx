import React from 'react'

const Notice = () => {
  return (
    <div className="flex flex-col px-4 py-5 text-white bg-purple-500 rounded max-w-[202px] mb-10">
      <div className="flex gap-5 justify-between text-xs text-black">
        <div className="justify-center px-2 py-2 bg-orange-50 rounded-sm">
          Test Mode
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b311ee9d851e3820437eeb15622d6a5399f591afc33597d73da4863f76bb44c?apiKey=4980a875853b463badfbb12abdca8126&"
          className="shrink-0 my-auto w-2.5 aspect-square fill-white"
        />
      </div>
      <div className="mt-4 text-xs leading-5">
        You are in test mode. To gain full access to the inventory management
        features,please verify your account.{" "}
      </div>
      <div className="flex flex-col justify-center px-6 py-2 mt-4 w-full text-xs leading-3 bg-purple-500 border border-white border-solid">
        <div className="flex gap-1.5 pr-2">
          <div>Begin Process</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/811b4590eccc130132fe6b14d3d94e6b90566a524b740b5df234e0733a5a50fb?apiKey=4980a875853b463badfbb12abdca8126&"
            className="shrink-0 my-auto aspect-[2.13] w-[15px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Notice
