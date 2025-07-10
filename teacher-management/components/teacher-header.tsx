"use client"

import type { Teacher } from "@/types/teacher"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Mail, Phone, MapPin } from "lucide-react"

interface TeacherHeaderProps {
  teacher: Teacher
  onEdit?: () => void
}

export function TeacherHeader({ teacher, onEdit }: TeacherHeaderProps) {
  const initials = teacher.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Avatar className="h-16 w-16 md:h-20 md:w-20">
            <AvatarImage src="/placeholder-avatar.jpg" alt={teacher.name} />
            <AvatarFallback className="text-lg md:text-xl font-semibold bg-blue-100 text-blue-700">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{teacher.name}</h1>
            <Badge variant="secondary" className="mb-2">
              {teacher.role}
            </Badge>
            <p className="text-sm text-gray-500">Born: {new Date(teacher.birthDate).toLocaleDateString()}</p>
          </div>
        </div>

        <Button onClick={onEdit} className="flex items-center space-x-2 w-full sm:w-auto h-12 text-base" size="lg">
          <Edit size={16} />
          <span>Edit Profile</span>
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3 text-gray-600 p-3 bg-gray-50 rounded-lg">
          <Mail size={18} className="text-blue-600 flex-shrink-0" />
          <span className="text-sm break-all">{teacher.email}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600 p-3 bg-gray-50 rounded-lg">
          <Phone size={18} className="text-green-600 flex-shrink-0" />
          <span className="text-sm">{teacher.phone}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600 p-3 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1">
          <MapPin size={18} className="text-red-600 flex-shrink-0" />
          <span className="text-sm">
            {teacher.address.city}, {teacher.address.country}
          </span>
        </div>
      </div>
    </div>
  )
}
