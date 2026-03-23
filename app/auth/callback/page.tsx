"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { setToken } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthCallbackPage() {
  const router = useRouter()
  const params = useSearchParams()

  useEffect(() => {
    const token = params.get("token")
    if (token) {
      setToken(token)
      router.replace("/dashboard")
      return
    }
    router.replace("/signin")
  }, [params, router])

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Signing you in...</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-sm text-muted-foreground">
          Please wait.
        </CardContent>
      </Card>
    </main>
  )
}

