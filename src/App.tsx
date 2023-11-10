import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";

import { Textarea } from "./components/textarea";

import { Toaster } from "./components/ui/toaster";

export function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!input.length) {
      setOutput("");
    }

    if (isCopied) {
      setIsCopied(false);
    }
  }, [input]);

  function handleCopy() {
    navigator.clipboard.writeText(output);
    setIsCopied(true);
  }

  function handleInvert() {
    const invertedInput = input.split("").reverse().join("");
    setOutput(invertedInput);
  }

  function handleMark() {
    // todo: lógica aqui...
    // após realizar a lógica, para exibir o resultado é preciso chmar a função setOutput com o valor
    // ex: setOutput('123')
  }

  function handleSite() {
    // todo: lógica aqui...
    // após realizar a lógica, para exibir o resultado é preciso chmar a função setOutput com o valor
    // ex: setOutput('123')
  }

  return (
    <div className="h-screen w-screen bg-background flex justify-center items-center max-sm:p-3">
      <Card className="w-1/2">
        <CardHeader>
          <h1 className="text-2xl font-medium text-center">
            Criptografador de texto
          </h1>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Textarea
            placeholder="Digite o text aqui"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </CardContent>

        <CardContent className="flex gap-3">
          <Button className="w-full" onClick={handleInvert}>
            Inverter texto
          </Button>

          <Button className="w-full" onClick={handleMark}>
            Marcas
          </Button>

          <Button className="w-full" onClick={handleSite}>
            Anuncios e sites
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col">
          <Textarea
            placeholder="O resultado será exibido aqui..."
            value={output}
            disabled
            action={() => (
              <Button
                className="flex items-center gap-2"
                variant="ghost"
                disabled={!output || isCopied}
                onClick={handleCopy}
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar</span>
                  </>
                )}
              </Button>
            )}
          />
        </CardFooter>
      </Card>

      <Toaster />
    </div>
  );
}
