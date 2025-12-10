import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "ShieldGuard made the claims process incredibly simple. When we had water damage, they had an adjuster out within 24 hours and our claim was processed in under a week.",
    author: "Sarah Mitchell",
    role: "Homeowner, Austin TX",
    rating: 5,
  },
  {
    quote:
      "I've been with them for 10 years. Their rates are competitive and the customer service is outstanding. They truly care about their customers.",
    author: "Michael Chen",
    role: "Family Plan Member",
    rating: 5,
  },
  {
    quote:
      "After comparing multiple insurers, ShieldGuard offered the best coverage for our family at a price we could afford. Highly recommend!",
    author: "Jennifer Adams",
    role: "Life Insurance Policyholder",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-10 lg:py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by Families Nationwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our policyholders have to say about their experience with ShieldGuard.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col rounded-2xl bg-card border border-border p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-white text-accent" />
                ))}
              </div>
              <blockquote className="flex-1 text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
