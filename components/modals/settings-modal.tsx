'use client'

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { useSettings } from "@/hooks/use-settings"
import { Label } from '@/components/ui/label'
import { ModeToggle } from "@/components/mode-toggle"

export function SettingsModal() {

  const settings = useSettings()

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Pengaturan Saya</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>
              Tampilan
            </Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Sesuaikan bagaimana Noteku terlihat di perangkat Anda
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  )
}
