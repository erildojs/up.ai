import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import {Github, Wand2} from 'lucide-react'
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";
import { useState } from "react";
import {useCompletion} from 'ai/react'

export function App() {
  const [temperature, setTemperature] = useState(0.5)
  const [videoId, setVideoId] = useState<string | null>(null)

  const {input, setInput, handleInputChange, handleSubmit, completion, isLoading} = useCompletion({
    api: 'http://localhost:3333/ai/complete',
    body: {
      videoId,
      temperature
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">up.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por <a className="text-muted-foreground" href="https://github.com/erildojs">ErildoJS</a> com 💜 no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2"/>
            <a href="https://github.com/erildojs/erildojs">Github</a>
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea className="resize-none p-4 leading-relaxed" value={input} onChange={handleInputChange} placeholder="Inclua o prompt para a AI..."/>
            <Textarea className="resize-none p-4 leading-relaxed" value={completion} placeholder="Resultado gerado pela AI..." readOnly/>
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se voce pode utilizar a variavel <code className="text-violet-400">{'{transcription}'}</code> no 
            seu prompt para adicionar o conteudo da transcricao do video selecionado
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <VideoInputForm onVideoUploaded={setVideoId} />

          <Separator />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <PromptSelect onPromptSelected={setInput} />
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Voce podera customizar essa opcao em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} value={[temperature]} onValueChange={value => setTemperature(value[0])}/>
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e com possiveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" disabled={isLoading} className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </main>
  )
}


