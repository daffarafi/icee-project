import { Check } from '@icons'

export const Thanks: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-6">
        <span className="text-5xl  font-semibold">Thanks for registering!</span>
        <Check fill="fill-green-500" size="w-20 h-20" />
      </div>
    </section>
  )
}
