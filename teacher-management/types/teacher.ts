export interface Teacher {
  id: string
  name: string
  role: string
  birthDate: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    country: string
  }
}

export interface Qualification {
  id: string
  name: string
  rate: number
  type: "private" | "group"
}

export interface ScheduleSlot {
  id: string
  day: string
  startTime: string
  endTime: string
  status: "available" | "booked" | "unavailable"
  subject?: string
}

export interface TeacherProfile {
  teacher: Teacher
  privateQualifications: Qualification[]
  groupQualifications: Qualification[]
  schedule: ScheduleSlot[]
}

export interface PaymentRecord {
  id: string
  teacherId: string
  amount: number
  currency: string
  type: "salary" | "bonus" | "commission"
  status: "pending" | "processing" | "completed" | "failed"
  date: string
  description: string
  paymentMethod: string
}

export interface PaymentForm {
  amount: string
  type: "salary" | "bonus" | "commission"
  description: string
  paymentMethod: string
  scheduledDate: string
}

export interface FormErrors {
  [key: string]: string
}
