import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"

  
const MobileNav = () => {
  return (
       <nav className="md:hidden">
              <Sheet>
  <SheetTrigger className="align-middle">Open</SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <h1>Logo</h1>
  <Separator />
  <NavItems/>
  </SheetContent>
</Sheet>
       </nav>

  )
}

export default MobileNav