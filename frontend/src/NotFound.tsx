import React from "react";

export const NotFound: React.FC = (): JSX.Element => {
  return (
    <div className="h-screen bg-slate-900">
      <div className="relative top-1/2 -translate-y-1/2 bg-slate-300 w-1/2 h-1/3 rounded-lg mx-auto flex flex-col justify-center">
        <p className="text-5xl text-center p-6">Page not found!</p>
        <p className="text-2xl text-center p-6">
          The url you tried to visit doesn't exist in the database.
        </p>
      </div>
    </div>
  );
};
