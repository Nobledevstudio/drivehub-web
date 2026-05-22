import type React from "react"
interface authLayoutProps {
  left: React.ReactNode
  right: React.ReactNode
}


const AuthLayout = ({ left, right }: authLayoutProps) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT */}
      <div
        className="hidden md:flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {left}
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center px-4 py-10 overflow-y-auto">
        {right}
      </div>

    </div>
  );
};

export default AuthLayout;