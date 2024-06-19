import React from 'react'

const Sidepanel = () => {
  return (
    <div className="flex flex-col items-center py-6 text-black bg-white border-r border-solid border-black border-opacity-10 max-w-[220px]">
      <div className="flex gap-4 px-10 py-2.5 text-base whitespace-nowrap rounded bg-purple-500 bg-opacity-30">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/373f1d196175964ae09c7fc7d891be3e57d64c8af9149ccff44cb4feb958ec68?"
          className="shrink-0 w-5 aspect-square"
        />
        <div>Overview</div>
      </div>
      <div className="flex gap-3.5 px-5 mt-8 text-base whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/574f793dfe0c5c095b7f54a28f8743639976a2b2a2ce1609f59a983fd2067388?"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Products</div>
      </div>
      <div className="flex gap-5 px-5 mt-10 text-base whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2305f86efba864c09cd171c8dafbfda694d7937217fb4a2951c3b4b795896be7?"
          className="shrink-0 self-start aspect-[0.9] w-[19px]"
        />
        <div>Categories</div>
      </div>
      <div className="flex gap-3.5 px-5 mt-11 text-base whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5589136ab2effe0fae8afea2144f9e17d3e9dd76083168684020ba69b63a7d8?"
          className="shrink-0 w-6 aspect-square"
        />
        <div>Suppliers</div>
      </div>
      <div className="flex gap-3.5 px-5 mt-10 text-base whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b61c2d269649c269d6f220c1fc13fe973bf916f1f0b3541d9daf5f266b61fdbd?"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Orders</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe47fb556a2822a02e6e72f8271bc62321ff63fdbed468fccb19c72a4391fb94?"
        className="self-stretch mt-8 w-full border border-solid aspect-[100] border-black border-opacity-10 stroke-[1.05px] stroke-black stroke-opacity-10"
      />
      <div className="flex gap-3.5 px-5 mt-8 text-base whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5973e302d3806db5018ded4acc271bacc46dcb72c7de45d6a408a5e2e9b3092?"
          className="shrink-0 w-6 aspect-square"
        />
        <div>Reports</div>
      </div>
      <div className="flex gap-3.5 px-5 mt-10 text-base whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eae7d9a3827ae971a9da47d7a62d6b851e30451462619742272cbd9fe06d4c4?"
          className="shrink-0 w-6 aspect-square"
        />
        <div>Settings</div>
      </div>
      <div className="flex flex-col px-4 py-5 mt-14 w-full text-white bg-purple-500 rounded">
        <div className="flex gap-5 justify-between text-xs text-black">
          <div className="justify-center px-2 py-2 bg-orange-50 rounded-sm">
            Test Mode
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b311ee9d851e3820437eeb15622d6a5399f591afc33597d73da4863f76bb44c?"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/811b4590eccc130132fe6b14d3d94e6b90566a524b740b5df234e0733a5a50fb?"
              className="shrink-0 my-auto aspect-[2.13] w-[15px]"
            />
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe47fb556a2822a02e6e72f8271bc62321ff63fdbed468fccb19c72a4391fb94?"
        className="self-stretch mt-32 w-full border border-solid aspect-[100] border-black border-opacity-10 stroke-[1.05px] stroke-black stroke-opacity-10"
      />
      <div className="flex gap-3.5 px-5 mt-5 text-base whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ab34c07174a58743a6adac49cbfe60731bfe3613469542d6578608641be7c8a?"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Logout</div>
      </div>
    </div>
  )
}

export default Sidepanel
