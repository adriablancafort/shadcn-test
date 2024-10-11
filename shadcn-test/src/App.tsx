import { DatePicker } from "@/components/DatePicker.tsx"
import { CardWithForm } from "@/components/CardWithForm.tsx"
import { Chart } from "@/components/Chart.tsx"
import { PaginationComponent } from "@/components/PaginationComponent.tsx"

export default function Home() {
  return (
    <div>
      <DatePicker />
      <CardWithForm />
      <Chart />
      <PaginationComponent />
    </div>
  )
}
