import { useState } from "react"
import LaunchScreen from "./pages/0_LaunchScreen"
import Onboarding from "./pages/1_onboarding"

export default function App() {
  const [screen, setScreen] = useState("launch")

  if (screen === "launch") return <LaunchScreen onFinish={() => setScreen("onboarding")} />
  if (screen === "onboarding") return <Onboarding onFinish={() => setScreen("home")} />
  return <div>Your main app here</div>
}