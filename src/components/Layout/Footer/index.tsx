import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-black mt-auto text-gray-400">
      <div className="w-full p-10 space-y-2">
        <div className="flex flex-wrap w-full flex my-4">
          <div className="sm:w-1/2 w-1/2">
            <ul className="space-y-2">
              <li>Questions? Call 000-000-0000</li>
              <li>FAQ </li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div className="sm:w-1/2 w-1/2">
            <ul className="space-y-2">
              <li className="">Help Centre </li>
              <li className="">Legal Notices</li>
              <li className="">Terms of Use </li>
              <li className="">Contact Us </li>
              <li className="">Ways to Watch </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};