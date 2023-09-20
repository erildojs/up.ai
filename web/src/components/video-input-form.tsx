import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'
import {Github, FileVideo, Upload, Wand2} from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export function VideoInputForm() {
  return (
    <form action="" className="space-y-6">
            <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5">
              <FileVideo className="w-4 h-4"/>
              Selecione um Video
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Prompt de transcricao</Label>
              <Textarea id="transcription_prompt" className="h-20 leading-relaxed resize-none" placeholder="Inclua palavras-chaves mencionadas no video separadas por virgula (,)" />
            </div>

            <Button className="w-full" type="submit">
              Carregar Video
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>
  )
}