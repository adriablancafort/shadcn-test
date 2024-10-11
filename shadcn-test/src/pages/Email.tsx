import { PopoverComponent } from "@/components/PopoverComponent";
import { Link } from 'react-router-dom';

export default function Email() {
  return (
    <div>
      <PopoverComponent />
      <Link to="/">Go to Home</Link>
    </div>
  );
}