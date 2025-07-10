"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, DollarSign, Calendar, CheckCircle, XCircle, Clock, Loader2, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { PaymentRecord, PaymentForm, FormErrors } from "@/types/teacher"

interface PaymentInterfaceProps {
  teacherId: string
  teacherName: string
  paymentHistory: PaymentRecord[]
}

export function PaymentInterface({ teacherId, teacherName, paymentHistory }: PaymentInterfaceProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<PaymentForm>({
    amount: "",
    type: "salary",
    description: "",
    paymentMethod: "",
    scheduledDate: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.amount || Number.parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method"
    }

    if (!formData.scheduledDate) {
      newErrors.scheduledDate = "Please select a date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Payment Scheduled",
        description: `Payment of $${formData.amount} has been scheduled for ${teacherName}`,
      })

      // Reset form
      setFormData({
        amount: "",
        type: "salary",
        description: "",
        paymentMethod: "",
        scheduledDate: "",
      })
      setErrors({})
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "processing":
        return <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
      default:
        return <Clock className="h-4 w-4 text-yellow-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "bg-green-100 text-green-800",
      failed: "bg-red-100 text-red-800",
      processing: "bg-blue-100 text-blue-800",
      pending: "bg-yellow-100 text-yellow-800",
    }

    return (
      <Badge variant="secondary" className={variants[status as keyof typeof variants]}>
        <div className="flex items-center space-x-1">
          {getStatusIcon(status)}
          <span className="capitalize">{status}</span>
        </div>
      </Badge>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5" />
          <span>Payment Management</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="new-payment" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new-payment">New Payment</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>

          <TabsContent value="new-payment" className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className={`pl-10 ${errors.amount ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.amount && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.amount}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Payment Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: any) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salary">Salary</SelectItem>
                      <SelectItem value="bonus">Bonus</SelectItem>
                      <SelectItem value="commission">Commission</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                  >
                    <SelectTrigger className={errors.paymentMethod ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.paymentMethod && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.paymentMethod}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scheduledDate">Scheduled Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="scheduledDate"
                      type="date"
                      value={formData.scheduledDate}
                      onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                      className={`pl-10 ${errors.scheduledDate ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.scheduledDate && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.scheduledDate}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter payment description..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={`resize-none ${errors.description ? "border-red-500" : ""}`}
                  rows={3}
                />
                {errors.description && (
                  <div className="flex items-center space-x-1 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.description}</span>
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full md:w-auto" disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Schedule Payment
                  </>
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{new Date(payment.date).toLocaleDateString()}</TableCell>
                      <TableCell className="capitalize">{payment.type}</TableCell>
                      <TableCell className="font-semibold">${payment.amount.toFixed(2)}</TableCell>
                      <TableCell className="capitalize">{payment.paymentMethod.replace("-", " ")}</TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      <TableCell className="hidden md:table-cell max-w-xs truncate">{payment.description}</TableCell>
                    </TableRow>
                  ))}
                  {paymentHistory.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                        No payment history available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
