import React from "react";
import Notice from "./Notice";

const Sidepanel = () => {
  
  return (
    <div className="hidden md:flex md:w-[70px] lg:w-64 bg-white border-r border-black border-opacity-10 flex-col items-center pt-2 border-solid max-w-[220px] sticky">
      {/* SidepaneButtons */}
      <div className="flex flex-col w-full items-center">
        <div className="justify-center items-center flex h-14 mt-auto w-full">
          <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 md:justify-center md:pl-0 lg:pl-9 lg:justify-start rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M8.96061 1.00015H1.43535C1.18655 1.00015 1 1.18669 1 1.43549V8.77408C1 9.02287 1.18654 9.20942 1.43535 9.20942H8.77403C9.02283 9.20942 9.20938 9.02288 9.20938 8.77408V1.24891C9.20938 1.12463 9.08509 1.00012 8.96059 1.00012L8.96061 1.00015Z"
                stroke="black"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.7511 1.00015H13.2259C12.9771 1.00015 12.7905 1.18669 12.7905 1.43549V8.77408C12.7905 9.02287 12.9771 9.20942 13.2259 9.20942H20.5646C20.8134 9.20942 20.9999 9.02288 20.9999 8.77408V1.24891C20.9999 1.12463 20.8754 1.00012 20.7511 1.00012L20.7511 1.00015Z"
                stroke="black"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.96061 12.7908H1.43535C1.18655 12.7908 1 12.9773 1 13.2261V20.5647C1 20.8135 1.18654 21.0001 1.43535 21.0001H8.77403C9.02283 21.0001 9.20938 20.8135 9.20938 20.5647V13.0396C9.20938 12.9151 9.08509 12.7908 8.96059 12.7908L8.96061 12.7908Z"
                stroke="black"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.7509 12.7908H13.2256C12.9768 12.7908 12.7903 12.9773 12.7903 13.2261V20.5647C12.7903 20.8135 12.9768 21.0001 13.2256 21.0001H20.5643C20.8131 21.0001 20.9997 20.8135 20.9997 20.5647V13.0396C20.9997 12.9151 20.8752 12.7908 20.7509 12.7908L20.7509 12.7908Z"
                stroke="black"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Conditionally hide based on container width */}
            <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
              Overview
            </p>
          </button>
        </div>
        <div className="justify-center items-center flex h-14 mt-auto w-full">
          <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 md:justify-center md:pl-0 lg:pl-9 lg:justify-start rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.25 1.40637L21 6.28137V18.4689L11.25 23.3322L1.5 18.4689V6.28137L11.25 1.40637ZM18.5742 6.75012L11.25 3.09387L8.42578 4.50012L15.7031 8.17981L18.5742 6.75012ZM11.25 10.4064L14.0391 9.02356L6.75 5.34387L3.92578 6.75012L11.25 10.4064ZM3 7.96887V17.5314L10.5 21.2814V11.7189L3 7.96887ZM12 21.2814L19.5 17.5314V7.96887L12 11.7189V21.2814Z"
                fill="black"
              />
            </svg>
            {/* Conditionally hide based on container width */}
            <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
              Products
            </p>
          </button>
        </div>

        <div className="justify-center items-center flex h-14  mt-auto w-full">
          <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 md:justify-center md:pl-0 lg:pl-9 lg:justify-start rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
            >
              <path
                d="M4.34272 9.49387L9.38889 1.41565L14.4351 9.49387H4.34272Z"
                stroke="black"
                stroke-width="1.5"
              />
              <rect
                x="0.75"
                y="12.9452"
                width="6.94444"
                height="6.94"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M18.2501 16.4152C18.2501 18.3312 16.6959 19.8852 14.7779 19.8852C12.8599 19.8852 11.3057 18.3312 11.3057 16.4152C11.3057 14.4991 12.8599 12.9452 14.7779 12.9452C16.6959 12.9452 18.2501 14.4991 18.2501 16.4152Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
            {/* Conditionally hide based on container width */}
            <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
              Categories
            </p>
          </button>
        </div>

        <div className="justify-center items-center flex h-14  mt-auto w-full">
          <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 md:justify-center md:pl-0 lg:pl-9 lg:justify-start rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_585_678)">
                <path
                  d="M17.25 17.25V19.5H6.375C5.47989 19.5 4.62145 19.1444 3.98851 18.5115C3.35558 17.8786 3 17.0201 3 16.125C3 15.2299 3.35558 14.3715 3.98851 13.7385C4.62145 13.1056 5.47989 12.75 6.375 12.75H6.75V11.25H6.375C5.08207 11.25 3.84209 11.7636 2.92785 12.6779C2.01361 13.5921 1.5 14.8321 1.5 16.125C1.5 17.4179 2.01361 18.6579 2.92785 19.5721C3.84209 20.4864 5.08207 21 6.375 21H17.25V23.25H23.25V17.25H17.25ZM21.75 21.75H18.75V18.75H21.75V21.75Z"
                  fill="black"
                />
                <path
                  d="M15.75 16.5H14.25V14.25H9.75V16.5H8.25V14.25C8.25 13.8522 8.40804 13.4706 8.68934 13.1893C8.97064 12.908 9.35218 12.75 9.75 12.75H14.25C14.6478 12.75 15.0294 12.908 15.3107 13.1893C15.592 13.4706 15.75 13.8522 15.75 14.25V16.5ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.74751 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.2494 10.3466 14.0122 10.9185 13.5903 11.3403C13.1685 11.7622 12.5966 11.9994 12 12ZM12 9C11.8517 9 11.7067 9.04399 11.5833 9.1264C11.46 9.20881 11.3639 9.32594 11.3071 9.46299C11.2503 9.60003 11.2355 9.75083 11.2644 9.89632C11.2933 10.0418 11.3648 10.1754 11.4697 10.2803C11.5746 10.3852 11.7082 10.4567 11.8537 10.4856C11.9992 10.5145 12.15 10.4997 12.287 10.4429C12.4241 10.3861 12.5412 10.29 12.6236 10.1667C12.706 10.0433 12.75 9.89834 12.75 9.75C12.75 9.55109 12.671 9.36032 12.5303 9.21967C12.3897 9.07902 12.1989 9 12 9Z"
                  fill="black"
                />
                <path
                  d="M17.625 3H6.75V0.75H0.75V6.75H6.75V4.5H17.625C18.5201 4.5 19.3785 4.85558 20.0115 5.48851C20.6444 6.12145 21 6.97989 21 7.875C21 8.77011 20.6444 9.62855 20.0115 10.2615C19.3785 10.8944 18.5201 11.25 17.625 11.25H17.25V12.75H17.625C18.9179 12.75 20.1579 12.2364 21.0721 11.3221C21.9864 10.4079 22.5 9.16793 22.5 7.875C22.5 6.58207 21.9864 5.34209 21.0721 4.42785C20.1579 3.51361 18.9179 3 17.625 3ZM5.25 5.25H2.25V2.25H5.25V5.25Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_585_678">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/* Conditionally hide based on container width */}
            <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
              Suppliers
            </p>
          </button>
        </div>

        <div className="justify-center items-center flex h-14 mt-auto w-full">
          <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 md:justify-center md:pl-0 lg:pl-9 lg:justify-start rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.371 19.827L20.211 17.031L19.585 16.404L17.371 18.587L16.416 17.612L15.789 18.244L17.371 19.827ZM6.77 8.731H17.232V7.731H6.769L6.77 8.731ZM18 22.116C16.886 22.116 15.941 21.7277 15.165 20.951C14.3883 20.175 14 19.23 14 18.116C14 17.002 14.3883 16.0567 15.165 15.28C15.9417 14.5033 16.8867 14.1153 18 14.116C19.1133 14.1167 20.0587 14.5047 20.836 15.28C21.6133 16.0553 22.0013 17.0007 22 18.116C22 19.2293 21.612 20.1743 20.836 20.951C20.0587 21.7277 19.1133 22.116 18 22.116ZM4 20.769V4H20V11.56C19.8373 11.5 19.676 11.4487 19.516 11.406C19.3553 11.3633 19.1833 11.33 19 11.306V5H5V19.05H11.344C11.3893 19.3233 11.448 19.5907 11.52 19.852C11.5927 20.1133 11.6937 20.3627 11.823 20.6L11.789 20.634L10.654 19.808L9.308 20.769L7.962 19.808L6.616 20.769L5.269 19.808L4 20.769ZM6.77 16.269H11.479C11.5163 16.0857 11.5623 15.914 11.617 15.754C11.6717 15.594 11.7357 15.4323 11.809 15.269H6.77V16.269ZM6.77 12.5H14.08C14.4067 12.242 14.7567 12.027 15.13 11.855C15.5033 11.6823 15.9023 11.564 16.327 11.5H6.769L6.77 12.5Z"
                fill="black"
              />
            </svg>
            {/* Conditionally hide based on container width */}
            <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
              Orders
            </p>
          </button>
        </div>
      </div>

      {/* Divider */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="2"
        viewBox="0 0 220 2"
        fill="none"
        className="mt-5 mb-5"
      >
        <path
          d="M0 1H220"
          stroke="black"
          stroke-opacity="0.1"
          stroke-width="1.05"
        />
      </svg>

      {/* Reports and Settings */}
      <div className="flex flex-col w-full items-center mb-5">
        <div className="justify-center items-center flex h-14 mt-auto w-full">
          <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 md:justify-center md:pl-0 lg:pl-9 lg:justify-start rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 21H15M9 21V16M9 21H3.6C3.44087 21 3.28826 20.9368 3.17574 20.8243C3.06321 20.7117 3 20.5591 3 20.4V16.6C3 16.4409 3.06321 16.2883 3.17574 16.1757C3.28826 16.0632 3.44087 16 3.6 16H9M15 21V9M15 21H20.4C20.5591 21 20.7117 20.9368 20.8243 20.8243C20.9368 20.7117 21 20.5591 21 20.4V3.6C21 3.44087 20.9368 3.28826 20.8243 3.17574C20.7117 3.06321 20.5591 3 20.4 3H15.6C15.4409 3 15.2883 3.06321 15.1757 3.17574C15.0632 3.28826 15 3.44087 15 3.6V9M9 16V9.6C9 9.44087 9.06321 9.28826 9.17574 9.17574C9.28826 9.06321 9.44087 9 9.6 9H15"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
            {/* Conditionally hide based on container width */}
            <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
              Reports
            </p>
          </button>
        </div>

        <div className="justify-center items-center flex h-14 mt-auto w-full">
          <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 md:justify-center md:pl-0 lg:pl-9 lg:justify-start rounded">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M13.765 2.152C13.398 2 12.932 2 12 2C11.068 2 10.602 2 10.235 2.152C9.99214 2.25251 9.77151 2.3999 9.58569 2.58572C9.39986 2.77155 9.25248 2.99218 9.15196 3.235C9.05996 3.458 9.02296 3.719 9.00896 4.098C9.00273 4.37199 8.92696 4.6399 8.78877 4.87657C8.65059 5.11324 8.45451 5.31091 8.21896 5.451C7.97986 5.58504 7.71061 5.6561 7.4365 5.6575C7.16239 5.6589 6.89242 5.59059 6.65196 5.459C6.31596 5.281 6.07296 5.183 5.83196 5.151C5.30628 5.08187 4.77466 5.22431 4.35396 5.547C4.03996 5.79 3.80596 6.193 3.33996 7C2.87396 7.807 2.63996 8.21 2.58896 8.605C2.5546 8.86545 2.57188 9.13012 2.63983 9.38389C2.70778 9.63767 2.82505 9.87556 2.98496 10.084C3.13296 10.276 3.33996 10.437 3.66096 10.639C4.13396 10.936 4.43796 11.442 4.43796 12C4.43796 12.558 4.13396 13.064 3.66096 13.36C3.33996 13.563 3.13196 13.724 2.98496 13.916C2.82505 14.1244 2.70778 14.3623 2.63983 14.6161C2.57188 14.8699 2.5546 15.1345 2.58896 15.395C2.64096 15.789 2.87396 16.193 3.33896 17C3.80596 17.807 4.03896 18.21 4.35396 18.453C4.5624 18.6129 4.8003 18.7302 5.05407 18.7981C5.30784 18.8661 5.57251 18.8834 5.83296 18.849C6.07296 18.817 6.31596 18.719 6.65196 18.541C6.89242 18.4094 7.16239 18.3411 7.4365 18.3425C7.71061 18.3439 7.97986 18.415 8.21896 18.549C8.70196 18.829 8.98896 19.344 9.00896 19.902C9.02296 20.282 9.05896 20.542 9.15196 20.765C9.25248 21.0078 9.39986 21.2284 9.58569 21.4143C9.77151 21.6001 9.99214 21.7475 10.235 21.848C10.602 22 11.068 22 12 22C12.932 22 13.398 22 13.765 21.848C14.0078 21.7475 14.2284 21.6001 14.4142 21.4143C14.6001 21.2284 14.7474 21.0078 14.848 20.765C14.94 20.542 14.977 20.282 14.991 19.902C15.011 19.344 15.298 18.828 15.781 18.549C16.0201 18.415 16.2893 18.3439 16.5634 18.3425C16.8375 18.3411 17.1075 18.4094 17.348 18.541C17.684 18.719 17.927 18.817 18.167 18.849C18.4274 18.8834 18.6921 18.8661 18.9459 18.7981C19.1996 18.7302 19.4375 18.6129 19.646 18.453C19.961 18.211 20.194 17.807 20.66 17C21.126 16.193 21.36 15.79 21.411 15.395C21.4453 15.1345 21.428 14.8699 21.3601 14.6161C21.2921 14.3623 21.1749 14.1244 21.015 13.916C20.867 13.724 20.66 13.563 20.339 13.361C20.1047 13.2186 19.9105 13.019 19.7746 12.7809C19.6386 12.5428 19.5655 12.2741 19.562 12C19.562 11.442 19.866 10.936 20.339 10.64C20.66 10.437 20.868 10.276 21.015 10.084C21.1749 9.87556 21.2921 9.63767 21.3601 9.38389C21.428 9.13012 21.4453 8.86545 21.411 8.605C21.359 8.211 21.126 7.807 20.661 7C20.194 6.193 19.961 5.79 19.646 5.547C19.4375 5.38709 19.1996 5.26981 18.9459 5.20187C18.6921 5.13392 18.4274 5.11664 18.167 5.151C17.927 5.183 17.684 5.281 17.347 5.459C17.1066 5.59042 16.8368 5.65862 16.5629 5.65722C16.289 5.65582 16.0199 5.58486 15.781 5.451C15.5454 5.31091 15.3493 5.11324 15.2112 4.87657C15.073 4.6399 14.9972 4.37199 14.991 4.098C14.977 3.718 14.941 3.458 14.848 3.235C14.7474 2.99218 14.6001 2.77155 14.4142 2.58572C14.2284 2.3999 14.0078 2.25251 13.765 2.152Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
            {/* Conditionally hide based on container width */}
            <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
              Settings
            </p>
          </button>
        </div>
      </div>

      {/* Notice */}
      <div className="hidden lg:block w-full">
        <Notice />
      </div>

      {/* Logout */}
      <div className="justify-center items-center flex h-14 border-t border-solid border-black border-opacity-10 mt-auto w-full">
        <button className="hidden md:flex lg:flex gap-3.5 items-center text-base text-black whitespace-nowrap h-4/5 w-4/5 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.504 3H17.5C18.605 3 19.5 4.151 19.5 5.571L19.5 18.43C19.5 19.849 18.605 21 17.5 21H10.5M8 8.5L4.5 12L8 15.5M14.5 12.004L4.5 12.004"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* Conditionally hide based on container width */}
          <p className="my-auto font-poppins text-black text-[15.75px] font-normal leading-normal md:hidden lg:block">
            Logout
          </p>
        </button>
      </div>
    </div>
  );
};

export default Sidepanel;
