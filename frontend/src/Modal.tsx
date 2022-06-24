import { motion } from "framer-motion";
import React from "react";

interface IProps {
  setShowModal: (show: boolean) => void;
  url: string;
}

export const Modal: React.FC<IProps> = ({
  setShowModal,
  url,
}: IProps): JSX.Element => {
  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: "-10vh", opacity: 1 }}
      exit={{ y: "100vh", opacity: 0 }}
      className={
        "relative top-1/2 -translate-y-1/2 mx-auto p-1 border w-96 shadow-lg rounded-lg bg-white"
      }
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg">
          <div className="flex justify-between items-start p-4 rounded-t border-b">
            <p className="text-xl font-semibold">Here's your shortened URL:</p>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-start p-4 rounded-t bg-gray-200">
            <p className="text-md my-1 mx-auto">{url}</p>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
              onClick={() => navigator.clipboard.writeText(url)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H15.9595C16.5118 13 16.9595 12.5523 16.9595 12C16.9595 11.4477 16.5118 11 15.9595 11H8Z"
                  fill="currentColor"
                />
                <path
                  d="M8.04053 15.0665C7.48824 15.0665 7.04053 15.5142 7.04053 16.0665C7.04053 16.6188 7.48824 17.0665 8.04053 17.0665H16C16.5523 17.0665 17 16.6188 17 16.0665C17 15.5142 16.5523 15.0665 16 15.0665H8.04053Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5L5 19H19V5H17V6C17 7.65685 15.6569 9 14 9H10C8.34315 9 7 7.65685 7 6V5ZM9 5V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V5H9Z"
                  fill="currentColor"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
