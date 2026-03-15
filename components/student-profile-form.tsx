'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { useToast } from '@/hooks/use-toast'

export type StudentProfile = {
  id: string
  userId: string
  gpa: number
  degreeLevel: 'high_school' | 'bachelor' | 'master' | 'phd'
  fieldOfStudy: string
  preferredCountry: string
  interests: string[]
  completenessScore: number
  createdAt: string
  updatedAt: string
}

interface StudentProfileFormProps {
  onSave?: (profile: StudentProfile) => void
}

const degreeOptions = [
  { value: 'high_school', label: 'High School' },
  { value: 'bachelor', label: "Bachelor's Degree" },
  { value: 'master', label: "Master's Degree" },
  { value: 'phd', label: 'PhD' },
]

const interestOptions = [
  'STEM',
  'Business',
  'Arts & Humanities',
  'Social Sciences',
  'Engineering',
  'Medicine',
  'Law',
  'Environmental Studies',
  'Education',
  'Technology',
]

export function StudentProfileForm({ onSave }: StudentProfileFormProps) {
  const { toast } = useToast()
  const [gpa, setGpa] = useState('')
  const [degreeLevel, setDegreeLevel] = useState('')
  const [fieldOfStudy, setFieldOfStudy] = useState('')
  const [preferredCountry, setPreferredCountry] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  const calculateCompletenessScore = (): number => {
    let score = 0
    const parts = 5
    if (gpa) score += 1
    if (degreeLevel) score += 1
    if (fieldOfStudy) score += 1
    if (preferredCountry) score += 1
    if (interests.length > 0) score += 1
    return Math.round((score / parts) * 100)
  }

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : prev.length < 10
        ? [...prev, interest]
        : prev
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setSuccess(false)

    try {
      const profile: StudentProfile = {
        id: `profile-${Date.now()}`,
        userId: 'current-user',
        gpa: gpa ? parseFloat(gpa) : 0,
        degreeLevel: degreeLevel as 'high_school' | 'bachelor' | 'master' | 'phd',
        fieldOfStudy,
        preferredCountry,
        interests,
        completenessScore: calculateCompletenessScore(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      onSave?.(profile)
      setSuccess(true)
      toast({
        title: 'Success',
        description: 'Profile saved successfully!',
      })

      setTimeout(() => setSuccess(false), 3000)
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err.message || 'Failed to save profile',
        variant: 'destructive',
      })
    } finally {
      setSaving(false)
    }
  }

  const completenessScore = calculateCompletenessScore()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="rounded-lg bg-green-50 px-4 py-2 text-sm text-green-800">
          Profile saved successfully!
        </div>
      )}

      {/* Completeness */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Completeness</CardTitle>
          <CardDescription>Complete all sections to maximize scholarship matches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{completenessScore}% Complete</span>
            <span className="text-sm text-muted-foreground">4 sections</span>
          </div>
          <Progress value={completenessScore} className="h-2" />
        </CardContent>
      </Card>

      {/* GPA */}
      <Card>
        <CardHeader>
          <CardTitle>GPA</CardTitle>
          <CardDescription>Your current Grade Point Average (0.0 - 4.0)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="gpa">GPA</Label>
            <Input
              id="gpa"
              type="number"
              step="0.01"
              min={0}
              max={4}
              placeholder="3.50"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              disabled={saving}
            />
          </div>
        </CardContent>
      </Card>

      {/* Degree Level */}
      <Card>
        <CardHeader>
          <CardTitle>Degree Level</CardTitle>
          <CardDescription>Select your current or target degree</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={degreeLevel} onValueChange={setDegreeLevel} disabled={saving}>
            <SelectTrigger>
              <SelectValue placeholder="Select degree level" />
            </SelectTrigger>
            <SelectContent>
              {degreeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Field of Study */}
      <Card>
        <CardHeader>
          <CardTitle>Field of Study</CardTitle>
          <CardDescription>Your major or focus area</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            placeholder="e.g., Computer Science"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            disabled={saving}
          />
          <Input
            placeholder="Preferred country (e.g., Germany, Canada)"
            value={preferredCountry}
            onChange={(e) => setPreferredCountry(e.target.value)}
            disabled={saving}
          />
        </CardContent>
      </Card>

      {/* Interests */}
      <Card>
        <CardHeader>
          <CardTitle>Areas of Interest</CardTitle>
          <CardDescription>Select up to 10 areas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {interestOptions.map((interest) => (
              <div key={interest} className="flex items-center gap-2">
                <Checkbox
                  id={interest}
                  checked={interests.includes(interest)}
                  onCheckedChange={() => toggleInterest(interest)}
                  disabled={saving || (interests.length >= 10 && !interests.includes(interest))}
                />
                <Label htmlFor={interest} className="font-normal cursor-pointer text-sm">
                  {interest}
                </Label>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Selected: {interests.length}/10
          </p>
        </CardContent>
      </Card>

      {/* Submit */}
      <Button type="submit" disabled={saving} className="w-full flex justify-center items-center">
        {saving ? (
          <svg className="animate-spin h-4 w-4 mr-2 text-white" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        ) : null}
        {saving ? 'Saving...' : 'Save Profile'}
      </Button>
    </form>
  )
}