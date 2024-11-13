import AuthenTabs from "./AuthenTabs";

export default function AuthenContainer() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{backgroundImage: "url('/images/authen-bg.png')"}}
    >
      <AuthenTabs />
    </div>
  );
}
