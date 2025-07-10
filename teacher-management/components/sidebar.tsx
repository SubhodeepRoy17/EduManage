"use client"

import { useState, useEffect } from "react"
import {
  Users,
  Calendar,
  BookOpen,
  Settings,
  Bell,
  FileText,
  Home,
  ChevronLeft,
  ChevronRight,
  User,
  CreditCard,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Teachers", href: "/teachers", active: true },
  { icon: User, label: "Students", href: "/students" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: CreditCard, label: "Payments", href: "/payments" },
  { icon: BookOpen, label: "Courses", href: "/courses" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setCollapsed(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileOpen(true)}
          className="fixed top-4 left-4 z-50 md:hidden bg-white shadow-md"
        >
          <Menu size={20} />
        </Button>
      )}

      {/* Mobile Overlay */}
      {isMobile && mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <div
        className={cn(
          "bg-slate-900 text-white transition-all duration-300 flex flex-col",
          isMobile
            ? cn(
                "fixed left-0 top-0 h-full z-50 transform",
                mobileOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
              )
            : collapsed
              ? "w-16"
              : "w-64",
          className,
        )}
      >
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {!collapsed && <h2 className="text-xl font-bold">EduManage</h2>}
            <div className="flex items-center space-x-2">
              {isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:bg-slate-800"
                >
                  <X size={16} />
                </Button>
              )}
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCollapsed(!collapsed)}
                  className="text-white hover:bg-slate-800"
                >
                  {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </Button>
              )}
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-white hover:bg-slate-800 h-12 text-base",
                    item.active && "bg-slate-700",
                    collapsed && !isMobile && "px-2",
                  )}
                  onClick={() => isMobile && setMobileOpen(false)}
                >
                  <item.icon size={20} />
                  {(!collapsed || isMobile) && <span className="ml-3">{item.label}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
