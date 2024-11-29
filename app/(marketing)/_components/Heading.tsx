'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Heroes } from "./Heroes"
import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/spinner"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Semua Ide, Dokumen, & Rencana Anda di Satu Tempat. Selamat Datang di <span className="underline">Noteku</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Noteku adalah ruang kerja terpadu <br />
        yang membuat pekerjaan Anda lebih mudah, cepat, dan efisien.
      </h3>
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Masuk ke Noteku
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Coba Noteku Gratis
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}
