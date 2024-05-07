import { SyntheticEvent } from "react";

interface Props {
  password: string;
  confirmPassword: string;
  submitHandler: (e: SyntheticEvent) => Promise<void>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Security = ({
  password,
  confirmPassword,
  submitHandler,
  setPassword,
  setConfirmPassword,
}: Props) => {
  return (
    <section>
      <header className="flex justify-between">
        <h2 className="sr-only" id="security">
          Security
        </h2>

        <h2 className="text-xl lg:text-2xl pb-4">Security</h2>
      </header>
      <form method="PUT" onSubmit={submitHandler} className="bg-white mb-5">
        <div className="pb-4">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm leading-6 text-slate-500"
              >
                New password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm leading-6 text-slate-500"
              >
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-50  block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 py-4 px-8">
          {/* {isLoading && <Loader />} */}

          <button
            type="submit"
            className="rounded-md border border-orange-500 px-3 py-2 text-sm text-orange-500 hover:text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Update password
          </button>
        </div>
      </form>
    </section>
  );
};

export default Security;
