import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "@/features/LandingPage";
import FixedIcons from "@/components/FixedIcons";
import "./globals.css";

export default function Home() {
  return (
    <div className="position-relative overflow-hidden">
      <LandingPage />
      <FixedIcons />
    </div>
  );
}
