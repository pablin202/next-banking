import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
    $id: "1",
    email: "john.doe@example.com",
    userId: "user123",
    dwollaCustomerUrl: "https://api.dwolla.com/customers/123",
    dwollaCustomerId: "customer123",
    address1: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    postalCode: "12345",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon"
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
