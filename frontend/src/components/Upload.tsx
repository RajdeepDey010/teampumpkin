import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

function Upload({ onClose }: { onClose: () => void }) {
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }
  const handleSave = () => {
    console.log('Saving...', { text, file })
    onClose()
  }

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Trip Name</label>
        <Input
          type="text"
          placeholder="Enter trip name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Upload File</label>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div className="flex justify-end space-x-2">
        <Button className="bg-gray-400 hover:bg-gray-500" onClick={onClose}>
          Cancel
        </Button>
        <Link to='/trip'>
          <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={handleSave}>
            Save
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Upload