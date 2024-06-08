import { Image } from "cloudinary-react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { SyntheticEvent } from "react";

interface Props {
  submitHandler: (e: SyntheticEvent) => Promise<void>;
  photo: string;
  cloudName: string;
  uploadFile: () => void;
  name: string;
  email: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Profile = ({
  submitHandler,
  photo,
  cloudName,
  uploadFile,
  name,
  email,
  setName,
  setFile,
  setEmail,
}: Props) => {
  return (
    <section aria-labelledby="profile">
      <header className="flex justify-between">
        <h2 className="sr-only" id="profile">
          Profile
        </h2>

        <h2 className="text-xl lg:text-2xl pb-4">Profile</h2>
      </header>
      <form method="PUT" onSubmit={submitHandler} className="bg-white mb-10">
        <div className="pb-4">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="flex items-center gap-5">
              <label htmlFor="imgupload" className="sr-only" id="profile">
                Photo
              </label>

              <div className="flex items-center justify-center">
                {photo ? (
                  <Image
                    style={{ width: 80, height: 80, borderRadius: 50 }}
                    className="border-2 border-gray-300 block shadow"
                    cloudName={cloudName}
                    publicId={photo}
                  />
                ) : (
                  <UserCircleIcon
                    className="h-20 w-20 text-gray-300"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="flex gap-2">
                <label
                  className="px-3 py-2 rounded-md cursor-pointer shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-sm"
                  htmlFor="imgupload"
                >
                  Upload image
                </label>
                <input
                  type="file"
                  id="imgupload"
                  name="imgupload"
                  onChange={(e) => {
                    setFile(e.target.files?.[0] ?? null);
                  }}
                />

                <button
                  type="button"
                  id="imgupload"
                  onClick={uploadFile}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm leading-6 text-slate-500"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm leading-6 text-slate-500"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="bg-gray-50 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-x-6 py-4 px-8">
          <button
            type="submit"
            className="rounded-md border border-orange-500 px-6 lg:px-10 py-2 lg:py-3 text-sm lg:text-base text-orange-500 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Update profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
