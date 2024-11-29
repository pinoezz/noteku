'use client'

import { useRouter } from "next/navigation"
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react"
import { toast } from "sonner"
import { MoreHorizontal, Trash } from "lucide-react"

import { Id } from "@/convex/_generated/dataModel"
import {DropdownMenu,DropdownMenuTrigger,
  DropdownMenuContent,DropdownMenuItem,
  DropdownMenuSeparator} from '@/components/ui/dropdown-menu'
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
	

interface MenuProps {
  documentId:Id<'documents'>
}

export function Menu ({documentId}:MenuProps) {

  const router = useRouter()
  const {user} = useUser()

  const archive = useMutation(api.documents.archive)

  const onArchive = () => {
    const promise = archive({id:documentId})

    toast.promise(promise,{
      loading:'Memindahkan ke tempat sampah...',
      success:"Catatan dipindahkan ke tempat sampah!"
    })
    router.push('/documents')
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='sm' variant='ghost'>
          <MoreHorizontal className="w-4 h-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end" alignOffset={8} forceMount>
        <DropdownMenuItem onClick={onArchive}>
          <Trash className="w-4 h-4 mr-2"/>
          Hapus
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <div className="text-xs text-muted-foreground p-2">
          Terakhir di edit oleh: {user?.fullName}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

Menu.Skeleton = function MenuSkeleton() {
  return (
    <Skeleton className="w-10 h-10"/>
  )
}
