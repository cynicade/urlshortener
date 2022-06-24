import { AnimatePresence } from "framer-motion";
import React from "react";
import { ModalWrapper } from "./ModalWrapper";
import { Modal } from "./Modal";

export const Main: React.FC = (): JSX.Element => {
  const [input, setInput] = React.useState<string>("");
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [url, setUrl] = React.useState<string>("");

  // handler for form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  // handler for form submit
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.length < 4) return;

    const apiUrl =
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_API_URL_LOCAL
        : process.env.REACT_APP_API_URL;

    const res = await fetch(`${apiUrl}/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: input,
      }),
    });

    if (res.status === 200) {
      // got ok from backend
      const data = await res.json();
      setUrl(data.url);
      setShowModal(true);
    } else {
      // TODO: better error handling and message
      alert("There was an internal error");
    }
  };

  return (
    <div className="h-screen bg-slate-900">
      <div className="relative top-1/2 -translate-y-1/2 bg-slate-300 w-1/3 min-w-min rounded-lg mx-auto flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-4/5"
        >
          <input
            type="text"
            value={input}
            placeholder="Long URL here..."
            onChange={handleChange}
            autoFocus
            className="m-5 p-2 w-full rounded-md bg-slate-200 outline-none focus:outline-none focus:bg-slate-100 duration-300 text-md italic text-center"
          />
          <button
            className="bg-blue-300 hover:bg-blue-100 duration-300 rounded-md mb-3 p-2 w-1/4 min-w-min"
            type="submit"
          >
            Shorten
          </button>
        </form>
      </div>
      <AnimatePresence>
        {showModal && (
          // <ModalWrapper setShowModal={setShowModal}>
          <ModalWrapper>
            <Modal setShowModal={setShowModal} url={url} />
          </ModalWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};
