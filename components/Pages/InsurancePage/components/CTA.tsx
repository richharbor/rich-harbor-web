import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl text-balance">
            Ready to Protect What Matters Most?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Get a personalized quote in minutes. Our insurance experts are standing by to help you find the perfect
            coverage.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              
              className=" flex gap-2 justify-center items-center border rounded-full px-8 h-12 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300 ease-in-out"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call 1-800-SHIELD
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
