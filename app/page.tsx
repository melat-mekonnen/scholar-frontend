import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AI-Powered Scholarship Platform
            <span className="block text-primary">
              for Ethiopian Students
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover verified scholarships from around the world. Our platform
            uses intelligent recommendations to match Ethiopian students with
            opportunities that fit their academic background and interests.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/signup">Get Started</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* PLATFORM STATS */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">
              Scholarships Available
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-primary">10K+</p>
            <p className="text-sm text-muted-foreground">
              Students Supported
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="text-sm text-muted-foreground">
              Countries Covered
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">
              Verified Opportunities
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-center text-3xl font-bold">
          Why Use Our Platform?
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div className="text-center">
            <h3 className="text-lg font-semibold">
              Centralized Database
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Access hundreds of scholarships from one trusted platform instead
              of searching multiple websites.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">
              AI Recommendations
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get personalized scholarship suggestions based on your academic
              profile, major, and interests.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">
              Verified Opportunities
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All scholarships are reviewed and verified to remove outdated or
              fake listings.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">
              Application Tracking
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Track your scholarship applications and receive deadline
              reminders.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-3xl font-bold">
            How It Works
          </h2>

          <div className="mt-12 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-xl font-bold text-primary">1</p>
              <p className="mt-2 font-semibold">Create Profile</p>
              <p className="text-sm text-muted-foreground">
                Register and add your academic information.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-primary">2</p>
              <p className="mt-2 font-semibold">Discover Scholarships</p>
              <p className="text-sm text-muted-foreground">
                Explore opportunities tailored to your profile.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-primary">3</p>
              <p className="mt-2 font-semibold">Apply Easily</p>
              <p className="text-sm text-muted-foreground">
                Apply directly through the platform or via official links.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-primary">4</p>
              <p className="mt-2 font-semibold">Track Progress</p>
              <p className="text-sm text-muted-foreground">
                Monitor your applications and receive updates.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">

        <h2 className="text-3xl font-bold">
          Start Your Scholarship Journey Today
        </h2>

        <p className="mt-4 text-muted-foreground">
          Join thousands of Ethiopian students discovering opportunities
          worldwide.
        </p>

        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/signup">
              Create Free Account
            </Link>
          </Button>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-muted-foreground">
          © 2026 Ethiopian Scholarship Portal. Empowering students through education.
        </div>
      </footer>

    </main>
  )
}