import React, { useState } from "react";

function ModalOverlay() {
  const [show, setShow] = useState(false);
  const [accept, setAccept] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      {accept ? (
        <div>
          <p>Offer accepted</p>
        </div>
      ) : (
        <div>
          {!show ? (
            <button
              className="p-2 border-2 border-black"
              onClick={() => {
                setShow(!show);
              }}
            >
              <p>Show Offer</p>
            </button>
          ) : (
            <div className="border-2 p-5 border-black">
              <button
                className="px-2 border-2 border-black"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p>X</p>
              </button>

              <div className="flex flex-col items-center justify-center space-y-5 mt-5">
                <p>Click the button below to accept our amazing offer!</p>
                <button
                  className="px-1 border-2 border-black"
                  onClick={() => {
                    setAccept(true);
                  }}
                >
                  <p>Accept offer</p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ModalOverlay;
