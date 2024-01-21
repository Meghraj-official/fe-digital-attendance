import AuthWrapper from "@/components/common/AuthWrapper";
import LandingPage from "../components/home/LandingPage";

export default function Home() {
  return (
    <AuthWrapper>
      <LandingPage />
    </AuthWrapper>
  );
}
