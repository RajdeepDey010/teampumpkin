import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Upload({ onClose }: { onClose: () => void }){
  // File input state
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState('')

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0])
      }
  }

  // Handle save (form submission)
  const handleSave = () => {
    // Perform save action here (e.g., send data to the server)
    console.log('Saving...', { text, file })
    onClose() // Close modal on save
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* Text Input */}
      <div>
        <label className="block text-sm font-medium mb-1">Trip Name</label>
        <Input
          type="text"
          placeholder="Enter trip name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* File Upload Section */}
      <div>
        <label className="block text-sm font-medium mb-1">Upload File</label>
        <input type="file" onChange={handleFileChange} />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <Button className="bg-gray-400 hover:bg-gray-500" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default Upload