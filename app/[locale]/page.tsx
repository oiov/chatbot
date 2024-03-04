"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { ThemeSwitcher } from "@/components/utility/theme-switcher"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col p-6">
      <div className="flex items-center justify-between">
        <div className="relative flex items-center space-x-4">
          <div className="absolute left-0 top-[-16px] md:top-[-2px]">
            <ChatbotUISVG
              theme={theme === "dark" ? "dark" : "light"}
              scale={0.2}
            />
          </div>
          <div className="hidden pl-9 text-2xl font-extrabold md:block">
            OiChat
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex space-x-4">
            <a
              className="text-md border-primary bg-primary text-secondary flex h-[36px] w-[90px] cursor-pointer items-center justify-center rounded-lg border-2 p-2 font-semibold hover:opacity-50"
              href="login"
            >
              Login
            </a>
            <a
              className="text-md flex h-[36px] w-[90px] cursor-pointer items-center justify-center rounded-lg border-2 border-blue-500 bg-blue-500 p-2 font-semibold text-white hover:opacity-50"
              href="login"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col items-center justify-center pb-20">
        <div className="flex flex-col text-4xl font-extrabold tracking-wide md:text-[56px]">
          <div>Oi Chat</div>
        </div>
        <div className="mt-2 text-lg font-bold opacity-100 transition-all duration-500 md:mt-6 md:text-2xl">
          Chat with Gemini Pro Vision.
        </div>
        <div className="mt-5 flex flex-col items-center space-y-2 md:mt-6 md:flex-row md:space-x-4 md:space-y-0">
          <Link
            className="flex cursor-pointer items-center rounded-lg border-2 border-blue-500 bg-blue-500 p-2 pl-3.5 text-lg font-extrabold tracking-wide text-white hover:opacity-50"
            href="/login"
          >
            Start Chatting
            <IconArrowRight className="ml-1" size={20} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
        </div>
        <div className="flex space-x-3 text-sm">交流群 634323049</div>
      </div>
    </div>
  )
}
