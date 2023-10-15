import React from "react";

const IconPerson = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.4997 10.9691C16.473 10.7232 18 9.03992 18 7.00001C18 4.96009 16.473 3.27682 14.4997 3.03091C15.4334 4.08866 16 5.47817 16 7.00001C16 8.52185 15.4334 9.91136 14.4997 10.9691Z"
        fill="currentColor"
      />
      <path
        d="M20 20C20 20.5523 20.4477 21 21 21C21.5523 21 22 20.5523 22 20V18C22 15.3399 19.9227 13.165 17.3018 13.009C18.3539 13.9407 19.1587 15.1454 19.6055 16.512C19.8565 16.9505 20 17.4585 20 18V20Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15C5.34315 15 4 16.3431 4 18V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18C2 15.2386 4.23858 13 7 13H13C15.7614 13 18 15.2386 18 18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18C16 16.3431 14.6569 15 13 15H7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7Z"
        fill="currentColor
        "
      />
    </svg>
  );
};

export default IconPerson;
