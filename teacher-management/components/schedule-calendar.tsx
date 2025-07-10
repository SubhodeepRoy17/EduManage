"use client"

import { useState } from "react"
import type { ScheduleSlot } from "@/types/teacher"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Calendar, FileText, MessageSquare, Users } from "lucide-react"

interface ScheduleCalendarProps {
  schedule: ScheduleSlot[]
  onSlotClick?: (slot: ScheduleSlot) => void
}

const timeSlots = [
  "7:30am",
  "8am",
  "8:30am",
  "9am",
  "9:30am",
  "10am",
  "10:30am",
  "11am",
  "11:30am",
  "12pm",
  "12:30pm",
  "1pm",
  "1:30pm",
  "2pm",
  "2:30pm",
  "3pm",
  "3:30pm",
  "4pm",
  "4:30pm",
  "5pm",
  "5:30pm",
  "6pm",
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const dayAbbr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export function ScheduleCalendar({ schedule, onSlotClick }: ScheduleCalendarProps) {
  const [activeTab, setActiveTab] = useState("schedule")

  const getSlotForTimeAndDay = (time: string, day: string) => {
    return schedule.find((slot) => slot.startTime === time && slot.day.toLowerCase() === day.toLowerCase())
  }

  const getSlotColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 border-green-300 hover:bg-green-200 text-green-800"
      case "booked":
        return "bg-blue-100 border-blue-300 hover:bg-blue-200 text-blue-800"
      case "unavailable":
        return "bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-800"
      default:
        return "bg-white border-gray-200 hover:bg-gray-50 text-gray-600"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
            Available
          </Badge>
        )
      case "booked":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
            Booked
          </Badge>
        )
      case "unavailable":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
            Unavailable
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Schedule Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 h-auto gap-1">
            <TabsTrigger
              value="availability"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
            >
              <Calendar size={16} />
              <span className="text-xs md:text-sm">Availability</span>
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
            >
              <Calendar size={16} />
              <span className="text-xs md:text-sm">Schedule</span>
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
            >
              <Users size={16} />
              <span className="text-xs md:text-sm">Students</span>
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-xs md:text-sm py-2 px-1"
            >
              <FileText size={16} />
              <span className="text-xs md:text-sm">History</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="mt-6">
            {/* Mobile-optimized scrollable grid */}
            <div className="md:hidden relative h-[70vh] bg-background rounded-lg border">
              {/* Fixed Time Column */}
              <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-background border-r">
                <div className="h-10 p-2 font-semibold text-xs flex items-center justify-center border-b">
                  Time
                </div>
                <ScrollArea className="h-[calc(100%-40px)]">
                  <div className="space-y-1 pr-2">
                    {timeSlots.map((time) => (
                      <div key={time} className="h-12 flex items-center justify-center text-xs text-gray-600 font-medium">
                        {time}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Scrollable Days & Grid */}
              <ScrollArea className="absolute left-16 right-0 top-0 bottom-0">
                {/* Days Header */}
                <div className="flex sticky top-0 z-10 bg-background">
                  {days.map((day, index) => (
                    <div key={day} className="w-20 flex-none p-2 font-semibold text-xs text-center border-b border-l">
                      {dayAbbr[index]}
                    </div>
                  ))}
                </div>

                {/* Time Slots Grid */}
                <div className="flex flex-col">
                  {timeSlots.map((time) => (
                    <div key={time} className="flex border-b">
                      {days.map((day) => {
                        const slot = getSlotForTimeAndDay(time, day);
                        return (
                          <div key={`${day}-${time}`} className="w-20 h-12 flex-none border-l">
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full h-full p-1 text-xs rounded-none border-0",
                                slot ? getSlotColor(slot.status) : "bg-white hover:bg-gray-50",
                              )}
                              onClick={() => slot && onSlotClick?.(slot)}
                            >
                              <div className="w-full flex flex-col items-center justify-center">
                                {slot && (
                                  <>
                                    {getStatusBadge(slot.status)}
                                    {slot.subject && (
                                      <span className="text-[10px] truncate max-w-full">
                                        {slot.subject}
                                      </span>
                                    )}
                                  </>
                                )}
                              </div>
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Desktop view (original grid) */}
            <div className="hidden md:block relative">
              <ScrollArea className="w-full overflow-x-auto pb-4">
                <div className="min-w-[800px]">
                  {/* Header row - sticky */}
                  <div className="grid grid-cols-8 gap-1 mb-2 sticky top-0 bg-background z-10">
                    <div className="p-2 font-semibold text-sm sticky left-0 bg-background z-20 min-w-[80px]">
                      Time
                    </div>
                    {days.map((day) => (
                      <div key={day} className="p-2 font-semibold text-sm text-center min-w-[110px]">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Time slots */}
                  <div className="space-y-1">
                    {timeSlots.map((time) => (
                      <div key={time} className="grid grid-cols-8 gap-1">
                        <div className="p-2 text-sm text-gray-600 font-medium flex items-center sticky left-0 bg-background z-10 min-w-[80px]">
                          {time}
                        </div>
                        {days.map((day) => {
                          const slot = getSlotForTimeAndDay(time, day);
                          return (
                            <Button
                              key={`${day}-${time}`}
                              variant="outline"
                              className={cn(
                                "h-14 p-1 text-sm min-w-[110px]",
                                slot ? getSlotColor(slot.status) : "bg-white hover:bg-gray-50",
                              )}
                              onClick={() => slot && onSlotClick?.(slot)}
                            >
                              <div className="w-full flex flex-col items-center justify-center">
                                {slot && (
                                  <>
                                    {getStatusBadge(slot.status)}
                                    {slot.subject && (
                                      <span className="text-xs truncate max-w-full">
                                        {slot.subject}
                                      </span>
                                    )}
                                  </>
                                )}
                              </div>
                            </Button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>

            {/* Mobile legend */}
            <div className="mt-4 flex flex-wrap gap-2 md:hidden">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                <span className="text-xs">Available</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
                <span className="text-xs">Booked</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gray-100 border border-gray-300 rounded"></div>
                <span className="text-xs">Unavailable</span>
              </div>
            </div>
          </TabsContent>

          {/* Other tabs remain the same */}
          <TabsContent value="availability" className="mt-6">
            <div className="text-center py-12 text-gray-500">
              <Calendar className="mx-auto h-12 w-12 mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Availability Management</p>
              <p className="text-sm">Set your available hours and time preferences</p>
            </div>
          </TabsContent>

          <TabsContent value="students" className="mt-6">
            <div className="text-center py-12 text-gray-500">
              <Users className="mx-auto h-12 w-12 mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Student Management</p>
              <p className="text-sm">View and manage your assigned students</p>
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="text-center py-12 text-gray-500">
              <FileText className="mx-auto h-12 w-12 mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Schedule History</p>
              <p className="text-sm">View past schedules and changes</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}