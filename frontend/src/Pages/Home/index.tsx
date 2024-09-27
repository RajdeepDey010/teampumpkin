import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import pathLogo from '../../../public/assets/speedoLogo.svg'
import pathPaperMap from '../../../public/assets/paperMap.svg'
import Upload from '@/components/webComponents/Upload'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">

      <nav className="w-full py-4 bg-white shadow-md flex items-center justify-start px-8">
        <div className="flex items-center">
          <img
            src={pathLogo}
            alt="Speedo Logo"
          />
        </div>
      </nav>

      <div className="w-full flex items-center justify-center mt-10">
        <div className="text-xl font-medium flex items-center gap-2">
          <span>👋</span>
          <span>Welcome, User</span>
        </div>
      </div>

      <Card className="mt-12 w-2/5 bg-white shadow-md">
        <CardContent className="p-6 flex flex-col items-center justify-center">
          <img
            src={pathPaperMap}
            alt="Map Illustration"
            className="h-48 mb-6"
          />
          <Button onClick={handleOpen}>
            Upload Trip
          </Button>
          <Separator className="my-4" />
          <p className="text-gray-500">Upload the Excel sheet of your trip</p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <h2 className="text-xl font-semibold">Upload Trip</h2>
          </DialogHeader>
          <Upload onClose={handleClose} />
          <DialogFooter>
            {/* Modal Footer */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Home