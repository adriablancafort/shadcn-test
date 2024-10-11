import { DatePicker } from "@/components/DatePicker.tsx"
import { CardWithForm } from "@/components/CardWithForm.tsx"
import { Chart } from "@/components/Chart.tsx"

export default function Home() {
  return (
    <div>
      <DatePicker />
      <CardWithForm />
      <Chart />
    </div>
  )
}
