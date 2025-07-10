"use client"

import type { Qualification } from "@/types/teacher"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface QualificationsSectionProps {
  privateQualifications: Qualification[]
  groupQualifications: Qualification[]
  onAddQualification?: (type: "private" | "group") => void
  onEditQualification?: (qualification: Qualification) => void
  onDeleteQualification?: (id: string) => void
}

export function QualificationsSection({
  privateQualifications,
  groupQualifications,
  onAddQualification,
  onEditQualification,
  onDeleteQualification,
}: QualificationsSectionProps) {
  const QualificationTable = ({
    qualifications,
    title,
    type,
  }: {
    qualifications: Qualification[]
    title: string
    type: "private" | "group"
  }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{title}</CardTitle>
        <Button size="sm" onClick={() => onAddQualification?.(type)} className="flex items-center space-x-1">
          <Plus size={16} />
          <span>Add</span>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Rate ($/hr)</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {qualifications.map((qualification) => (
              <TableRow key={qualification.id}>
                <TableCell className="font-medium">{qualification.name}</TableCell>
                <TableCell className="text-right">${qualification.rate.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost" onClick={() => onEditQualification?.(qualification)}>
                      <Edit size={14} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onDeleteQualification?.(qualification.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {qualifications.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-gray-500 py-8">
                  No qualifications added yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <QualificationTable qualifications={privateQualifications} title="Private Qualifications" type="private" />
      <QualificationTable qualifications={groupQualifications} title="Group Qualifications" type="group" />
    </div>
  )
}
