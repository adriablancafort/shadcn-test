import { ModeToggle } from "@/components/ModeToggle"
import { DatePicker } from "@/components/DatePicker"
import { CardWithForm } from "@/components/CardWithForm"
import { Chart } from "@/components/Chart"
import { PaginationComponent } from "@/components/PaginationComponent"

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <DatePicker />
      <CardWithForm />
      <Chart />
      <PaginationComponent />
    </div>
  )
}