"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const stats = [
  { title: "Active Applications", value: "12" },
  { title: "Saved Scholarships", value: "8" },
  { title: "Recommended Matches", value: "5" },
  { title: "Upcoming Deadlines", value: "3" },
]

const scholarships = [
  {
    title: "DAAD Scholarship",
    country: "Germany",
    deadline: "Nov 20",
  },
  {
    title: "Chevening Scholarship",
    country: "United Kingdom",
    deadline: "Dec 1",
  },
  {
    title: "Erasmus Mundus",
    country: "Europe",
    deadline: "Jan 10",
  },
]

const activities = [
  "Applied to DAAD Scholarship",
  "Saved Erasmus Mundus Scholarship",
  "Updated your profile information",
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">

      {/* Sidebar */}
      <aside className="w-64 border-r bg-card p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Scholarship Portal</h2>

        <nav className="space-y-3">
          <Link href="/dashboard" className="block text-sm font-medium hover:text-primary">
            Dashboard
          </Link>
          <Link href="/scholarships" className="block text-sm font-medium hover:text-primary">
            Browse Scholarships
          </Link>
          <Link href="/applications" className="block text-sm font-medium hover:text-primary">
            My Applications
          </Link>
          <Link href="/saved" className="block text-sm font-medium hover:text-primary">
            Saved Scholarships
          </Link>
          <Link href="/profile" className="block text-sm font-medium hover:text-primary">
            Profile
          </Link>
          <Link href="/settings" className="block text-sm font-medium hover:text-primary">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">

        {/* Header */}
        <header className="flex items-center justify-between border-b p-4 bg-card">
          <h1 className="text-lg font-semibold">Dashboard</h1>

          <Avatar>
            <AvatarFallback>ES</AvatarFallback>
          </Avatar>
        </header>

        <main className="p-6 space-y-8">

          {/* Welcome */}
          <div>
            <h2 className="text-2xl font-bold">Welcome back 👋</h2>
            <p className="text-muted-foreground">
              Discover scholarships that match your profile.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recommended Scholarships */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Recommended Scholarships
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {scholarships.map((scholarship) => (
                <Card key={scholarship.title}>
                  <CardHeader>
                    <CardTitle>{scholarship.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Country: {scholarship.country}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Deadline: {scholarship.deadline}
                    </p>

                    <div className="flex gap-2 pt-3">
                      <Button size="sm">View</Button>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

            <Card>
              <CardContent className="pt-6 space-y-3">
                {activities.map((activity, index) => (
                  <p key={index} className="text-sm text-muted-foreground">
                    • {activity}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

        </main>
      </div>
    </div>
  )
}