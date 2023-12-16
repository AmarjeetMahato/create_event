import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
            <div className="wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href={"/"}>
                      <h1>Logo</h1>
                </Link>

                <p>2023 Evently. All Rights reserved.</p>
            </div>
    </footer>
  )
}

export default Footer