import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  // const { data: session, status } = useSession();
  // const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      <Meta {...meta} />
      {/* <SignInModal /> */}
      <main className="relative flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        {children}
      </main>
      <div className="absolute w-full py-5 text-center bg-white border-t border-gray-200">
        <p className="text-gray-500">
          Made with 💖 by {" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/PritishhMishraa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pritish Mishra
          </a>
        </p>
      </div>
    </>
  );
}
