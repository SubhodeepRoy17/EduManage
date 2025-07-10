"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TeacherHeader } from "@/components/teacher-header"
import { QualificationsSection } from "@/components/qualifications-section"
import { ScheduleCalendar } from "@/components/schedule-calendar"
import { PaymentInterface } from "@/components/payment-interface"
import type { TeacherProfile, Qualification, ScheduleSlot, PaymentRecord } from "@/types/teacher"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Calendar, CreditCard, BookOpen } from "lucide-react"

// Mock data based on the screenshot
const mockTeacherProfile: TeacherProfile = {
  teacher: {
    id: "1",
    name: "Alynia Allan",
    role: "Teacher",
    birthDate: "1985-03-15",
    email: "alyniaallan@example.com",
    phone: "(416) 555-9027",
    address: {
      street: "123 Markham Rd, Apt 1001",
      city: "North York, Ontario",
      country: "Canada",
    },
  },
  privateQualifications: [
    { id: "1", name: "Vocal Contemporary", rate: 50.0, type: "private" },
    { id: "2", name: "Vocal Jazz", rate: 55.0, type: "private" },
    { id: "3", name: "Vocal Classical", rate: 60.0, type: "private" },
    { id: "4", name: "Vocal Pop", rate: 50.0, type: "private" },
    { id: "5", name: "Instrument", rate: 45.0, type: "private" },
  ],
  groupQualifications: [],
  schedule: [
    {
      id: "1",
      day: "Tuesday",
      startTime: "3pm",
      endTime: "4pm",
      status: "available",
      subject: "Vocal Jazz",
    },
    {
      id: "2",
      day: "Wednesday",
      startTime: "2:30pm",
      endTime: "4pm",
      status: "available",
      subject: "Vocal Contemporary",
    },
    {
      id: "3",
      day: "Thursday",
      startTime: "1pm",
      endTime: "5pm",
      status: "booked",
      subject: "Private Lessons",
    },
    {
      id: "4",
      day: "Friday",
      startTime: "2pm",
      endTime: "6pm",
      status: "booked",
      subject: "Group Sessions",
    },
    {
      id: "5",
      day: "Saturday",
      startTime: "10am",
      endTime: "2pm",
      status: "unavailable",
    },
  ],
}

const mockPaymentHistory: PaymentRecord[] = [
  {
    id: "1",
    teacherId: "1",
    amount: 2500.0,
    currency: "USD",
    type: "salary",
    status: "completed",
    date: "2024-01-15",
    description: "Monthly salary payment",
    paymentMethod: "bank-transfer",
  },
  {
    id: "2",
    teacherId: "1",
    amount: 500.0,
    currency: "USD",
    type: "bonus",
    status: "processing",
    date: "2024-01-10",
    description: "Performance bonus",
    paymentMethod: "paypal",
  },
  {
    id: "3",
    teacherId: "1",
    amount: 150.0,
    currency: "USD",
    type: "commission",
    status: "failed",
    date: "2024-01-05",
    description: "Student referral commission",
    paymentMethod: "check",
  },
]

export default function TeacherManagement() {
  const [teacherProfile, setTeacherProfile] = useState<TeacherProfile>(mockTeacherProfile)
  const [activeTab, setActiveTab] = useState("profile")
  const { toast } = useToast()

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Profile editing functionality will be implemented soon.",
    })
  }

  const handleAddQualification = (type: "private" | "group") => {
    toast({
      title: "Add Qualification",
      description: `Adding ${type} qualification functionality will be implemented soon.`,
    })
  }

  const handleEditQualification = (qualification: Qualification) => {
    toast({
      title: "Edit Qualification",
      description: `Editing ${qualification.name} functionality will be implemented soon.`,
    })
  }

  const handleDeleteQualification = (id: string) => {
    toast({
      title: "Delete Qualification",
      description: "Qualification deletion functionality will be implemented soon.",
      variant: "destructive",
    })
  }

  const handleSlotClick = (slot: ScheduleSlot) => {
    toast({
      title: "Schedule Slot",
      description: `Clicked on ${slot.day} at ${slot.startTime} - Status: ${slot.status}`,
    })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 overflow-auto md:ml-0">
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          <TeacherHeader teacher={teacherProfile.teacher} onEdit={handleEditProfile} />

          {/* Mobile/Desktop Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6 h-auto">
              <TabsTrigger
                value="profile"
                className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
              >
                <User size={16} />
                <span className="text-xs md:text-sm">Profile</span>
              </TabsTrigger>
              <TabsTrigger
                value="qualifications"
                className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
              >
                <BookOpen size={16} />
                <span className="text-xs md:text-sm">Quals</span>
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
              >
                <Calendar size={16} />
                <span className="text-xs md:text-sm">Schedule</span>
              </TabsTrigger>
              <TabsTrigger
                value="payments"
                className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
              >
                <CreditCard size={16} />
                <span className="text-xs md:text-sm">Payments</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="text-center py-12 text-gray-500">
                <User className="mx-auto h-12 w-12 mb-4 text-gray-300" />
                <p className="text-lg font-medium mb-2">Profile Details</p>
                <p className="text-sm">Detailed profile information and settings</p>
              </div>
            </TabsContent>

            <TabsContent value="qualifications" className="space-y-6">
              <QualificationsSection
                privateQualifications={teacherProfile.privateQualifications}
                groupQualifications={teacherProfile.groupQualifications}
                onAddQualification={handleAddQualification}
                onEditQualification={handleEditQualification}
                onDeleteQualification={handleDeleteQualification}
              />
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <ScheduleCalendar schedule={teacherProfile.schedule} onSlotClick={handleSlotClick} />
            </TabsContent>

            <TabsContent value="payments" className="space-y-6">
              <PaymentInterface
                teacherId={teacherProfile.teacher.id}
                teacherName={teacherProfile.teacher.name}
                paymentHistory={mockPaymentHistory}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
