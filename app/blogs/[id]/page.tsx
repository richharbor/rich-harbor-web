
import BlogPage from "@/components/Pages/Blogs/BlogPage/BlogPage"

interface PageProps {
  params: { id: string }
}

export default function page({ params }: PageProps) {
  const { id } = params

    return <BlogPage id={id} />
}
