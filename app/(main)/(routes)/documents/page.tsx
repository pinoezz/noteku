'use client'

import Image from "next/image"
import { useUser } from "@clerk/clerk-react"
import { PlusCircle } from "lucide-react"
import { useMutation } from "convex/react"

import { api } from '@/convex/_generated/api'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function DocumentsPage() {

  const { user } = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    console.log("Attempting to create a new document...") // Logging awal
    const promise = create({ title: 'Tanpa Judul' })

    promise
      .then((result) => {
        console.log("Document created successfully:", result) // Logging ketika berhasil
      })
      .catch((error) => {
        console.error("Error creating document:", error) // Logging ketika gagal
      })

    toast.promise(promise, {
      loading: "Sedang membuat catatan baru...",
      success: "Catatan baru berhasil dibuat"
    })
  }

  // ini variable
  let ini_note = tambah_note()
  // ini function
  function tambah_note() {
    return "catatan baru berhasil dibuat"
  }

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <Image className="dark:hidden" src='/empty.png' alt="Empty" width='300' height='300'/>
      <Image className="hidden dark:block" src='/empty-dark.png' alt="Empty" width='300' height='300'/>
      <h2 className="text-lg font-medium">
      Selamat datang di Noteku {user?.firstName}
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2"/>
        Buat Catatan
      </Button>
    </div>
  )
}
