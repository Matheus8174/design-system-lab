import { Envelope, Lock } from 'phosphor-react';

import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Heading from './components/Heading';
import Logo from './components/Logo';
import Text from './components/Text';
import { TextInput } from './components/TextInput';

import './styles/global.css';

function App() {
  return (
    <div className="w-screen h-full bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex gap-4 flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>

            <TextInput.Input id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>

            <TextInput.Input id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild={true} size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild={true} size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
          Não possui conta? crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}

export default App
