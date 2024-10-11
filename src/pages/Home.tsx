import { ModeToggle } from "@/components/ModeToggle"
import { DatePicker } from "@/components/DatePicker"
import { CardWithForm } from "@/components/CardWithForm"
import { Chart } from "@/components/Chart"
import { PaginationComponent } from "@/components/PaginationComponent"
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <DatePicker />
      <Link to="/email">Go to Email</Link>
      <CardWithForm />
      <Chart />
      <PaginationComponent />
    </div>
  )
}