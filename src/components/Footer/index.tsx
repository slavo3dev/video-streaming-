import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-green-600 mt-auto text-white">
      <div className="w-full p-10 space-y-2">
        <div className="flex flex-wrap w-full flex my-4">
          <div className="sm:w-1/3 w-1/3">
            <ul className="space-y-2">
              <li>Questions? Call 000-000-0000</li>
              <li>FAQ </li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="sm:w-1/3 w-1/3">
            <ul className="space-y-2">
              <li className="">Help Centre </li>
              <li className="">Legal Notices</li>
              <li className="">Terms of Use </li>
            </ul>
          </div>
          <div className="sm:w-1/3 w-1/3">
            <ul className="space-y-2">
             <li>Privacy</li>
              <li className="">Contact Us </li>
              <li className="">Ways to Watch </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};